def LongestWord(sen):
    longest = ''
    longestCount = 0
    words = sen.split(' ')
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    for word in words:
        i = 0
        currCount = 0
        while i < len(word):
            if word[i].lower() in alpha:
                currCount += 1
                i += 1
    
    return str(longest)