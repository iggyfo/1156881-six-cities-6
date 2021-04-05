import React from 'react';
import ReactDOM from 'react-dom';
import {createApi} from "./services/api";
import {ActionCreator} from './store/action';
import App from './components/app/app';
import {offers} from "./mock/offers";
import {nearPlaces} from "./mock/nerby";
import {reviews} from "./mock/reviews";
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        nearPlaces={nearPlaces}
        reviews={reviews}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>,
    document.querySelector(`#root`)
);
