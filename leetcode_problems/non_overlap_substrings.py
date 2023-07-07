#given two strings, s and t, return the words in string s that are NOT in string t
#example s = "I like cheese"
#t = 'like' -> return ['I', 'like']

# s = 'cats hats mats'
# t = 'mats' -> return ['cats', 'hats']

#split t into list
#create a set with list of t words

#split s into list of words
#iterate through list, if set.has is false, add to return list

def substrings(s, t):
    return_list = []
    
    t_list = t.split()
    t_set = set(t_list)
    
    s_list = s.split()
    
    for word in s_list:
        if not t_set.has(word):
            return_list.append(word)
    
    return return_list


print(substrings('I like cheese', 'like'))

print(substrings('mat', 'bat fat'))

print(substrings('bear scare', 'bodega'))
