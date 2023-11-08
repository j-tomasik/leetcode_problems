def isNStraightHand(hand, groupSize):
    if len(hand) % groupSize:
        return False
    
    count = {}