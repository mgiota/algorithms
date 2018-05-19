const ransomeNote = require('./index.js');

describe('ransomeNote forms a note from magazine', () => {
    test('no trailing slashes', () => {
        const note = 'This is a random note';
        const magazine = 'Can you form something from This? is it true that random things are random? this is a note';
        expect(ransomeNote(note, magazine)).toEqual(true);
    });

    test('trailing slashe at the end', () => {
        const note = 'This is a random note ';
        const magazine = 'Can you form something from This? is it true that random things are random? this is a note';
        expect(ransomeNote(note, magazine)).toEqual(true);
    });
});

describe('ransomeNote does not form a note from magazine', ()=> {
    test('not all words from note are present in magazine', () => {
        const note = 'This is a random note note lala';
        const magazine = 'Can you form something from This? is it true that random things are random? this is a note';

        expect(ransomeNote(note, magazine)).toEqual(false);
    });

    test('a word appears more times in note than in magazine', () => {
        const note = 'This is a random note note';
        const magazine = 'Can you form something from This? is it true that random things are random? this is a note';
        expect(ransomeNote(note, magazine)).toEqual(false);
    });
});


beforeEach(()=> {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});