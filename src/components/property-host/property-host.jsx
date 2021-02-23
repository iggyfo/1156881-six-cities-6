import React from "react";
import propTypes from "prop-types";
import {hostPropsTypes} from "../../props-types";

const PropertyHost = ({host, description}) => {
  const {name, isPro, avatarUrl} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={isPro ?
          `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
          `property__avatar-wrapper user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
        </div>
        <span className="property__user-name">{name}</span>
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </div>
  );
};

PropertyHost.propTypes = {
  host: propTypes.shape(hostPropsTypes).isRequired,
  description: propTypes.string.isRequired,
};

export default PropertyHost;
