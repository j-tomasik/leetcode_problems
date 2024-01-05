from collections import deque
def treeLevels(root):
    res = []
    q = deque([root] if root else [])
    while q:
        curr = q.popleft()
        
    