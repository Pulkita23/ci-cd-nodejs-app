const sayHello = require('../app');

test('sayHello returns Hello, CI/CD!', () => {
  expect(sayHello()).toBe("Hello, CI/CD!");
});
