def lowestCommonAncestor(root, p, q):
    temp = root
    
    while temp:
        if p.val < temp.val and q.val < temp.val:
            temp = temp.left
        elif p.val > temp.val and q.val > temp.val:
            temp = temp.right
        else:
            return temp