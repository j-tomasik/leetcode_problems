def letterCombinations(digits):
    res = []
    digits = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7'  : 'qprs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    def backtrack(i, curStr):
        if len(curStr) == len(digits):
            res.append(curStr)
            return
        
        
    
    return res