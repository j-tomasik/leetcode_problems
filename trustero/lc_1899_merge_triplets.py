def mergeTriplets(triplets, target):
    good = set()
    
    for t in triplets:
        if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
            continue
        
        for i, num in enumerate(t):
            if num == target[i]:
                good.add(i)