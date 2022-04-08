const segregate = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {

        while (arr[left] % 2 ===0 && left < right) {
            left++;
        }

        while(arr[right] % 2 === 1 && left < right) {
            right--;
        }


        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    
}