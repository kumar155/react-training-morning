import React from 'react';

export default class LeftComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'coconut',
        };
    }
    render() {
        return (
          <div>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        );
      }     

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

}