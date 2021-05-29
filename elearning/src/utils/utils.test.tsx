import { secondsToDuration } from './utils';

test('time to duration 45s', () => {
  const time = secondsToDuration(45);
  expect(time).toBe('00:45');
});

test('time to duration 1m', () => {
  const time = secondsToDuration(60);
  expect(time).toBe('01:00');
});

test('time to duration 1m45s', () => {
  const time = secondsToDuration(105);
  expect(time).toBe('01:45');
});

test('time to duration 1h1m56s', () => {
  const time = secondsToDuration(3716);
  expect(time).toBe('01:01:56');
});
