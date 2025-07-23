let a = ["Hello", "Hi", "Ahoj"]
let b = ["Gutten tag", "Ahoj"]
// let b = "Ahoj"

function findData(data, val){
    return data.some((selektor) => val.includes(selektor))
}

console.log(findData(a,b))