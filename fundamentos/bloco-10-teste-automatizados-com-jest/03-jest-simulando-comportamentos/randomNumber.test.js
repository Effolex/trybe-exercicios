let random = require('./randomNumber');
jest.mock('./randomNumber');

test('testa random', () => {
  random = jest.fn().mockReturnValue(10);

  random();
  expect(random).toHaveBeenCalled();
  expect(random()).toBe(10);
  expect(random).toHaveBeenCalledTimes(2);
});

test('should ', () => {
  random.mockImplementation((a, b) => a / b);
  random(10,5);

  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(3);
  expect(random(10, 5)).toBe(2);
});