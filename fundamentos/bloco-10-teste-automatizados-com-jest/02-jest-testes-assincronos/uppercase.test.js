const uppercase = require("./uppercase")

test('testa se o callback passa pra uppercase', (done) => {
  uppercase('aba', (result) => {
    expect.assertions(1);
    try {
      expect(result).toBe('ABA');
      done();
    } catch ( error ) {
      done(error);
    }
  })
})