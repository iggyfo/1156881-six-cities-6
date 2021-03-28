import React from 'react';


const LoadingScreen = () => {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Loading ...</b>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </div>
  );
};

export default LoadingScreen;
