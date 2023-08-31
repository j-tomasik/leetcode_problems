def search(nums, target):
    l, r = 0, len(nums) - 1
    
    while l <= r:
        m = l + ((r - l) // 2)
        if nums[m] > target:
            r = m - 1