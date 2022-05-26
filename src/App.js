import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeMap from "./components/HomeMap";
import PlaceInfo from "./components/PlaceInfo";
import { getPlaces } from "./components/APIs";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getPlaces().then((data) => {
      setPlaces(data.data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <Header />
      <main>
        <PlaceInfo />
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
