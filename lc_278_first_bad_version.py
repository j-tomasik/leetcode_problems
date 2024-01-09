import math


def firstBadVersion(n):
    if n == 1:
        return n
    
    lower = 1
    upper = n
    mid = math.ceil(n / 2)