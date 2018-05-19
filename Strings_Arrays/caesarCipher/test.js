const caesarCipher = require('./index');

test('shift lowercase characters by positive number ', () => {
    const str = 'giota';
    expect(caesarCipher(str, 2)).toEqual('ikqvc');
});

test('shift lowercase characters by negative number ', () => {
    const str = 'zorzet';
    expect(caesarCipher(str, -2)).toEqual('xmpxcr');
});

test('shift lowercase characters by a big positive number', () => {
    const str = 'giota';
    expect(caesarCipher(str, 27)).toEqual('hjpub');
});

test('loop letters to the beginning of the alphabet positive number', () => {
    const str = 'zorzet';
    expect(caesarCipher(str, 2)).toEqual('bqtbgv');
});

test('loop letters to the end of the alphabet negative number', () => {
    const str = 'giota';
    expect(caesarCipher(str, -2)).toEqual('egmry');
});


test('shift uppercase characters by positive number ', () => {
    const str = 'GIOTA';
    expect(caesarCipher(str, 2)).toEqual('IKQVC');
});

test('shift uppercase characters by negative number ', () => {
    const str = 'ZORZET';
    expect(caesarCipher(str, -2)).toEqual('XMPXCR');
});

