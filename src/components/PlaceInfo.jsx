import React, { useState } from "react";
import SinglePlace from "./SinglePlace";

function PlaceInfo({ isLoading, places }) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <section className="placeInfo">
      <h1>Restaurants, Hotels & Attractions around you</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
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
      )}
      {isLoading ? (
        ""
      ) : (
        <div className="places">
          {places.map((place, i) => {
            return <SinglePlace key={i} place={place} />;
          })}
        </div>
      )}
    </section>
  );
}

export default PlaceInfo;
