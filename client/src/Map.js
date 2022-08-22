import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Location from "./Location"
import NewReview from "./NewReview"
import './Map.css';

mapboxgl.accessToken='pk.eyJ1Ijoicml2ZXJrYW50ZXJtYW4iLCJhIjoiY2w2NnZ5MDc1M2V0bzNybGNhcDU3Mjc3dyJ9.tnjv32ys2rS51R0lEp6yfg'

const Map = () => {
    const mapContainerRef = useRef(null);
  
    const [lng, setLng] = useState(-73.9374);
    const [lat, setLat] = useState(40.6454);
    const [zoom, setZoom] = useState(11.16);

    //const [selectedLocation, setLocation] = useState(null);
  
    // Initialize map when component mounts
    useEffect(() => {

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
  
  
      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });

      /*map.featureLayer.on('ready', () => {
        getLocations.map();
      })
      */
     
      // Clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div className='homeimg' style={{
        backgroundImage: `url('https://i.imgur.com/MfunWH6.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}>
        <div className='mapdiv'>
        <div className='sidebarStyle'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
        </div>
      </div>
    );
  };

  export default Map;