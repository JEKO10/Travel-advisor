import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";

function HomeMap({ coordinates, setBounds, setCoordinates }) {
  const SetViewOnClick = () => {
    const map = useMapEvent("move", () => {
      const latLng = map.getBounds();

      setCoordinates(latLng._northEast);
    });

    return null;
  };

  console.log(coordinates);

  return (
    <section className="leaflet-container">
      <MapContainer center={coordinates} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}></Marker>
        <SetViewOnClick />
      </MapContainer>
    </section>
  );
}

export default HomeMap;
