import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <p>Trainig name is: {this.props.trainingName} </p>
            </div>
        );
    }
}

MyComponent.propTypes = {
    trainingName: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    myFunction: PropTypes.func.isRequired,
}

MyComponent.defaultProps = {
    trainingName: 'React JS',
}

export default MyComponent;