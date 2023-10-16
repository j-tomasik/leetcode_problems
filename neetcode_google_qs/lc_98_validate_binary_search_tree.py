##DFS approach, every value right must be smaller than parents
##every child left must be greater than parent and it's parents
##use two values to create a range for where a node must be between to be valid
#O2(n) time complexity
##use helper func that is recursive


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        
        def valid(node, left, right):
            if not node:
                return True
            if not (node.val < right and node.val > left):
                return False
            
            return valid(node.left, left, node.val) and valid(node.right, node.val, right)
        
        
        return valid(root, float('-inf'), float('inf')) 