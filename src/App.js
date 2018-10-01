import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './mycomponent';
import Mycomponent1 from './functional';
import { Test } from './ParentComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      name: 'react class',
    };
  }
  increment = () => {
    this.setState({count: this.state.count +1});
  }
  changeName = () => {
    this.setState({name: 'some other name'});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi this is react</h1>
        Count_Value: {this.state.count}
        <br/>
        <br/>
        <button onClick={this.increment}>Increment Count Value</button>
        <br/>
        <br/>
        <button onClick={this.changeName}>Change Name</button>
        <br/>
        <br/>
        {this.state.name}
        <br/>
        <br/>
        <MyComponent trainingName='React Redux'/>
        <Test />
      </div>
    );
  }
}

export default App;
