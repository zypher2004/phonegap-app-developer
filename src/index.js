import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, hashHistory } from 'react-router';

import App from 'containers/App';
import MainPage from 'containers/MainPage';
import ConnectTab from 'containers/ConnectTab';
import SavedTab from 'containers/SavedTab';
import configureStore from 'stores/configureStore';

import { save, load } from 'utils/deploy';

const store = configureStore();

import './topcoat-mobile-light.min.css';
import './index.css';

function startApp() {
  ReactDOM.render((
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route component={ App }>
          <Route path="main" component={ MainPage }>
            <Route path="connect" component={ ConnectTab } />
            <Route path="saved" component={ SavedTab } />
          </Route>
          <Redirect from="/" to="/main/connect" />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'));
}

if (!window.cordova) {
  console.log(`Cordova not found, starting anyways`);
  startApp();
} else {
  console.log(`Cordova found, starting now`);
  document.addEventListener('deviceready', startApp, false);
}

