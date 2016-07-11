import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, hashHistory } from 'react-router';

import App from 'containers/App';
import Main from 'containers/Main';
import configureStore from 'stores/configureStore';

const store = configureStore();

import './topcoat-mobile-light.css';
import './index.css';

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route component={ App }>
        <Route path="main" component={ Main } />
        <Redirect from="/" to="/main" />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
