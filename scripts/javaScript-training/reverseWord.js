// Swap the order of words in a sentence
// Task: reverseWords("Hello world") → "world Hello"

function reverseWord(userInput){
    let reverseWord = ""
    let whiteSpacePosition = userInput.indexOf(" ");
    reverseWord = userInput.slice(whiteSpacePosition, userInput.length) + " " + userInput.slice(0, whiteSpacePosition)
    return reverseWord
}

// console.log(reverseWord("Hello word"))