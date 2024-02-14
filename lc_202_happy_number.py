def isHappy(n):
    slow, fast = n, sumSquareDigits(n)
    
    while slow != fast:
        fast = sumSquareDigits(fast)
        fast = sumSquareDigits(fast)
        slow = sumSquareDigits(slow)
    
    return True if fast == 1 else False
    
def sumSquareDigits(n):
    output = 0
        
    while n:
            ##modulo grabs last digit, then square it and add to output counter
        output += (n % 10) ** 2
            ##decrement n by dividing it by 10 to remove first digit and round down with double //
        n = n // 10
    return output