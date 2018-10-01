import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log('constructor calling first from lifecycle');
    }
    onIncrement = () => {
        return this.setState({count: this.state.count + 1});
    }

    render() {
        console.log('render called from life cycle component');
        return(
            <div clasName="">
                <button onClick={this.onIncrement}>Increment Count</button>
                <CountComponent count={this.state.count} name='from lifecycle component..'/>
            </div>
        );
    }
}

export class CountComponent extends Component {
    constructor() {        
        console.log('constructor calling first');
        super();
        this.state={
            number: 'this is not my number',
        }
    }
    componentWillMount() {
        console.log('component will mount called');
    }
    componentDidMount() {
        console.log('component did mount called');
    }
    componentWillReceiveProps(newProps) {
        console.log('component received new props', newProps);
        if(newProps.count === 9) {
            this.setState({number: 'yes my number received...'});
        }
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('should component update called', newProps);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('component will update called', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update called', prevProps, prevState);
    }
    render() {        
        console.log('render called from component');
        return(
            <div><br/>Count : {this.props.count} <br/>
            <br/>
                {this.state.number}
            <br/>
                {this.props.name}
                <br/>
                {this.props.myFunction('dynamic name')}
            </div>
        );
    }
}
CountComponent.propTypes = {
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
}
CountComponent.defaultProps = {
    name: 'This is my count component name...!',
    myFunction: (name) => {
        return name;
    }
}