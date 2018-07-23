function calcHead(headCoords, turn) {
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
  return newHeadCoords;
}

function moveSnake(snake, turn) {
  const newSnake = snake.slice();
  const snakeHead = newSnake[newSnake.length - 1];
  const newHead = calcHead(snakeHead, turn);
  console.log('1', newSnake);
  newSnake.push(newHead);
  console.log('2', newSnake);
  return newSnake;
}

export default moveSnake;
