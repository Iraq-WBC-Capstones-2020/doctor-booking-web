import React, { useState } from 'react'
import Map, {Marker} from 'react-map-gl'
import './style.css'
const API =
  'pk.eyJ1IjoiaHVzc2VpbnRhbGFsIiwiYSI6ImNrY3M4dWxwbzFtZDIycnM2OHQ4dXM4cnIifQ.ofCZrIlVF_r4YpQDzSi13g';
function ClinicMap(){

    const [viewport, setViewport] = useState({
        latitude: 36.1901,
        longitude: 43.993,
        height: '50vh',
        width: '100%',
        zoom: 10,
      });

    return(
        <div className="mt-5 theAdress">
            <h3 className="mt-5 mb-5">Adress</h3>
            <h6>city, country</h6>
        <Map
            {...viewport}
            mapboxApiAccessToken={API}
            onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle={'mapbox://styles/mapbox/streets-v11'}
        ></Map>

</div>
    )
}

export default ClinicMap