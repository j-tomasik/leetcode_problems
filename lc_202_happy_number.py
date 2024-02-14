def isHappy(n):
    slow, fast = n, sumSquareDigits(n)
    
    def sumSquareDigits(n):
        output = 0
        return output