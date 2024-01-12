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
        
        if l > q[0]:
            q.popleft()
            
        if (r + 1) >= k:
            output.append(nums[q[0]])
            l += 1
        r += 1
        
    
    return output
    