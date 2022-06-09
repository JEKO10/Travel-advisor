import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import * as L from "leaflet";
import StarRatings from "react-star-ratings";
import ReactDomServer from "react-dom/server";

function HomeMap({ setBounds, places, coordinates, setCoordinates }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const markerIcon = (name, photo, rating) =>
    L.divIcon({
      className: "markerIcon",
      html:
        "<div>" +
        `<h3>${name}</h3>` +
        `<img
            src=${photo}
            title=${name}
            alt=${name}
          />` +
        `${ReactDomServer.renderToString(
          <StarRatings
            rating={Number(rating)}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
        )}` +
        "</div>",
    });

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
            <Marker
              key={i}
              position={
                place.latitude && place.longitude
                  ? [place.latitude, place.longitude]
                  : coordinates
              }
              icon={markerIcon(
                place.name,
                place.photo
                  ? place.photo.images.large.url
                  : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",
                place.rating ? place.rating : ""
              )}
            ></Marker>
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
