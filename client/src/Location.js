import React, { useEffect, useState } from 'react';

const Location = () => {

    const locationLat = location.latitude
    const locationLong = location.longitude

    const [showLocations, setShowLocations] = useState([]);
    const [showCoord, setShowCoord] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/locations', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(locations=> setLocations(locations))
    }, [])

}

export default Location;


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
        }*/