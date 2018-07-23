import React, { Component } from 'react';
import Row from '../Row/Row';
import moveSnake from './moveSnake';
import './Snake.css';

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

  handleKeyDown(key, currentSnake) {
    console.log(key, currentSnake);
    const newSnake = moveSnake(currentSnake, key);
    this.setState({
      snake: newSnake,
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
        onKeyDown={(event) => this.handleKeyDown(event.key, this.snake)}
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
