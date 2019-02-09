function calcHead(x, y, turn, dimenision) {
  switch (turn) {
    case 'ArrowUp':
      y -= dimenision;
      break;
    case 'ArrowRight':
      x += dimenision;
      break;
    case 'ArrowDown':
      y += dimenision;
      break;
    case 'ArrowLeft':
      x -= dimenision;
      break;
    default:
      console.error('Impossible turn!');
  }

  return {
    x,
    y,
    width: dimenision,
    height: dimenision,
  };
}

function moveSnake(snake, turn) {
  const newSnake = snake.slice();
  const snakeHead = newSnake[newSnake.length - 1];
  const newHead = calcHead(snakeHead, turn);
  newSnake.push(newHead);
  newSnake.shift();
  return newSnake;
}

function getNextRectangles(prevRectangles, turn, thickness) {
  const nextRectangles = JSON.parse(JSON.stringify(prevRectangles));

  // Remove end of sanke
  nextRectangles.shift();
  const head = nextRectangles[nextRectangles.length - 1];

  function paintHead() {
    nextRectangles.forEach((square) => {
      square.fill = 'rgb(39,159,39)';
    });
    const head = nextRectangles[nextRectangles.length - 1];
    head.fill = 'rgb(200, 0, 0)';
  }

  const { x, y } = head;
  nextRectangles.push(calcHead(x, y, turn, thickness));
  paintHead();
  return nextRectangles;
}

function justDraw(canvasContext, rectangles) {
  for (const rect of rectangles) {
    canvasContext.fillStyle = rect.fill;
    canvasContext.fillRect(rect.x, rect.y, rect.width, rect.height);
  }
}

export {
  calcHead,
  getNextRectangles,
  justDraw,
  moveSnake as default,
};
