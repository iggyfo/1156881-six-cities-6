import React from "react";
import propTypes from "prop-types";

const PropertyImage = ({image}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  );
};

PropertyImage.prototype = {
  image: propTypes.string,
};

export default PropertyImage;
