def diameterOfBinaryTree(root):
    res = 0
    
    def dfs(root):
        #this allows us to mutate the outer level var instead of making a new one
        nonlocal res
        if not root:
            return 0
    
    return res