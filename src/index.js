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
import WrapperComponent from './wrappercomponent';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={WrapperComponent} />
        <Route path="/list" component={List} />
        <Route path="/users" component={UserComponent} />
        <Route path="/test" component={Test} />
        <Route path="/lifecycle" component={LifeCycle}/>
        <Route path="*" component={Title}/>
      </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
