def insert(intervals, newInterval):
    res = []
    
    for i in range(len(intervals)):
            #if new end is before curr start, no overlap
            #add to returns, then return all seen and 
            #slice everything after curr to concat and return
        if newInterval[1] < intervals[i][0]:
            res.append(newInterval)
            return res + intervals[i:]
        
            #if new start if AFTER curr end
            #there is no overlap, append in curr
            #and keep iterating to find overlap
        elif newInterval[0] > intervals[i][1]:
            res.append(intervals[i])
            #there is an overlap of some type
            #select min of starts for new start
            #max of ends for new end
            #don't append yet, just mutuate new and keep iterating
        else:
            newInterval = [
                min(newInterval[0], intervals[i][0]),
                max(newInterval[1], intervals[i][1]),
            ]
        #if still not added and overlapping end, do one 
        #last add before returning
    res.append(newInterval)
    return res