import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';


const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store } >
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
          <Route path="/sign-in" component={ AuthFormContainer } onEnter={redirectIfLoggedIn}/>
          <Route path="/sign-up" component={ AuthFormContainer } onEnter={redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );
};

// <Route path="/home" component={ Home } onEnter={ checkAuth } />

export default Root;
