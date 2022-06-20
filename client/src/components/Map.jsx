import React, { useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";

const Map = ({ annonce }) => {

    function MyMap() {

        const position = {lat: parseFloat(annonce.latitude_bien, 10), lng: parseFloat(annonce.longitude_bien, 10)}
        const [info, setInfo] = useState(false)
        console.log(position);
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={position}
            >
                <Marker 
                    position={position} 
                    onClick={() => {
                        setInfo(true)
                    }}
                />
                {info && (
                    <InfoWindow 
                        position={position}
                        onCloseClick={() => {
                            setInfo(false)
                        }}
                    >
                        <div>
                            <h3 style={{color: 'red'}}>
                                {annonce.ville_bien + ", " + annonce.wilaya_bien}
                            </h3>
                            <h4 style={{color: '#673AB7'}}>
                                {annonce.description_bien}
                            </h4>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        );    
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(MyMap));

    return (
        <>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </>
    );
};

export default Map;