class Solution:
    def isBalanced(self, root):
        return (self.Height(root) >= 0)
    
    def Height(self, root):
        if root is None return 0
        
        leftHeight