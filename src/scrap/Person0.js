// Imports
import React, { Component } from 'react';

// Extend the Component class
class Person extends Component {

  // Methods
  constructor() {
    super();
  }

  onValueChange = event => {
    const value = event.target;
    const { onChange } = this.props;
    const { id } = this.props.person;

    onChange(id, value);
  }

  render() {
    // const { name, age } = this.props.person;
    const { name } = this.props.person;
    return (
      <li>
        <input
          type="text"
          value={name}
          onChange={this.onValueChange} />
      </li>
    );
  }
}

// Exports
export default Person;
