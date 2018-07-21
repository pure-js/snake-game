import React, { Component } from 'react';
import Snake from './Snake/Snake';
import './App.css';

class App extends Component {
  render() {
    const snake = [
      {x: 1, y: 1},
      {x: 2, y: 1},
    ]
    return (
      <React.Fragment>
        <h1 className='heading'>Snake game</h1>
        <section className='FieldContainer'>
          <Snake size={100} snake={snake} target=''/>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
