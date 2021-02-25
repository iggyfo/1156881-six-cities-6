import React, {useRef, useEffect} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import propTypes from "prop-types";


const Map = ({offersLocation}) => {
  const cityLocation = {
    "latitude": 52.37454,
    "longitude": 4.897976,
    "zoom": 12
  };

  const cityCoords = [cityLocation.latitude, cityLocation.longitude];

  const mapRef = useRef();
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityLocation.zoom,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(cityCoords, cityLocation.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offersLocation.map((offerLocation) => {
      const offerCords = [offerLocation.latitude, offerLocation.longitude];
      leaflet
        .marker(offerCords, {icon})
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  const icon = leaflet.icon({
    iconUrl: `./img/pin.svg`,
    iconSize: [30, 30]
  });


  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};


Map.propTypes = {
  offersLocation: propTypes.arrayOf(propTypes.shape({
    latitude: propTypes.number.isRequired,
    longitude: propTypes.number.isRequired,
    zoom: propTypes.number.isRequired,
  }))
};

export default Map;

