import React from "react";
import propTypes from "prop-types";

const PropertyGoods = ({item}) => {
  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
};

PropertyGoods.propTypes = {
  item: propTypes.string.isRequired,
};

export default PropertyGoods;
