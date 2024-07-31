import React, { PureComponent } from 'react';

import { getNextRectangles, justDraw } from './moveSnake.js';
import './Snake.css';

const getTurnByKey = (key) => {
  switch (key) {
    case 'ArrowUp':
      return 'north';
    case 'ArrowRight':
      return 'east';
    case 'ArrowDown':
      return 'south';
    case 'ArrowLeft':
      return 'west';
    default:
      console.log('Unexpecyed key!');
  }
};

class Snake extends PureComponent {
  constructor(props) {
    super(props);
    this.snake = [];
    this.canvas = React.createRef();
    // this.ctx = this.canvas.current.getContext('2d');
  }

  draw = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    const { position, length, thickness } = this.props.snake;
    const { size } = this.props;

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, size, size); // clear canvas

    ctx.save();

    function calcInitialSnake(position, length, thickness) {
      const snake = [];
      const arrLength = length / thickness;
      for (let i = 0; i < arrLength; i++) {
        const z = {
          fill: 'rgb(39,159,39)',
          x: position.x + i * thickness,
          y: position.y,
          width: thickness,
          height: thickness,
        };
        snake.push(z);
      }
      snake[snake.length - 1].fill = 'rgb(200, 0, 0)';
      return snake;
    }

    this.snake = calcInitialSnake(position, length, thickness);
    justDraw(ctx, this.snake);

    // window.requestAnimationFrame(this.draw);
  };

  componentDidMount() {
    // window.requestAnimationFrame(this.draw);
    this.draw();
    this.width = window.innerWidth;
    this.canvas.current.focus();
  }

  handleKeyDown = (key, currentSnake) => {
    console.log(key);
    const ctx = this.canvas.current.getContext('2d');
    this.snake = getNextRectangles(currentSnake, getTurnByKey(key), 10);
    const last = currentSnake[0];
    const first = currentSnake[currentSnake.length - 1];
    ctx.clearRect(last.x, last.y, last.width, last.height); // clear last element
    ctx.clearRect(first.x, first.y, first.width, first.height); // clear head
    justDraw(ctx, this.snake);
  };

  render() {
    // const { size } = this.props;
    return (
      <div
        className="noOutline"
        onKeyDown={(event) => this.handleKeyDown(event.key, this.snake)}
        tabIndex="0"
      >
        <canvas
          tabIndex="0"
          ref={this.canvas}
          width={window.innerWidth}
          height={window.innerHeight - 80}
          className="FieldContainer"
        ></canvas>
      </div>
    );
  }
}

export default Snake;
