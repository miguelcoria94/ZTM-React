import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [
        {
          name: 'Frank'
        },
        {
          name: "Mike"
        },
        {
          name: "Freddy"
        },
      ]
    };
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, i) => <h1 key={monster[i]}> {monster.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
