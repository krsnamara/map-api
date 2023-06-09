import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

function Map() {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  // useEffect(() => {
  //   const loadMapAPI = () => {
  //     const script = document.createElement("script");
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB1POlWB8A-TN4Jufgd01PctfvGFInAd3Y`;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   loadMapAPI();
  // }, []);

  // const handleMapChange = (mapProps, map) => {
  //   // Handle map change event here
  //   console.log("Map changed:", mapProps, map);
  // };

  // const handleMarkerClick = (event) => {
  //   // Handle marker click event here
  //   console.log("Marker clicked:", event);
  // };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB1POlWB8A-TN4Jufgd01PctfvGFInAd3Y" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
