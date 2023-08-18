def cloneGrapg(node):
    oldToNew = {}
    
    def dfs(node):
        if node in oldToNew:
            return oldToNew[node]
        
        copy = Node(node.val)
        oldToNew[node] = copy