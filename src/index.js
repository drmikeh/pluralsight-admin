import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
