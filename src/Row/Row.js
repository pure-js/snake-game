import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

function Row(props) {
  const arr = Array(Number(props.size)).fill({});
  const field = arr.map((piece, index) => 
    <Cell key={index}/>
  )
  return (
    <React.Fragment>
      { field }
    </React.Fragment>
  );
}

export default Row;
