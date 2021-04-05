import React, {useRef, useEffect} from "react";
import propTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {getCitiesCoords} from "../../utils";
import {useSelector} from "react-redux";
import {offerPropsTypes} from "../../props-types";


const CITY_ZOOM = 13;
const ICON_SIZE = [27, 39];

const Map = ({offers}) => {

  const {currentCity, activeOfferId} = useSelector((state) => state.CHANGE);
  const cityCoords = getCitiesCoords(currentCity);

  const icon = leaflet.icon({
    iconUrl: `./img/pin.svg`,
    iconSize: ICON_SIZE,
  });

  const activeIcon = leaflet.icon({
    iconUrl: `./img/pin-active.svg`,
    iconSize: ICON_SIZE,
  });

  const mapRef = useRef();
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: cityCoords,
      zoom: CITY_ZOOM,
      zoomControl: false,
      marker: true
    });
    mapRef.current.setView(cityCoords, CITY_ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.map(({id, location}) => {
      const addOfferToMap = (iconType) => {
        leaflet
          .marker([location.latitude, location.longitude], {icon: iconType})
          .addTo(mapRef.current);
      };
      return activeOfferId === id
        ? addOfferToMap(activeIcon)
        : addOfferToMap(icon);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [offers, activeOfferId]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes))
};

export default Map;

