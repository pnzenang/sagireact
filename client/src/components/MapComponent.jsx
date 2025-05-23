import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '450px',
};

const center = {
  lat: 39.242025298995266,
  lng: -77.27945590818099,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAG0TdZLR_fttur_V8GEafWP4o9fTzZRo8',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={{ lat: 39.242025298995266, lng: -77.27945590818099 }} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;
