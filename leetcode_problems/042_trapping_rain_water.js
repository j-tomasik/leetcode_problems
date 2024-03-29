if (height === null) return 0;
    
    let leftMax = new Array(height.length)
    leftMax[0] = height[0];
    
    for (let i = 1; i<height.length; i++) {
        // if (height[i] > leftMax[i-1]]) {
        //     leftMax[i] = height[i];
        // } else {
        //     leftMax[i] = leftMax[i-1];
        // }
        
        leftMax[i] = Math.max(leftMax[i-1], height[i])
    }

    let lastIdx = height.length - 1;

    let rightMax = new Array(lastIdx)
    rightMax[lastIdx] = height[lastIdx]

    for (let i = lastIdx - 2; i >= 0; i--) {
        rightMax[i] = Math.max(leftMax[i + 1], height[i])
    }

    let waterCount = 0;

    for(let i = 1; i < lastIdx - 1; i ++) {
        
            let limit = Math.min(leftMax[i], rightMax[i]);
            let water = limit - height[i];
            waterCount += water;
        
    }

    return waterCount;
    
    // do the same thing going from right to left for rightMax
    // iterate through one more time to calculate running total for water

    