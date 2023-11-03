from ast import List


class Solution:
    def jump(self, nums: List[int]) -> int:
        res = 0#1
        l = r = 0
        
        while r < len(nums) - 1:
            farthest = 0#2
            for i in range(l, r + 1):#1,2;
                farthest = max(farthest, i + nums[i])#0vs2, 2vs1+3=4,4vs2+1=4
            l = r + 1#1,2
            r = farthest#2,4
            res += 1
            
        return res
        
#given an array of integers, return the count of non-overlapping pairs that have the same sum
#[0,1,2,2,1,3,4,0]  --> 3
#pairs are (2,2), (1,3), (4,0)
#[1,2,1,1,2] --> 2
#pairs are (2,1), (1,2)