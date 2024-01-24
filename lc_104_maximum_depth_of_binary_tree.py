def maxDepth(root):
    
    def dfs(root):
        if not root:
            return 0