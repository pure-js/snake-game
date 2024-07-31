import React, { Component } from 'react';

import './App.css';
import Snake from './Snake/Snake.jsx';

class App extends Component {
  render() {
    const snake = {
      position: {
        x: 150,
        y: 120,
      },
      thickness: 10,
      length: 60,
    };
    return (
      <React.Fragment>
        <h1 className="heading">Snake game</h1>
        <Snake size={500} snake={snake} target="" />
      </React.Fragment>
    );
  }
}

export default App;
