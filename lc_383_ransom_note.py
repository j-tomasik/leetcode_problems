from collections import Counter

def canConstruct(ransomNote, magazine):
    count = Counter()
    
    for char in ransomNote:
        count[char] += 1
        
    