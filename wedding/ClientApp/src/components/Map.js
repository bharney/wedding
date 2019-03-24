import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
    withScriptjs
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={14}
        defaultCenter={{ lat: props.markers[0].position.lat, lng: props.markers[0].position.lng }}>
        {props.markers.map((marker, index) => (
            <Marker
                key={index}
                position={marker.position}>
                {marker.showInfo && (
                    <InfoWindow>
                        <div>{marker.infoContent}</div>
                    </InfoWindow>
                )}
            </Marker>
        ))}
    </GoogleMap>
)));
export default Map;
