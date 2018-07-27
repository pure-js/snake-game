import moveSnake, { calcHead } from './moveSnake';

test('calc head position', () => {
  expect(calcHead({x: 11, y: 12}, 'ArrowUp')).toEqual({x: 11, y: 11});
  expect(calcHead({x: 11, y: 12}, 'ArrowRight')).toEqual({x: 12, y: 12});
  expect(calcHead({x: 11, y: 12}, 'ArrowDown')).toEqual({x: 11, y: 13});
  expect(calcHead({x: 11, y: 12}, 'ArrowLeft')).toEqual({x: 10, y: 12});
});

test('correct snake after turn', () => {
  const snake = [
    {x: 11, y: 12},
    {x: 12, y: 12},
    {x: 13, y: 12},
  ];

  const movedSnake = [
    {x: 12, y: 12},
    {x: 13, y: 12},
    {x: 14, y: 12},
  ];

  expect(moveSnake(snake, 'ArrowRight')).toEqual(movedSnake);
});
