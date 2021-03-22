import React, {useRef, useEffect} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import propTypes from "prop-types";
import {getOffersLocation, getCitiesCoords} from "../../utils";
import {offerPropsTypes} from "../../props-types";
import {connect} from "react-redux";


const CITY_ZOOM = 12;

const Map = ({offers, currentCity, activeOfferId}) => {
  const cityCoords = getCitiesCoords(currentCity);

  const icon = leaflet.icon({
    iconUrl: `./img/pin.svg`,
    iconSize: [27, 39]
  });

  const activeIcon = leaflet.icon({
    iconUrl: `./img/pin-active.svg`,
    iconSize: [27, 39]
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

    offers.map((offer) => {
      if (activeOfferId === offer.id) {
        const activeOfferCoords = [offer.location.latitude, offer.location.longitude];
        leaflet
          .marker(activeOfferCoords, {icon: activeIcon})
          .addTo(mapRef.current);
      } else {
        const offerCords = [offer.location.latitude, offer.location.longitude];
        leaflet
          .marker(offerCords, {icon})
          .addTo(mapRef.current);
      }
    });

    return () => {
      mapRef.current.remove();
    };
  }, [offers, activeOfferId]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

const mapStateToProps = ({currentCity, activeOfferId}) => ({
  currentCity,
  activeOfferId,
});

Map.propTypes = {
  offers: propTypes.arrayOf(propTypes.shape(offerPropsTypes).isRequired),
  currentCity: propTypes.string.isRequired,
  activeOfferId: propTypes.number,
};

export {Map};
export default connect(mapStateToProps)(Map);

