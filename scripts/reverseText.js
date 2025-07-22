// Task: Write a function reverseString(str) that reverses a string.
// Example: reverseString("hello") → "olleh"

const text = "Hello"
function reverseString(text){
    let reverseText = ""
      for (let i = 1; i <= text.length; i++) {
        reverseText += text[text.length - i ]
    }
    return reverseText
}
console.log(reverseString(text))