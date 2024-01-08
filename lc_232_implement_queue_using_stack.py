


##If you can use collections and deque, this works

from collections import deque
class MyQueue:

    def __init__(self):
        self.queue = deque()
        

    def push(self, x: int) -> None:
        self.queue.append(x)

    def pop(self) -> int:
        first = self.queue[0]
        self.queue.popleft()
        return first


    def peek(self) -> int:
        return self.queue[0]
        

    def empty(self) -> bool:
        if len(self.queue) == 0:
            return True
        else:
            return False
        
        