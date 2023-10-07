
import {GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import React from "react";
const containerStyle = {
    width: '1280px',
    height: '400px'
};

const center = {
    lat: 40.74,
     lng: -74.18
};

export default function Map(){
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries : ['drawing']

    })
// eslint-disable-next-line
    const [map, setMap] = React.useState(null)

    let historicalOverlay;

    const onLoad = React.useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        historicalOverlay = new window.google.maps.GroundOverlay(
            "https://storage.googleapis.com/geo-devrel-public-buckets/newark_nj_1922-661x516.jpeg",
            {
                north: 40.773941,
                south: 40.712216,
                east: -74.12544,
                west: -74.22655,
              },
          );
        map.fitBounds(bounds);
        historicalOverlay.setMap(map);


    }, [])
// eslint-disable-next-line
    const onUnmount = React.useCallback(function callback(map){
        historicalOverlay.setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap

        mapContainerClassName="map-container"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        </GoogleMap>
    ) : <></>
}
