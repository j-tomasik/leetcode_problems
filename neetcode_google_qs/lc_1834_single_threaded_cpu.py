##min heap to use as queue to chose smallest time length task
##keep track of time, add first num in duble to this
##when adding to the min heap, add in original idx to add to return list
##in the min heap rank the tasks by the time it takes to complete
import heapq
class Solution:
    def getOrder(self, tasks):
        for i, t in enumerate(tasks):
            t.append(i)
        
        
        tasks.sort(key = lambda t : t[0])
        res, minHeap = [], []
        i, time = 0, tasks[0][0]
        
        while minHeap or i < len(tasks):
            while i < len(tasks) and time >= tasks[i][0]:
                heapq.heappush(minHeap, [tasks[i][1], tasks[i][2]])
                
            if not minHeap:
                time = tasks[i][0]
            else:
                procTime, index = heapq.heappop(minHeap)
                time += procTime
                res.append(index)
        return res