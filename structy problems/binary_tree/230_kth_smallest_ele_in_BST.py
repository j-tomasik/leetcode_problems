# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root, k):
        def find_smallest(node, current):
            if node.left:
                curr_node, current = find_smallest(node.left, current)

                if current == k:
                    return curr_node, current
            if current + 1 == k:
                return node, current + 1
            if node.right:
                return find_smallest(node.right, current + 1)

            return node, current + 1

        return find_smallest(root, 0)[0].val
