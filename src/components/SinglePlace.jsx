import React from "react";
import { ImPhone, ImLocation } from "react-icons/im";
import StarRatings from "react-star-ratings";

function SinglePlace({ place }) {
  const defaultPlace = {
    awards: place.awards
      ? place.awards
      : [{ images: { small: "" }, display_name: "" }],
    cuisine: place.cuisine ? place.cuisine : [{ name: "" }],
  };

  return (
    <section className="singlePlace">
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
      {place.rating ? (
        <StarRatings
          rating={Number(place.rating)}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="30px"
          starSpacing="1px"
        />
      ) : (
        "No rating"
      )}
      <div className="price">
        <h3>Price</h3>
        <h4>{place.price_level}</h4>
      </div>
      <div className="ranking">
        <h4>Ranking</h4>
        <h4>{place.ranking}</h4>
      </div>
      {defaultPlace.awards.map((award) => (
        <div key={award.display_name} className="awards">
          <img src={award.images.small} alt="award" />
          <h4>{award.display_name}</h4>
        </div>
      ))}
      <div className="cuisine">
        {defaultPlace.cuisine.map(({ name }) => (
          <h5 key={name}>{name}</h5>
        ))}
      </div>
      {place.address && (
        <div className="address">
          <ImLocation />
          <h5>{place.address}</h5>
        </div>
      )}
      {place.phone && (
        <div className="phone">
          <ImPhone />
          <h4>{place.phone}</h4>
        </div>
      )}
      <button onClick={() => window.open(place.web_url, "_blank")}>
        Trip Advisor
      </button>
      <button onClick={() => window.open(place.website, "_blank")}>
        Website
      </button>
    </section>
  );
}

export default SinglePlace;
