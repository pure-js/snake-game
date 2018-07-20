import React from 'react';
import Row from '../Row/Row';
import './Snake.css';

function Snake(props) {
  const arr = Array(Number(props.size)).fill({});
  const field = arr.map((piece, index) => 
    <Row key={index} size={props.size}/>
  )
  return (
    <React.Fragment>
      { field }
    </React.Fragment>
  );
}

export default Snake;
