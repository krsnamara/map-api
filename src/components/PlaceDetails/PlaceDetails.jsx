import React from "react";
import useStyles from "./styles";

function PlaceDetails({ place }) {
  const classes = useStyles();
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
}

export default PlaceDetails;
