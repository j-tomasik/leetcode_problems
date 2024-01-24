from collections import Counter
def majorityElement(nums):
    count = Counter()
    half = len(nums) / 2
    