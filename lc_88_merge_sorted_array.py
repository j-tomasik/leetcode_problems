def merge(nums1, m, nums2, n):
    pointer1 = m-1
    pointer2 = n-1
    write_idx = m + 2 - 1
    
    while pointer2 >= 0:
        if pointer1 >= 0 and nums1[pointer1] > nums2[pointer2]:
            nums1[write_idx] = nums1[pointer1]
            pointer1 -= 1
        else:
            nums1[write_idx] = nums2[pointer2]
            b -= 1
        
        write_idx -= 1
        