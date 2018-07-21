import React, { Component } from 'react';
import Row from '../Row/Row';
import './Snake.css';

function calcHead(headCoords, turn) {
  console.log(headCoords);
  const newHeadCoords = Object.assign(headCoords);
  switch (turn) {
    case 'ArrowUp':
      newHeadCoords.y -= 1;
      break;
    case 'ArrowRight':
      newHeadCoords.x += 1;
      break;
    case 'ArrowDown':
      newHeadCoords.y += 1;
      break;
    case 'ArrowLeft':
      newHeadCoords.x -= 1;
      break;
    default:
      console.log('Impossible turn!');
  }
  console.log(headCoords);
  return newHeadCoords;
}

function moveSnake(snake, turn) {
  const newSnake = snake.slice();
  const newHead = calcHead(newSnake[newSnake.length - 1], turn);
  newSnake.push(newHead);
  return newSnake;
}

class Snake extends Component {
  constructor(props) {
    super(props);
    const { size, snake } = this.props;
    this.snake = snake.slice();
    this.state = {
      snake: this.snake,
    }
    this.arr = Array(size).fill({});
  }

  handleKeyDown = (event) => {
    const snake = moveSnake(this.snake, event.key);
    this.setState({
      snake,
    })
  }
  
  render() {
    this.field = this.arr.map((piece, index) => {
      const snakeInRow = this.snake.filter(item => item.y === index);
      return <Row key={index} size={this.props.size} snake={snakeInRow}/>;
    });
    return (
      <div
        className='noOutline'
        onKeyDown={this.handleKeyDown}
        tabIndex='0'
      >
        <section className='FieldContainer'>
          { this.field }
        </section>
      </div>
    );
  }
}

export default Snake;
