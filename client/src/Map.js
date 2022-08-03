import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Location from "./Location"
import './Map.css';

mapboxgl.accessToken='pk.eyJ1Ijoicml2ZXJrYW50ZXJtYW4iLCJhIjoiY2w2NnZ5MDc1M2V0bzNybGNhcDU3Mjc3dyJ9.tnjv32ys2rS51R0lEp6yfg'

const Map = () => {
    const mapContainerRef = useRef(null);
  
    const [lng, setLng] = useState(-73.9374);
    const [lat, setLat] = useState(40.6454);
    const [zoom, setZoom] = useState(11.16);
  
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
  
      // Clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div>
        <div>
        <div className='sidebarStyle'>
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
        </div>

        <div className='comment-container'>
            <div>
                <h3>Username</h3>
                <p>Comment Here</p>
            </div>
      </div>
      </div>
    );
  };



/*function Map() {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(41)
    const [lat, setLat] = useState(74)
    const [zoom, setZoom] = useState(1.5)

    useEffect(() => {

        /*fetch("/locations")
        .then((response) => response.json())
        .then((locations) => setShowLocations(locations));

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        

        // forEach - render custom marker components from rails
        /* for.Each(location) => {
                 const marker = new mapboxgl.Marker({
                    color: 'purple'
            setCoord: [location.coordinates],
            popup: setPopup(new mapboxgl.Popup({ offset: 30})),
             setHTML('<h4>')
            addTo: addTo(map)
        })

        const ref = React.createRef();
            ref.current = document.createElement('div')
            ReactDOM.render(
                <Marker onClick={markerClicked} feature={feature} />,
                ref.current
            )
        }

        
    })
    return (
    <div>
        <div className='sidebar'>
            <div>
                Longitude: {lng} | :Latitidue: {lat} | Zoom: {zoom}
            </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
    </div>
    )
}*/

export default Map;