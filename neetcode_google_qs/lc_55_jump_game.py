
from ast import List


class Solution:
    def canJump(self, nums: List[int]):
        







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
