import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import useStyles from "./styles";

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "80%",
  // Set height to "100%"
  margin: "70px 0 0 0", // Adjust the value to match the navbar height
};

const center = {
  lat: 37.8,
  lng: -122.25,
};

function Map() {
  const classes = useStyles();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      className={classes.mapContainer}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
}

export default React.memo(Map);
