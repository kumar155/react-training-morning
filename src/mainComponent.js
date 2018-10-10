
import React, {Component} from 'react';
import { connect } from 'react-redux';
import RightComponent from './RightComponent';

export class MainComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <RightComponent />
                <br/>
                <br/>
                <p>Present Count Value: {this.props.simpleReducer}</p>
            </div>
        );
    }
}   

const mapStateToProps = (state) => ({
    simpleReducer: state.simpleReducer,
}); 
  
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);