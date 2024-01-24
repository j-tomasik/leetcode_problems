def affBinary(a, b):
    s = []
    carry = 0
    i = len(a) - 1
    j = len(b) - 1
    
    #loop backwards, will reverse at the end, allows to append to list
    while i >= 0 or j >= 0 or carry:
        if i >= 0:
            carry += int(a[i])
            i -= 1
        
        if j >= 0:
            carry += int(b[j])
            j -= 1
        
        #this carry will either have 0, 1, 2 or 3. If both the prev vals are 1 in will add 1 to next digit
        #if theres no carry it wont carry anything, if the carry is 1 then it will be 1

        s.append(str(carry % 2))
        #carry will be set to itself divided by 2, double slash rounds down to int,
        #a single / would be a float for exact division 
        carry //= 2
    
    return ''.join(reversed(s))