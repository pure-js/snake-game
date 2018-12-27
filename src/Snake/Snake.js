import React, { PureComponent } from 'react';
import moveSnake from './moveSnake';
import './Snake.css';

class Snake extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  draw = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    const { position, length, thickness } = this.props.snake;
    const { size } = this.props;

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, size, size); // clear canvas

    ctx.save();
    // Move snake
    // ctx.translate(0.01, 0);

    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(
      // The x-axis coordinate of the rectangle's starting point.
      position.x,
      // The y-axis coordinate of the rectangle's starting point.
      position.y,
      // The rectangle's width. Positive values are to the right, and negative to the left.
      length,
      // The rectangle's height. Positive values are down, and negative are up.
      thickness,
    );

    // Draw head
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(150 + 60, 120, 10, 10);

    // Up
    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(
      // The x-axis coordinate of the rectangle's starting point.
      position.x + 10,
      // The y-axis coordinate of the rectangle's starting point.
      position.y + 31,
      // The rectangle's width. Positive values are to the right, and negative to the left.
      length,
      // The rectangle's height. Positive values are down, and negative are up.
      thickness,
    );

    // Draw head
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(150 + 60, 120 + 31 - 10, 10, 10);


    // Right
    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(
      // The x-axis coordinate of the rectangle's starting point.
      position.x + 10 + 10,
      // The y-axis coordinate of the rectangle's starting point.
      position.y + 61,
      // The rectangle's width. Positive values are to the right, and negative to the left.
      length - 10,
      // The rectangle's height. Positive values are down, and negative are up.
      thickness,
    );

    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(150 + 60, 120 + 61 - 10, 10, 10);

    // Draw head
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(150 + 60 + 10, 120 + 61 - 10, 10, 10);


    // Down
    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(
      // The x-axis coordinate of the rectangle's starting point.
      position.x + 10 + 10 + 10,
      // The y-axis coordinate of the rectangle's starting point.
      position.y + 91,
      // The rectangle's width. Positive values are to the right, and negative to the left.
      length - 10 - 10,
      // The rectangle's height. Positive values are down, and negative are up.
      thickness,
    );

    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(150 + 60, 120 + 91 - 10, 10, 10);

    // Draw body
    ctx.fillStyle = 'rgb(39,159,39)';
    ctx.fillRect(150 + 60 + 10, 120 + 91 - 10, 10, 10);

    // Draw head
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(150 + 60 + 10, 120 + 91 - 10 + 10, 10, 10);


    window.requestAnimationFrame(this.draw);
  }

  componentDidMount() {
    window.requestAnimationFrame(this.draw);
  }

  handleKeyDown = (key, currentSnake) => {
    // const newSnake = moveSnake(currentSnake, key);
  }
  
  render() {
    const { size } = this.props;
    return (
      <div
        className='noOutline'
        onKeyDown={(event) => this.handleKeyDown(event.key, this.snake)}
        tabIndex='0'
      >
        <canvas ref={this.canvas} width={size} height={size} className='FieldContainer'></canvas>
      </div>
    );  
  }
}

export default Snake;
