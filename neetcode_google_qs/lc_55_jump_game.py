
from ast import List


class Solution:
    def canJump(self, nums: List[int]):
        goal = len(nums) - 1
        #to make a backwards for loop in python, (startIdx, exclusive endpoint, incrementation)
        for i in range(len(nums) - 1, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        
        return True if goal == 0 else False






#this was timing out bc the recusion was going to deep in the stack and not hiting a false
# class Solution(object):
#     def canJump(self, nums):
#         def recursive(nums, idx):
#             curr = nums[idx]
#             if curr == 0 and idx != len(nums) - 1:
#                 return False
#             if idx == len(nums) - 1:
#                 return True

#             for i in range(0, curr + 1):
#                 newIdx = idx + i
#                 poss = recursive(nums, newIdx)
#                 if poss:
#                     return True
#             return False
#         return recursive(nums, 0)