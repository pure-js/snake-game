import { describe, expect, test } from 'vitest';

import {
  snakeHandling,
  getNextHeadPos,
  isItPossibleToMove,
} from './moveSnake.js';

test('Calculate Sneak head position', () => {
  expect(getNextHeadPos({ x: 11, y: 12 }, 'north')).toStrictEqual({
    x: 11,
    y: 11,
  });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'east')).toStrictEqual({
    x: 12,
    y: 12,
  });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'south')).toStrictEqual({
    x: 11,
    y: 13,
  });
  expect(getNextHeadPos({ x: 11, y: 12 }, 'west')).toStrictEqual({
    x: 10,
    y: 12,
  });
});

describe('the correct position of the snake after pressing the right arrow - East direction', () => {
  const snakePos = [
    { x: 11, y: 12 },
    { x: 12, y: 12 },
    { x: 13, y: 12 },
  ];

  test('Possibility to move', () => {
    expect(isItPossibleToMove(snakePos, 'east')).toBeTruthy();
  });

  test('Snake position', () => {
    const nextSnakePos = [
      { x: 12, y: 12 },
      { x: 13, y: 12 },
      { x: 14, y: 12 },
    ];

    expect(snakeHandling(snakePos, 'east')).toStrictEqual(nextSnakePos);
  });
});

describe('the correct position of the snake after pressing the left arrow - West direction - opposite direction', () => {
  const snakePos = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
  ];

  test('Possibility to move', () => {
    expect(isItPossibleToMove(snakePos, 'west')).toBeFalsy();
  });

  test('Snake position', () => {
    const nextSnakePos = [
      { x: 10, y: 11 },
      { x: 11, y: 11 },
      { x: 12, y: 11 },
    ];

    expect(snakeHandling(snakePos, 'west')).toStrictEqual(nextSnakePos);
  });
});

describe('the correct position of the snake after pressing the up arrow - North direction', () => {
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

  test('Possibility to move', () => {
    expect(isItPossibleToMove(snakePos, 'north')).toBeTruthy();
  });

  test('Snake position', () => {
    expect(snakeHandling(snakePos, 'north')).toStrictEqual(nextSnakePos);
  });
});

describe('the correct position of the snake after pressing the down arrow - South direction', () => {
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

  test('Possibility to move', () => {
    expect(isItPossibleToMove(snakePos, 'south')).toBeTruthy();
  });

  test('Snake position', () => {
    expect(snakeHandling(snakePos, 'south')).toStrictEqual(nextSnakePos);
  });
});
