import { User } from './model.interface';

test('test user model', () => {
  const userJson = { uid: '1', email: 'test7@gmail.com', score: 35 };
  const user: User = userJson;
  expect(user.uid).toBe('1');
  expect(user.email).toBe('test7@gmail.com');
});
