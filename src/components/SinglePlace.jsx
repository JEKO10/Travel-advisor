import React from "react";

function SinglePlace({ place }) {
  console.log(place);

  const defaultPlace = {
    awards: place.awards
      ? place.awards
      : [{ images: { small: "default" }, display_name: "default" }],
    cuisine: place.cuisine ? place.cuisine : [{ name: "default" }],
  };

  return (
    <section>
      <img
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
        alt={place.name}
      />
      <h2>{place.name}</h2>
      <h2>{place.rating}</h2>
      <h1>{place.price_level}</h1>
      <h2>{place.ranking}</h2>
      {defaultPlace.awards.map((award) => (
        <div key={award.display_name}>
          <img src={award.images.small} alt="award" />
          <h3>{award.display_name}</h3>
        </div>
      ))}
      {defaultPlace.cuisine.map(({ name }) => (
        <h3 key={name}>{name}</h3>
      ))}
      {place.address && <h3>{place.address}</h3>}
      {place.phone && <h1>{place.phone}</h1>}
      <button
        size="small"
        color="primary"
        onClick={() => window.open(place.web_url, "_blank")}
      >
        Trip Advisor
      </button>
      <button
        size="small"
        color="primary"
        onClick={() => window.open(place.website, "_blank")}
      >
        Website
      </button>
    </section>
  );
}

export default SinglePlace;
