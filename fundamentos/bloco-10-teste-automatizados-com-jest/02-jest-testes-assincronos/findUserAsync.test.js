const { findUserById, getUserName} = require('./findUserAsync');

test('caso de sucesso',async () => {
  await expect(getUserName(1)).resolves.toBe('Mark');
})

test('caso de falha',async () => {
  return expect(getUserName(10))
  .rejects.toEqual(new Error('User with 10 not found.'))
})

test('caso de falha', async () => {
  expect.assertions(1);
  try {
    await getUserName(2);
  } catch (error) {
    expect(error.message)
    .toMatch('User with 10 not found.')
  }
})