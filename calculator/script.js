// const zero = document.getElementById('zero')
const one = id('one')
const two = id('two')
const three = id('three')
// const four = document.getElementById('four')
// const five = document.getElementById('five')
// const six = document.getElementById('six')
// const seven = document.getElementById('seven')
// const eight = document.getElementById('eight')
// const nine = document.getElementById('nine')
const plus = id('plus')
const equals = id('equals')

let userInput = []

one.addEventListener('click', operation)
two.addEventListener('click', operation)
three.addEventListener('click', operation)
plus.addEventListener('click', operation)
equals.addEventListener('click', output)

function operation() {
    console.log(this.value);
    if (one || two) {
        userInput += this.value
    } else if (plus) {
        
    }

}

function output() {
    console.log(userInput);
}

//Helper Function
function id(id) {
    return document.getElementById(id)
}