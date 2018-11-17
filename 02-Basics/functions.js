console.log(`John is ${20+1} years old`)

// Defining our own function
function greeting(name) {
    console.log(`Greeting message for ${name} `);
    console.log(`Hey ${name}`);
}
greeting('John')

//function without return value

function fullNameMaker(firstname,Lastname) {
    console.log(`Happy to have you ${firstname} ${Lastname}`);    
}

fullNameMaker("John","Doe")

// functions with return value
function myAdder(firstElement,secondElement) {
    let sum = firstElement+secondElement
    return sum    
}
console.log(`Addition of given numbers is ${myAdder(2,13)}`);

// functions with return value and default parameters
function myMultiplier(firstElement = 1,secondElement =1) {
    return firstElement*secondElement    
}
console.log(`Multiplication of given numbers is ${myMultiplier(2,5)}`);

console.log(myMultiplier());





    
