
// checks euality
console.log(2 == 2);
console.log(2 === 2.0);

// Checks the object that we are referencing is same on both sides 
console.log(2 === 2.5);

let myVar = {
    name : 'veera',
}
let myVar2 = {
    name : 'veera',
}

let myVar3 = myVar

// comparing object
console.log(myVar === myVar2);

console.log(myVar === myVar3);

/**
 * == operator (Equality)
 * === operator (Identity)
 */