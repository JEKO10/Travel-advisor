import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeMap from "./components/HomeMap";
import PlaceInfo from "./components/PlaceInfo";
import { getPlaces } from "./components/APIs";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces().then((data) => {
      setPlaces(data.data);
    });
  }, []);

  console.log(places);

  return (
    <>
      <Header />
      <main>
        <PlaceInfo />
        <HomeMap />
      </main>
    </>
  );
}

export default App;
