##two hepler functions
##init and add 
##use a MIN HEAP the size of K

class KthLargest:
    
    def __init__(self, k, nums):
        self.minHeap, self.k = nums, k 
        