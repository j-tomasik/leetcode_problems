##sort by val
##run while loop until len <= 1
##grab two biggest with idx -1 and -2
##compare and remove 

import heapq


class Solution:
    def lastStoneWeight(self, stones):
        stones = [-s for s in stones]
        heapq.heapify(stones)
        
        while len(stones) > 1:
            first = heapq.heapop(stones)
            second = heapq.heapop(stones)
            
            if second > first:
                remainder = second - first
                heapq.heappush(stones, remainder)
                
        stones.append(0)
        return abs(stones[0])