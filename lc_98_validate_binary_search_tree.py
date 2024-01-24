def isValidBST(root):
    #CURR/MIDDLE VAL, smaller edge, larger edge
    def valid(node, left, right):
        #base case, empty node is valid
        if not node:
            return True