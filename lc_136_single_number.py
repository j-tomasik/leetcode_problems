def singleNumber(nums):
    visited = set()
    
    for num in nums:
        if num in visited:
            visited.remove(num)
        else:
            visited.add(num)
    
    return visited.pop()