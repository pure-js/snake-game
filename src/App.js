import React, { Component } from 'react';
import Snake from './Snake/Snake';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className='FieldContainer'>
        <Snake size='9' snake='' target=''/>
      </section>
    );
  }
}

export default App;
