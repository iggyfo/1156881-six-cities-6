import React from "react";
import propTypes from "prop-types";


const OfferMark = ({className}) => {
  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );
};

OfferMark.propTypes = {
  className: propTypes.string.isRequired,
};

export default OfferMark;
