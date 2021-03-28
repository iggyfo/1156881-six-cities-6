import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createApi} from "./services/api";
import {ActionCreator} from './store/action';
import App from './components/app/app';
import {offers} from "./mock/offers";
import {nearPlaces} from "./mock/nerby";
import {reviews} from "./mock/reviews";
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        nearPlaces={nearPlaces}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
