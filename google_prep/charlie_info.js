// I had a stack question where you got a string of comma separated numbers which were weights of bags you had to load onto an airplane.
//  Bags had to be placed in containers that could not exceed 40 pounds, 
//  so if you had two numbers in a container and the next number pushed the weight limit over 40 you had to put that bag in another container,
//   and when you unload the airplane, you unload each container, so the order in 
//   the return string has to match the input into the container. So for instance, 
//   if you had a string '30, 5, 6', the output would be '6, 30, 5' because 30 and 5 would be in a container,
// but the 6 would make the weight over 40 so 
//   it would have to be put into another container

const weightedBags = (str) => {
    let result = [];
    let stack = [];
    let numsArr = str.split(',');

    let weight = 0;
    let bag = [];
    for(let char of numsArr) {
        let num = Number(char);
        if((weight + num) <= 40) {
            bag.push(num);
            weight += num;
        } else {
            stack.push(bag);
            bag = [num];
        }
    }
    stack.push(bag);

    while(stack.length > 0) {
        let lastArr = stack.pop();
        result.push(...lastArr)
        // let nowChar = String(lastArr);
        // result += nowChar;
    }
    
    return result.join(',');
    
}
let example = '30, 5, 6';
console.log(weightedBags(example));