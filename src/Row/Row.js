import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css';

function Row(props) {
  const arr = Array(props.size).fill({});
  const field = arr.map((piece, index) => {
    const snakeInCell = props.snake.filter((item) =>
      item.x === index
    );
    let snake = false;
    if (snakeInCell.length > 0) {
      snake = true;
    }
    return <Cell key={index} snake={snake}/>;
  });
  return (
    <React.Fragment>
      <div className='row'>
        { field }
      </div>
    </React.Fragment>
  );
}

export default Row;
