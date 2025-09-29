// The execution context in JavaScript is an abstract environment where code is evaluated and executed. It contains all the information necessary for the JavaScript engine to execute the code, such as variables, functions, and the value of this. There are two primary types of execution contexts:

// Global Execution Context (GEC): This is created when the script starts running. It handles code that is not inside any function and sets up the global scope, including variables and functions declared at the top level.

// Function Execution Context (FEC): This is created whenever a function is invoked. Each function call generates its own execution context, which is nested within the global or another function's context.


function first() {
   console.log("First function");
   second();
}
function second() {
   console.log("Second function");
}
first();


//  solana apex 
function init() {
  var name = "Mozilla  mdn  "; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();//  clouser mearning a fuction  returning any  finction 