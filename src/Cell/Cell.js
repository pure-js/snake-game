import React from 'react';
import './Cell.css';

function Cell(props) {
  let square;
  // console.log(props.snake);
  if (props.snake) {
    square = <div className="snake__body"></div>;
  } else {
    square = <div className="cell"></div>;
  }
  return (
    <React.Fragment>
      { square }
    </React.Fragment>
  );
}

export default Cell;
