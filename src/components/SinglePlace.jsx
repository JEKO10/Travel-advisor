import React from "react";

function SinglePlace({ place }) {
  console.log(place);

  return (
    <section>
      <img
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <h5>{place.name}</h5>
      <h2>{place.rating}</h2>
      <h1>{place.price_level}</h1>
      <h2>{place.ranking}</h2>
      {place.awards.map((award) => (
        <div>
          <img src={award.images.small} />
          <h1>{award.display_name}</h1>
        </div>
      ))}
      {place.cuisine.map(({ name }) => (
        <h1>{name}</h1>
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
