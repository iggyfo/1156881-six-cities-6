import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {getOfferNum} from "./utils";

const Setting = {
  HOTELS: [{}, {}, {}, {}, {}],
  NUM_OFFER: getOfferNum(),
  USER_AUTH: `simplepeople@gmail.com`,
  CITIES: [
    `Paris`,
    `Colonge`,
    `Brussels`,
    `Amsterdam`,
    `Hamburg`,
    `Dusseldorf`
  ],
};

ReactDOM.render(
    <App
      hotels={Setting.HOTELS}
      offerNum={Setting.NUM_OFFER}
      userAuth={Setting.USER_AUTH}
      cities={Setting.CITIES}
    />,
    document.querySelector(`#root`)
);
