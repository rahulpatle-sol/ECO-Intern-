// //  this tut is containing this variable 
// JavaScript this Keyword

// The `this` keyword in JavaScript refers to the object that is currently executing or calling a function, and its value is determined by how the function is invoked, not how it is defined  In object methods, `this` typically refers to the object itself, allowing access to its properties and methods  When a function is called as a standalone function, `this` usually refers to the global object (like `window` in browsers) in non-strict mode, or `undefined` in strict mode  The behavior of `this` can be explicitly controlled using methods like `call()`, `apply()`, and `bind()`, which allow setting the `this` value for a function call  Arrow functions, however, do not have their own `this` binding; instead, they inherit `this` from the enclosing lexical scope at the time they are defined 



const testig={
    props:"sertyuio",
    func (){
        return this.props
    },
};

console.log(testig.func())

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); 
// { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis());
 // { name: 'obj2', getThis: [Function: getThis] }


 function makeCounter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
