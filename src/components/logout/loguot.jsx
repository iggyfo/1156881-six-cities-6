import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../store/api-actions";
import {Link} from "react-router-dom";


const Logout = () => {

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={`#`} onClick={onLogout}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Logout;


