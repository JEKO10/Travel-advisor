import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvent } from "react-leaflet";

function HomeMap({ setBounds }) {
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
          <SetViewOnClick />
        </MapContainer>
      ) : (
        ""
      )}
    </section>
  );
}

export default HomeMap;
