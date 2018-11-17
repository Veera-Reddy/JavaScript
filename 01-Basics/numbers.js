// Numbers in javaScript  

/**
 * let - It is block Scoped, gives you privilege to declare variables that are limited in scope
 * var - It is function Scoped
 */
var score = 100
score = 130;

const bonus = 50

var finalScore = (score + bonus) * 1.8
console.log("You scored "+finalScore)

let complex = (4  + (4 * 5))
console.log(complex)

// Let is block scoped
for(var i=1;i<11;i++) {
    console.log(i)
}
console.log(i) // i is not defined if i is declared with let


// Fahrenheit to Celcius Convertor

let tempInFarhenheit = 100

let celcius = ((tempInFarhenheit -32) * 5)/9

console.log(celcius)

