def isValidBST(root):
    #CURR/MIDDLE VAL, smaller edge, larger edge
    def valid(node, left, right):
        #base case, empty node is valid
        if not node:
            return True
        #if not in right order, tree is invalid
        if not (left < node.val < right):
            return False
        #LEFT CALL: curr is now left child of root, left edge is -infinity and largest is root 
        #Right Call: curr is now right child of root, left is root, right is infinity 
        
        return valid(node.left, left, node.val) and valid(node.right, node.val, right)
    
    return valid(root, float('-inf'), float('inf'))