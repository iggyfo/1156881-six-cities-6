import React, {useRef, useEffect, memo} from "react";
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

    return () => {
      mapRef.current.remove();
    };
  }, [currentCity]);


  useEffect(() => {
    let markers = [];
    offers.forEach((offer) => {
      const icon = leaflet.icon({
        iconUrl: offer.id === activeOfferId ? `./img/pin-active.svg` : `./img/pin.svg`,
        iconSize: ICON_SIZE,
      });
      const marker = leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      }, {
        icon
      })
        .addTo(mapRef.current)
        .bindPopup(offer.title);

      markers.push(marker);
    });
    return () => {
      markers.forEach((marker) => {
        mapRef.current.removeLayer(marker);
      });
    };
  });

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes))
};

export default memo(Map, (prevProps, nextProps) =>
  prevProps.offers === nextProps.offers
);


