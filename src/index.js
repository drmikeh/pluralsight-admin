import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {loadCourses} from './actions/courseActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root')
);
