
##if you cant use a deque, use two lists
#one is input one is output, append in to input list

#when you need to pop or peek and whats in the front of the queue, shift items 
#using a while loop, removing fron the end of input to put in the bottom/front of output
#this will leave the last item in output as the first from input for popping or [-1] idxing
#"its like pouring sand from an hour glass to the other side"


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
        
        