
import React, {Component} from 'react';

export default class WrapperComponent extends Component {
    constructor()
    {
        super();
        this.state ={
            name: 'React',
            count: 0,
        }
    }
    shouldComponentUpdate(newProps, newState){
        console.log('should component update from parent',newState);
        if(newState.name !== this.state.name){
            return true;
        }
    }
    componentWillUpdate() {
        console.log('component will update from parent');
    }
    
    componentDidUpdate() {
        console.log('component did update from parent');
    }
    render() {
        return(
            <div>
                <h1>This is Parent Component</h1>
                Name: {this.state.name}
                <br/>
                <br/>
                <button onClick={this.IncrementCount}>Increment Count</button>
                <button onClick={this.ChangeName}>Change Name</button>
                <br/>
                <br/>
                <ChildComponent count={this.state.count} name={this.state.name}/>
            </div>
        );
    }
    IncrementCount = () => {
        this.setState({count: this.state.count + 1});
    }
    ChangeName = () => {
        this.setState({name: 'React Online Training...'});
    }
}

export class ChildComponent extends Component {
    constructor(){
        super();
        this.state = {
            myDBValue: '0',
        }
        console.log('initialization...');
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentDidMount() {
        console.log('component did mount');
    }
    componentWillReceiveProps(newProps) {
        console.log('component will recieve props', newProps);
    }
    shouldComponentUpdate(newProps){
        console.log('should component update', newProps);
        if(newProps.name !== this.props.name)
        {
            return true;
        }
    }
    componentWillUpdate() {
        console.log('component will update');
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    render() {
        console.log('render..');
        return(
            <div>
               Child Component Count is:{this.props.count}
               <br/>
                <br/>
               Child Component Name is:{this.props.name}
            </div>
        );
    }
}