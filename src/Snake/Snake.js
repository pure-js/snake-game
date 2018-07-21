import React from 'react';
import Row from '../Row/Row';
import './Snake.css';

function Snake(props) {
  const arr = Array(props.size).fill({});
  const field = arr.map((piece, index) => {
    const snakeInRow = props.snake.filter((item) =>
      item.y === index
    );
    return <Row key={index} size={props.size} snake={snakeInRow}/>;
  });
  return field;
}

export default Snake;
