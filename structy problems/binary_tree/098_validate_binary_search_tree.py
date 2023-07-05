class Solution:
    def isValidBST(root):
        arr = []

        def inorder(root):
            if root is None:
                return None
            inorder(root.left)
            arr.append(root.val)
            inorder(root.right)
        inorder(root)
        return True if arr == list(sorted(set(arr))) else False
