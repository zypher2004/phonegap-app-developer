import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import App from 'containers/App';
import configureStore from 'stores/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route component={ App } />
    </Router>
  </Provider>
), document.getElementById('app'));
