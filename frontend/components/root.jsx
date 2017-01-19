import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import HomeContainer from './home/home_container';
import UploadFormContainer from './upload/upload_form_container';
import SongShowContainer from './song_show/song_show_container';
import UserPageContainer from './user_page/user_page_container';

const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    }
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={ store } >
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ AuthFormContainer } onEnter={ensureLoggedIn}/>
          <Route path="/home" component={ HomeContainer } onEnter={ensureLoggedIn}/>
          <Route path="/sign-in" component={ AuthFormContainer } onEnter={redirectIfLoggedIn}/>
          <Route path="/sign-up" component={ AuthFormContainer } onEnter={redirectIfLoggedIn}/>
          <Route path="/upload" component={ UploadFormContainer } onEnter={ensureLoggedIn}/>
          <Route path="/song/:songid" component={ SongShowContainer } onEnter={ensureLoggedIn} />
          <Route path="/user/:userid" component={ UserPageContainer } onEnter={ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
