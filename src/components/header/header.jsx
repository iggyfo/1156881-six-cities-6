import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {connect} from "react-redux";
import Logout from "../logout/loguot";


const Header = ({authInfo}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MAIN_SCREEN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={
                  authInfo
                    ? AppRoute.FAVORITES_SCREEN
                    : AppRoute.AUTH_SCREEN
                }>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {
                      authInfo
                        ? authInfo.email
                        : `Sign in`
                    }
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <Logout />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authInfo: propTypes.shape({
    email: propTypes.string.isRequired
  })
};

const mapStateToProps = ({authInfo}) => ({
  authInfo,
});

export {Header};
export default connect(mapStateToProps, null)(Header);


