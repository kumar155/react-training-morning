import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Mycomponent1 from './functional';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Title, List } from './HomePage';
import UserComponent from './UserComponent';
import { Test } from './ParentComponent';
import LifeCycle from './lifecycle';
import configureStore from './store';
import { Provider } from 'react-redux';
import Root from './root';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reduers/rootReducer';


ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
);
registerServiceWorker();
