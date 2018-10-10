
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as IncrementActions from './actions/simpleActions';

export class RightComponent extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <br/>
                <br/>
                <button onClick={this.OnIncrement}>Increment Count</button>
            </div>
        );
    }
    
    OnIncrement = () => {
        return this.props.IncrementAction();
    }
}

const mapStateToProps = (state) => ({
}); 
  
const mapDispatchToProps = (dispatch) => ({
    IncrementAction: () => dispatch(IncrementActions.IncrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightComponent);