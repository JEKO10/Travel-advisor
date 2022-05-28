import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeMap from "./components/HomeMap";
import PlaceInfo from "./components/PlaceInfo";
import { getPlaces } from "./components/APIs";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlaces(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <Header />
      <main>
        <PlaceInfo isLoading={isLoading} />
        <HomeMap
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
        />
      </main>
    </>
  );
}

export default App;
