const fizzBuzz = require('./index');

test('fizzBuzz prints correct values', () => {
    fizzBuzz(15);
    expect(console.log.mock.calls[0][0]).toEqual(1);
});

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

