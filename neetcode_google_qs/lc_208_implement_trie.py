#three functions for the class
#1-insert string 
#2-search string, returns bool
#3startsWith string, returns bool

#graph of single chars, key in to instant lookup child letter
#make sure to mark ends to confirm searched and saved word are complete

class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfWord = False
        

class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, word):
        cur = self.root
        
        for char in word:
            if char not in cur.children:
                cur.children[char] = TrieNode()
                
            cur = cur.children[char]
            
        cur.endOfWord = True
            
    def search(self, word):
        cur = self.root
        
        for char in word:
            if char not in cur.children:
                return False
            cur = cur.children[char]
            
        return cur.endOfWord
        
    def StartsWith(self, prefix):
        cur = self.root

        for char in prefix:
            if char not in cur.children:
                return False
            cur = cur.children[char]
        return True
        
