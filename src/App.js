import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeMap from "./components/HomeMap";
import PlaceInfo from "./components/PlaceInfo";
import { getPlaces } from "./components/APIs";

function App() {
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlaces(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [bounds]);

  return (
    <>
      <Header />
      <main>
        <PlaceInfo isLoading={isLoading} places={places} />
        <HomeMap setBounds={setBounds} />
      </main>
    </>
  );
}

export default App;