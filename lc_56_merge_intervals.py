def merge(intervals):
    intervals.sort()
    
    output = []
    currStart = intervals[0][0]
    currEnd = intervals[0][1]
    
    for i in range(len(intervals)):
        startInt, endInt = intervals[i]
        
        if startInt <= currEnd:
            currEnd = endInt if endInt > currEnd else currEnd
        else:
            #append to output list
            output.append([currStart, currEnd])
            #reasign for next comparison
            currStart, currEnd = startInt, endInt
    
    output.append([currStart, currEnd])
    return output