import React, { PureComponent } from 'react';
import { justDraw, getNextRectangles } from './moveSnake';
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

    const figure1 = [
      {
        fill: 'rgb(39,159,39)',
        x: position.x,
        y: position.y,
        width: length,
        height: thickness,
      },
      {
        fill: 'rgb(200, 0, 0)',
        x: 150 + 60,
        y: 120,
        width: thickness,
        height: thickness,
      }
    ];

    justDraw(ctx, figure1);

    // Up
    const figure2 = getNextRectangles(figure1, 'ArrowUp', 10);
    justDraw(ctx, figure2);

    // Right
     const figure3444 = [
      {
        fill: 'rgb(39,159,39)',
        x: position.x + thickness + thickness,
        y: position.y + 61,
        width: length - thickness,
        height: thickness,
      },
      {
        fill: 'rgb(39,159,39)',
        x: 150 + 60,
        y: 120 + 61 - thickness,
        width: thickness,
        height: thickness,
      },
      {
        fill: 'rgb(200, 0, 0)',
        x: 150 + 60 + thickness,
        y: 120 + 61 - thickness,
        width: thickness,
        height: thickness,
      }
    ];

    const figure3 = getNextRectangles(figure1, 'ArrowRight', 10);
    justDraw(ctx, figure3);

    // Down
    const figure4 = [
      {
        fill: 'rgb(39,159,39)',
        x: position.x + thickness + thickness + thickness,
        y: position.y + 91,
        width: length - thickness - thickness,
        height: thickness,
      },
      {
        fill: 'rgb(39,159,39)',
        x: 150 + 60,
        y: 120 + 91 - thickness,
        width: thickness,
        height: thickness,
      },
      {
        fill: 'rgb(39,159,39)',
        x: 150 + 60 + thickness,
        y: 120 + 91 - thickness,
        width: thickness,
        height: thickness,
      },
      {
        fill: 'rgb(200, 0, 0)',
        x: 150 + 60 + thickness,
        y: 120 + 91 - thickness + thickness,
        width: thickness,
        height: thickness,
      }
    ];

    justDraw(ctx, figure4);


    // window.requestAnimationFrame(this.draw);
  }

  componentDidMount() {
    // window.requestAnimationFrame(this.draw);
    this.draw();
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
