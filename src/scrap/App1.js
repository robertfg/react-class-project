// Imports
import React, { Component } from 'react';
import People from "./People";

// Entry Point
class App extends Component {
  // Constructor
  constructor() {
    super();
  }

  // Render
  render() {
    return (
      <ul>
        <div className="App">
          <People />
        </div>
      </ul>
    );
  }
}

// Exports
export default App;
