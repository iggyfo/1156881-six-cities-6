import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getOfferNum} from "./utils";
import {offers} from "./mock/offers";
import {nearby} from "./mock/nerby";
import {reviews} from "./mock/reviews";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const Setting = {
  NUM_OFFER: getOfferNum(),
  USER_AUTH: `simplepeople@gmail.com`,
  CITIES: [
    `Paris`,
    `Cologne`,
    `Brussels`,
    `Amsterdam`,
    `Hamburg`,
    `Dusseldorf`
  ],
};

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offerNum={Setting.NUM_OFFER}
        userAuth={Setting.USER_AUTH}
        cities={Setting.CITIES}
        offers={offers}
        nearby={nearby}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
