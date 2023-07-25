class Solution(object):
    def rob(self, nums):
        rob1, rob2 = 0, 0
    # [rob1(2), rob2(4), 1,2,3,1]
        for n in nums:
            temp = max(n + rob1, rob2)  # 1+0/0, 2+0/1, 3+1/2,1+2/4
            rob1 = rob2  # 0,1,2,4
            rob2 = temp  # 1(n),2(n+0),, 4(n+1)
        return rob2
