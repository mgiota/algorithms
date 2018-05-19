function _buildMap(words) {
    words = words.replace(/[^\w\s]/g, '').trim().split(' ');
    const counts = {};
    words.forEach(word => {
        counts[word] = counts[word] + 1 || 1;
    });
    return counts;
}

function ransomeNote(note, magazine) {
    const noteMap = _buildMap(note);
    const magazineMap = _buildMap(magazine);

    let canFormNote = true;

    for(let ch in noteMap) {
        if (!(ch in magazineMap) || noteMap[ch] > magazineMap[ch]) {
            canFormNote = false;
        }
    }

    return canFormNote;
}

module.exports = ransomeNote;