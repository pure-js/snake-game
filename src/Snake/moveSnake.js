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

function justDraw(canvasContext, rectangles) {
  for (const rect of rectangles) {
    console.log(rect, rect.fill);
    canvasContext.fillStyle = rect.fill;
    canvasContext.fillRect(rect.x, rect.y, rect.width, rect.height);
  }
}

export {
  calcHead,
  justDraw,
  moveSnake as default,
};
