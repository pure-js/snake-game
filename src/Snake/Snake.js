import React, { Component } from 'react';
import moveSnake from './moveSnake';
import './Snake.css';

class Snake extends Component {
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
    ctx.translate(10, 0);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(
      position.x,
      position.y,
      length,
      thickness,
    );
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
