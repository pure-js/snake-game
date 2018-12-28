function calcHead(headCoords, turn) {
  const newHeadCoords = Object.assign({}, headCoords);
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
      console.error('Impossible turn!');
  }
  return newHeadCoords;
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
  if (turn === 'ArrowUp') {
    nextRectangles[0].x += thickness;
    nextRectangles[0].y += 31;
    // head
    nextRectangles[1].y += 31 - thickness;
  }

  if (turn === 'ArrowRight') {
    nextRectangles[0].x += thickness + thickness;
    nextRectangles[0].y += 61;
    nextRectangles[0].width -= thickness;

    nextRectangles[1].fill = 'rgb(39,159,39)';
    nextRectangles[1].y += 61 - thickness;

    const rect = {
      fill: 'rgb(200, 0, 0)',
      x: 150 + 60 + thickness,
      y: 120 + 61 - thickness,
      width: thickness,
      height: thickness,
    }

    nextRectangles.push(rect);
  }
  
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
