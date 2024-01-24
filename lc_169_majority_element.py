from collections import Counter
def majorityElement(nums):
    count = Counter()
    half = len(nums) / 2
    for num in nums:
        count[num] += 1
        if count[num] > half:
            return num