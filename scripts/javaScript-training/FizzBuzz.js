// FizzBuzz
// Task: Print numbers from 1 to n, but:
// if number is divisible by 3 → "Fizz"
// if divisible by 5 → "Buzz"
// if divisible by both 3 and 5 → "FizzBuzz"


function FizzBuzz(maxNumber){
    for( let i = 1; i < maxNumber +1 ; i++){
        if(i % 3 ===0 & i % 5 === 0){
            console.log("FizzBuzz")}
            else if (    i % 3 === 0 ){
                console.log("Fizz")}
            else if (i % 5 === 0){
                console.log("Buzz")}
            else console.log(i)
    }
}

FizzBuzz(23)