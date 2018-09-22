import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  // Constructor
  constructor() {
      super();

      this.state = {
        // people: [
        //   { name: "jim", alive: true },
        //   { name: "bob", alive: false },
        //   { name: "tim", alive: false }
        // ],
        // hidden: false
        people: [
         { name: "Sally W.", age: 23 },
         { name: "Rick S.", age: 30 },
         { name: "Samantha T.", age: 52 }
        ]
      };
    }

  // Render
  render() {
    const { people } = this.state;
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <h1 className="App-title">Welcome to React</h1>
    // </header>
    // <p className="App-intro">
    //   To get started, edit <code>src/App.js</code> and save to reload.
    // </p>

    // <button onClick={this.toggleHidden}> Toggle </button>
    // { this.state.hidden === false && (
    //   <ul>
    //     { this.state.people.map( person => (
    //       <li> {person.name} </li>
    //     ))}
    //   </ul>
    // )}
    return (
      <div className="App">

        <h1> People - Names </h1>
        <ul className="people">
          { people.map(person => (
            <li className="person">
              <input type="text" value={person.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
