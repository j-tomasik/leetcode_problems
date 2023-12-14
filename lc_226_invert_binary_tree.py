def invertTree(root):
    if not root:
        return None
    
    root.left, root.right = root.right, root.left

    invertTree(root.left)
    invertTree(root.right)
        
    return root