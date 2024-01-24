def kthSmallest(root, k):
    vals = []
    
    def dst(root):
        if not root:
            return
        vals.append(root.val)
        dst(root.left)
        dst(root.right)
    dst(root)
    vals.sort()
    return vals[k-1]