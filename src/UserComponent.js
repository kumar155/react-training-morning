import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserComponent extends Component {
    constructor()
    {
        super();
        this.state = {
            usernames: [
                {Id: 1, Name: 'Satish'}, 
                {Id: 2, Name: 'Kumar'},
                {Id: 1, Name: 'Test name'}],
        }
    }
    render(){
        return(
            <div>
                <ul>{this.state.usernames.map((eachName) => {
                return <li>{eachName.Name}</li>
                })}</ul>  
                <Link to="/"><a>Back Home</a></Link>  
                <br/><hr/>
                <Link to="/list"><a>Show the List</a></Link>
            </div>
        );
    }
}