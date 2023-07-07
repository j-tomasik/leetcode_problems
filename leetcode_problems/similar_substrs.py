def compare_strs(matrix):
    count = 0
    
    for sub in matrix:
        word1, word2 = sub
        if(similar(word1, word2)):
            count += 1
            
    
    return count




def similar(str1, str2):
    if len(str1) != len(str2):
        return False
    hash = {}
    
    for char in str1:
        if char not in hash:
            hash[char] = 1
        else:
            hash[char] += 1
    
    for char in str2:
        if char in hash:
            hash[char] -= 1
        else:
            hash[char] = -1
    values = hash.values()
    maximum = max(abs(num) for num in values)
    if maximum <= 3:
        return True
    else:
        return False
    
matrix = [ ['cat', 'mat'], ['walrus', 'bicycle'], ['eeet'  ,'taaa']  ]

print(compare_strs(matrix))