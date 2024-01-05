##bfs, use a queue
##every odd level needs to be reversed
##grab each row as a sub array then at the end iterate through sub arrays to reverse
from collections import deque


def zigzagLevelOrder(root):
    res = []
    q = deque([root] if root else [])