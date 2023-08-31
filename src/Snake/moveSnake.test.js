import { expect, test } from 'vitest'

import { getNextSnakePos, getNextHeadPos } from './moveSnake';

test('calc head position', () => {
  expect(getNextHeadPos({ x: 11, y: 12 }, 'north')).toEqual({ x: 11, y: 11 });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'east')).toEqual({ x: 12, y: 12 });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'south')).toEqual({ x: 11, y: 13 });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'west')).toEqual({ x: 10, y: 12 });
});

test('the correct position of the snake after pressing the right arrow', () => {
  const snakePos = [
    { x: 11, y: 12 },
    { x: 12, y: 12 },
    { x: 13, y: 12 },
  ];

  const nextSnakePos = [
    { x: 12, y: 12 },
    { x: 13, y: 12 },
    { x: 14, y: 12 },
  ];

  expect(getNextSnakePos(snakePos, 'east')).toEqual(nextSnakePos);
});

test('the correct position of the snake after pressing the left arrow', () => {
  const snakePos = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
  ];

  const nextSnakePos = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
  ];

  expect(getNextSnakePos(snakePos, 'west')).toEqual(nextSnakePos);
});


test('the correct position of the snake after pressing the up arrow', () => {
  const snakePos = [
    { x: 21, y: 12 },
    { x: 22, y: 12 },
    { x: 23, y: 12 },
  ];

  const nextSnakePos = [
    { x: 22, y: 12 },
    { x: 23, y: 12 },
    { x: 23, y: 11 },
  ];

  expect(getNextSnakePos(snakePos, 'north')).toEqual(nextSnakePos);
});

test('the correct position of the snake after pressing the down arrow', () => {
  const snakePos = [
    { x: 11, y: 12 },
    { x: 12, y: 12 },
    { x: 13, y: 12 },
  ];

  const nextSnakePos = [
    { x: 12, y: 12 },
    { x: 13, y: 12 },
    { x: 13, y: 13 },
  ];

  expect(getNextSnakePos(snakePos, 'south')).toEqual(nextSnakePos);
});
