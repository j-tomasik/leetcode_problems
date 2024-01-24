def diameterOfBinaryTree(root):
    res = 0
    
    def dfs(root):
        #this allows us to mutate the outer level var instead of making a new one
        nonlocal res
        if not root:
            return 0
        
        left = dfs(root.left)
        right = dfs(root.right)
        #reasigns to max total distance found of any two nodes down either child
        res = max(res, left + right)
        #bubbles up one for each level down plus the max length going down
        return 1 + max(left, right)
    
    dfs(root)
    return res