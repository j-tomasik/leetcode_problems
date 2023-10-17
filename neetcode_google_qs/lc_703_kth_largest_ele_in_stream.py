##two hepler functions
##init and add 
##use a MIN HEAP the size of K

import heapq


class KthLargest:
    
    def __init__(self, k, nums):
        self.minHeap, self.k = nums, k 
        heapq.heapify(self.minHeap)
        
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)
            
    def add(self, val):
        heapq.heappush(self.minHeap)
        