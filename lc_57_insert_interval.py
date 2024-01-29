def insert(intervals, newInterval):
    res = []
    
    for i in range(len(intervals)):
            #if new end is before curr start, no overlap
            #add to returns, then return all seen and 
            #slice everything after curr to concat and return
        if newInterval[1] < intervals[i][0]:
            res.append(newInterval)
            return res + intervals[i:]
    
    return res