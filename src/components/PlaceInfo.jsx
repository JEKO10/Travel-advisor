import React, { useState } from "react";

function PlaceInfo() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Caffe" },
    { name: "Bar" },
    { name: "Restaurant" },
    { name: "Hotel" },
    { name: "Pub" },
  ];

  return (
    <section className="placeInfo">
      <h1>Restaurants, Hotels & Attractions around you</h1>
      <div className="filters">
        <label htmlFor="type">Type</label>
        <div>
          <select
            name="type"
            onChange={(e) => {
              setType(e.target.value);
              console.log(type);
            }}
          >
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
          <select
            name="rating"
            onChange={(e) => {
              setRating(e.target.value);
              console.log(rating);
            }}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className="places">
        {places.map((place) => {
          return <h1 key={place.name}>{place.name}</h1>;
        })}
      </div>
    </section>
  );
}

export default PlaceInfo;
