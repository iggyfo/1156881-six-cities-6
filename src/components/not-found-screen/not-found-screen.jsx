import React from "react";
import {Link} from 'react-router-dom';
import Header from "../header/header";


const NotFoundScreen = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="page__main locations container">
        <h1 className="locations__item-link">404. Page not found</h1>
        <Link className="locations__item-link" to="/">Six cities Homepage</Link>
      </main>
    </React.Fragment>
  );
};

export default NotFoundScreen;
