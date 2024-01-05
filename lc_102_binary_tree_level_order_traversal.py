from collections import deque
def treeLevels(root):
    res = []
    q = deque([root] if root else [])
    while q:
        curr = q.popleft()
        res.append(curr.val)
        if curr.left:
            q.append(curr.left)
        if curr.right:
            q.append(curr.right)
    
    return res