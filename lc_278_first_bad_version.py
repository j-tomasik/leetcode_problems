import math

def isBadVersion(n):
    return math.random()

def firstBadVersion(n):
    if n == 1:
        return n
    
    lower = 1
    upper = n
    mid = math.ceil(n / 2)
    
    while lower < upper:
        isBad = isBadVersion(mid)
        if isBad:
            if not isBadVersion(mid - 1):
                return mid
            else:
                upper = mid
                mid = math.ceil(upper / 2)
        else:
            lower = mid
            mid = math.ceil((upper - mid) / 2) + mid