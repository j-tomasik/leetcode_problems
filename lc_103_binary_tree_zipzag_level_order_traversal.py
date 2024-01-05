##bfs, use a queue
##every odd level needs to be reversed
##grab each row as a sub array then at the end iterate through sub arrays to reverse
from collections import deque


def zigzagLevelOrder(root):
    res = []
    q = deque([root] if root else [])
    
    while q:
        level = []
        for i in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        level = reversed(level) if len(res) % 2 else level
        res.append(level)