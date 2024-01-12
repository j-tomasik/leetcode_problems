from collections import deque

def maxSlidingWindow(nums, k):
    output = []
    q = deque()
    l = r = 0
    
    while r < len(nums):
        #pop smaller values from q
        while q and nums[q[-1]] < nums[r]:
            q.pop()
        q.append(r)
        
    
    return output
    