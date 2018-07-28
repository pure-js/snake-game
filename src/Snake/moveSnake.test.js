import moveSnake, { calcHead } from './moveSnake';

test('calc head position', () => {
  expect(calcHead({x: 11, y: 12}, 'ArrowUp')).toEqual({x: 11, y: 11});
  expect(calcHead({x: 11, y: 12}, 'ArrowRight')).toEqual({x: 12, y: 12});
  expect(calcHead({x: 11, y: 12}, 'ArrowDown')).toEqual({x: 11, y: 13});
  expect(calcHead({x: 11, y: 12}, 'ArrowLeft')).toEqual({x: 10, y: 12});
});

test('correct snake after turn right', () => {
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

test('correct snake after turn left', () => {
  const snake = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11},
  ];

  const movedSnake = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11},
  ];

  expect(moveSnake(snake, 'ArrowLeft')).toEqual(movedSnake);
});


test('correct snake after turn up', () => {
  const snake = [
    {x: 21, y: 12},
    {x: 22, y: 12},
    {x: 23, y: 12},
  ];

  const movedSnake = [
    {x: 22, y: 12},
    {x: 23, y: 12},
    {x: 23, y: 13},
  ];

  expect(moveSnake(snake, 'ArrowUp')).toEqual(movedSnake);
});

test('correct snake after turn down', () => {
  const snake = [
    {x: 11, y: 12},
    {x: 12, y: 12},
    {x: 13, y: 12},
  ];

  const movedSnake = [
    {x: 12, y: 12},
    {x: 13, y: 12},
    {x: 13, y: 13},
  ];

  expect(moveSnake(snake, 'ArrowDown')).toEqual(movedSnake);
});
