const { findUserById, getUserName} = require('./finduser');

test('caso de sucesso', (done) => {
  getUserName(1).then((result) => expect(result).toBe('Mark'));
  done();
})

test('caso de falha', () => {
  return expect(getUserName(10))
  .rejects.toEqual(new Error('User with 10 not found.'))
})

test('caso de falha', () => {
  return getUserName(10).catch((error) => 
    expect(error.message)
    .toMatch('User with 10 not found.')
  )
})
