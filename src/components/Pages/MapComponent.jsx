import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = ({ locality }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const markerRef = useRef(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkLocality = () => {
    if (!locality) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: locality }, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }
        markerRef.current = new window.google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return isLoaded ? (
    <div>
      <button
        type="button"
        onClick={handleMarkLocality}
        className="sm:mt-2 sm:bg-blue-500 sm:text-white sm:py-2 sm:px-4 sm:rounded"
      >
        Mark on Map
      </button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(MapComponent);
