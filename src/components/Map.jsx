import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <section>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDd46_7vp4fAgDxGkz-NZSHj1ylFuMNcmo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      ></GoogleMapReact>
    </section>
  );
}

export default Map;
