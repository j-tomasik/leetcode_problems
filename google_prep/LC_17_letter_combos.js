var letterCombinations = function(digits) {
    // let digitToLetter = {[‘1’]:‘’, [‘2’]:‘abc’,[‘3’]:‘def’,
    //                     [‘4’]:‘ghi’,[‘5’]:‘jkl’,[‘6’]:‘mno’,
    //                     [‘7’]:‘pqrs’,[‘8’]:‘tuv’,[‘9’]:‘wxyz’}
    let combinations = [];
    for(digit of digits) {
        let letters = digitToLetter[digit];
        let newCombos = []
        for(letter of letters){
            let subCombos = [];
            if(!combinations.length){combinations = [“”]}
            for(combo of combinations){
                subCombos.push(combo + letter);
            }
            newCombos.push(...subCombos)
        }
        combinations = newCombos
    }
    return combinations
};