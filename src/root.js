import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Title, List } from './HomePage';
import UserComponent from './UserComponent';
import { Test } from './ParentComponent';
import LifeCycle from './lifecycle';
import { MainComponent } from './mainComponent';

export const Root = ({ store }) => (
   <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route path="/list" component={List} />
        <Route path="/users" component={UserComponent} />
        <Route path="/test" component={Test} />
        <Route path="/lifecycle" component={LifeCycle}/>
        <Route path="*" component={Title}/>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root;