
/** Scope - Var and Let  */
// var - Global Scope
// let - Local scope

let iAmGlobal = 'gobal varaible'

if (true) {
    iAmGlobal = 'some global value'
    let iAmLocal = 'local variable'
    console.log(iAmGlobal);
}


console.log(iAmGlobal); // iAmLocal is not defined

// Kings Teritory Problem