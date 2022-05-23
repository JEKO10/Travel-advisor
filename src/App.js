import React from "react";
import Header from "./components/Header";
import HomeMap from "./components/HomeMap";
import PlaceInfo from "./components/PlaceInfo";

function App() {
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
