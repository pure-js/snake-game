import React from 'react';
import './Snake.css';

function Snake(props) {
  return (
    <React.Fragment>
      <div className='cell'></div>
      <h1>Hello, {props.name}</h1>
    </React.Fragment>
  );
}

export default Snake;
