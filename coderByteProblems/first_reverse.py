def first_reverse(strParam):
    #unpack a string of chars into a list with splat
    charsList = [*strParam]
    #reverse works like .sort() in python, does it in place
    charsList.reverse()
    return strParam