class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0
    
        def dfs(root):
            nonlocal res
            
            if not root:
                return 0
            left = dfs(root.left)
            right = dfs(root.right)
        