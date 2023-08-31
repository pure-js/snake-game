function getNextHeadPos({ x, y }, direction, dimenision = 1) {
  switch (direction) {
    case 'north':
      y -= dimenision;
      break;
    case 'east':
      x += dimenision;
      break;
    case 'south':
      y += dimenision;
      break;
    case 'west':
      x -= dimenision;
      break;
    default:
      console.error('Impossible turn!');
  }

  return {
    x,
    y,
    // width: dimenision,
    // height: dimenision,
  };
}

function getNextSnakePos(snakePos, direction) {
  const newSnake = snakePos.slice();
  const snakeHead = newSnake[newSnake.length - 1];
  const newHead = getNextHeadPos(snakeHead, direction);
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
  nextRectangles.push(getNextHeadPos(x, y, turn, thickness));
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
  getNextHeadPos,
  getNextRectangles,
  justDraw,
  getNextSnakePos,
  getNextSnakePos as default,
};
