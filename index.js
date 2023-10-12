function receivesAFunction(cb) {
  return cb() 
}

function returnsANamedFunction() {
    return function cb() {
        console.log(`idk`)
    }
}

 function returnsAnAnonymousFunction() {
    return function () {
        console.log(`test`)
    }
 }