from collections import deque
def treeLevels(root):
    res = []
    q = deque([root] if root else [])
    while q:
        qLen = len(q)
        level = []
        for i in range(qLen):
            curr = q.popleft()
            if curr:
                level.append(curr.val)
            if curr.left:
                q.append(curr.left)
            if curr.right:
                q.append(curr.right)
        if level:
            res.append(level)
            
    return res