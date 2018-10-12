// Imports
import React, { Component } from 'react';
// import poke from "./poke";

// Entry Point
class App extends Component {
  // Constructor
  constructor() {
    super();
    this.state= {
      pokemon: [],
      search: "",
      selectedPokemon: null
    }
  }

  // After component mounts, before it renders: great place to fetch data
  async componentDidMount() {
    const res  = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const json = await res.json();
    this.setState({ pokemon: json.results });
  }

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  }

  generateSearchResults = search => {
    // You need return in front of the whole expression, since you are evaluating the expression.
    return search === ""
      ? []
      :  this.state.pokemon
                .filter(poke => poke.name.includes(search))
                .slice(0, 10);

    // if ( search === "" ) {
    //   return[];
    // } else {
    //   return this.state.pokemon
    //           .filter(p => p.name.includes(search))
    //           .slice(0, 10);
    // }
  }

  selectPokemon = async name => {
    const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`,
                              { cache: "force-cache"});
    const json = await res.json();
    this.setState({ selectedPokemon: json, search: name });
  }

  // Render
  render() {
    const results = this.generateSearchResults(this.state.search);

    return (
        <div className="App">
          <div className="search">
            <input
              onChange={ this.onSearchChange }
              type="text"
              value={ this.state.search } />
            <ul>
              { results.map(result =>
                // <li onClick={ this.selectPokemon.bind(this, result.name) }>{ result.name }</li>)
                <li onClick={ () => this.selectPokemon(result.name) }>
                  { result.name }
                </li>)
              }
            </ul>
          </div>

        { this.state.selectedPokemon  &&
          <div className="result">
            <img src={ this.state.selectedPokemon.sprites.back_default } />
          </div>
        }

      </div>
    );
  }
}

// Exports
export default App;
