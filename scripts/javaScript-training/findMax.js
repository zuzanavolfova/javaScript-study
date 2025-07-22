// Task: Find the largest number in an array.
// Example: findMax([1, 7, 3, 9]) → 9

function findMax1(userInput){
    userInput.sort((a,b)=>{return a-b})
    return userInput[userInput.length-1]
}

console.log(findMax1([1,9,3,7,]))

function findMax2(userInput){
    let max = userInput[0];
    for(let i = 1; i < userInput.length; i++){
        if(userInput[i] > max){
            max = userInput[i];
        }
    }
    return max;
}

console.log(findMax2([1, 7,11, 3, 9]))
