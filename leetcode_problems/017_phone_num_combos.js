var letterCombinations = function(digits) {
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let results = [];
    function findCombinations(size, index, result) {
        if (size === digits.length) {
            if (result) {
                results.push(result);    
            }
            return
        }
        let currentDigit = digits[index];
        let currentLetters = map[currentDigit];
        for (let i = 0; i < currentLetters.length; i++) {
            let currentLetter = currentLetters[i];
            findCombinations(size + 1, index + 1, result + currentLetter);        
        }
    }
    findCombinations(0, 0, '');
    return results;
};