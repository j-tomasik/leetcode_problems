def goodNodes(root):
    def dfs(node, maxVal):
        if not node:
            return 0
        
        res = 1 if node.val >= maxVal else 0