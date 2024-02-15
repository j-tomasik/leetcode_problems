def plusOne(digits):
    if len(digits) < 1:
        return [1]
    
    lastIdx = len(digits) - 1
    
    if digits[lastIdx] != 9:
        digits[lastIdx] += 1
        return digits 
    