def isNStraightHand(hand, groupSize):
    if len(hand) % groupSize:
        return False
    
    count = {}
    for n in hand:
        count[n] = 1 + count.get(n, 0)
        
    minH = list(count.keys())
    heapq.heapify(minH)