const isPalindrome = require('./index.js');

test('string is palindrome', () => {
    const str = 'amma';
    expect(isPalindrome(str)).toEqual(true);
});

test('case insensitive string in palindrome', () => {
    const str = "Madam I'm Adam";
    expect(isPalindrome(str)).toEqual(true);
});

test('string is not a palindrome', () => {
    const str = 'test';
    expect(isPalindrome(str)).toEqual(false);
});