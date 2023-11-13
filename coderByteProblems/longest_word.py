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
                if currCount > longestCount:
                    longestCount = currCount
                    longest = word
            else:
                break
                
    return str(longest)