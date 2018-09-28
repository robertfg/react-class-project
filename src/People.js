// Imports
import React, { Component } from 'react';
import Person from "./Person";

// Extend the Component class
class People extends Component {

  // Methods
  constructor() {
    super();

    this.state = {
      people: [
       { id: 1, name: "Sally W.",    age: 23 },
       { id: 2, name: "Rick S.",     age: 30 },
       { id: 3, name: "Samantha T.", age: 52 }
      ]
    }
  }

  // onPeopleChange = (id, value) => {
  //   this.setState(state => {
  //     const newPeople = state.people.map(person => {
  //       if ( person.id === id ) {
  //         return { ...person, name: value };
  //       } else {
  //         return person;
  //       }
  //     })
  //   })
  // }

  onPeopleChange = (id, value) => {
    this.setState(state => ({
      people: state.people.map(person =>
        person.id === id
          ? { ...person, name: value }
          : person
      )
    }))
  }

  render() {
    const { people } = this.state;

    return(
      <ul>
      { people.map(p =>
        <Person key={p.id} person={p} onChange={this.onPeopleChange} />
      )}
      </ul>
    );
  }
}

// Exports
export default People;
