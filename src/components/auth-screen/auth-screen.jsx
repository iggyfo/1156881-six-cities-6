import React, {useRef, useState, useEffect} from "react";
import {Redirect} from 'react-router-dom';
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";
import {toast} from "react-toastify";


const AuthScreen = () => {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const [validEmail, setValidEmail] = useState(true);
  const notify = () => toast(`Incorrect Email`);
  const notifyPassword = () => toast(`Password can't be empty`);
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleBlur = () => {
    if (loginRef.current.value === ``) {
      setValidEmail(false);
    }
    const RE = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    setValidEmail(RE.test(loginRef.current.value));
  };

  const handleFocus = () => {
    setValidEmail(true);
  };

  useEffect(() => {
    if (!validEmail) {
      notify();
    }
  }, [validEmail]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (loginRef.current.value === `` || passwordRef.current.value === ``) {
      if (loginRef.current.value === ``) {
        setValidEmail(false);
      }

      if (passwordRef.current.value === ``) {
        notifyPassword();
      }

      return false;
    }

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
    return true;
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.MAIN_SCREEN} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AuthScreen;
