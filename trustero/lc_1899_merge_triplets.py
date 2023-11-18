def mergeTriplets(triplets, target):
    good = set()
    
    for t in triplets:
        if t[0] > target[0]