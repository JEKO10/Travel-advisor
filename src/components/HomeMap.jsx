import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvent, Popup } from "react-leaflet";

function HomeMap({ setBounds, places }) {
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const SetViewOnClick = () => {
    const map = useMapEvent("move", () => {
      const latLng = map.getBounds();

      setCoordinates(latLng._northEast);
      setBounds({ ne: latLng._northEast, sw: latLng._southWest });
    });

    return null;
  };

  return (
    <section className="leaflet-container">
      {coordinates ? (
        <MapContainer center={coordinates} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place, i) => (
            <Popup
              className="popup"
              key={i}
              autoClose={false}
              position={
                place.latitude && place.longitude
                  ? [place.latitude, place.longitude]
                  : coordinates
              }
            >
              <div>
                {place.name}
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  title={place.name}
                  alt={place.name}
                />
              </div>
            </Popup>
          ))}
          <SetViewOnClick />
        </MapContainer>
      ) : (
        ""
      )}
    </section>
  );
}

export default HomeMap;
