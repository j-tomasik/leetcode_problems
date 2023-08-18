def cloneGrapg(node):
    oldToNew = {}
    
    def dfs(node):
        if node in oldToNew:
            return oldToNew[node]
        
        copy = Node(node.val)
        oldToNew[node] = copy
        for neigh in node.neighbors:
            copy.neighbors.append(dfs(neigh))
        return copy
    
    return dfs(node) if node else None