from collections import Counter

def canConstruct(ransomNote, magazine):
    count = Counter()
    
    for char in ransomNote:
        count[char] += 1
        
    for char in magazine:
        if count[char]:
            count[char] -= 1
    
    return all(val == 0 for val in count.values())