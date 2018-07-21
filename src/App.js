import React, { Component } from 'react';
import Snake from './Snake/Snake';
import './App.css';

class App extends Component {
  render() {
    const snake = [
      {x: 11, y: 12},
      {x: 12, y: 12},
      {x: 13, y: 12},
      {x: 14, y: 12},
      {x: 15, y: 12},
      {x: 16, y: 12},
    ]
    return (
      <React.Fragment>
        <h1 className='heading'>Snake game</h1>
        <Snake size={100} snake={snake} target=''/>
      </React.Fragment>
    );
  }
}

export default App;
