import React from 'react';
import './Cell.css';

function Cell(props) {
  let square;
  if (props.snake) {
    square = <div className="cell snake__body"></div>;
  } else {
    square = <div className="cell cell_empty"></div>;
  }
  return (
    <React.Fragment>
      { square }
    </React.Fragment>
  );
}

export default Cell;
