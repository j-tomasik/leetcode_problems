def inorderTraversal(root):
    res = []
    def inorder(node):
        #base case, return nothing
        if not node:
            return

        inorder(node.left)
        #will hit base case if null, else will add to same res list in memory
        res.append(node.val)
        inorder(node.right)
        
    
    
    return res