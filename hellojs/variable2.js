
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);

var1 = 'I am the first';

var varany = 'fred';
var varsome = 'fred bourne again';

f2();

// function expression
var f1 = function() {
  var varf1 = 'fred';
  var varany = 100;
  var varsome = 'fred bourne again'
  console.log('f1 is called');
}

// function statement
function f2() {
  console.log('f2 is calling');
}

f1();
f2();
console.log(varf1);
console.log(varsome);


// funciton anonymous, function arrow ==>
// function without being a function...

var f3 = () {
  console.log('f3 is magic');
}


// function iife immediately invoke function
(func () {
  console.log('f4 is cyborg');
})();


(function n () {

})()


f1();
f2();
f3();
console.log(varany);
console.log(varsome);


var obj1 = {};  // empty literal object
var humanoid = {
  head: null,
  torso: null,
  arms: 2,
  legs: 2,

}; // literal object

console.log(humanoid.arms);

obj1.firsName = "fred";
obj1.lastName = 'Belotte';

console.log(obj1);  // inserting properties and values inside the empty object

var humanoid2 = new humanoid;    // don't need the new keyword

humanoid2.arms = 4;

console.log(humanoid.arms);
console.log(humanoid2.arms);

var humanoid3 = object.create(humanoid);  // constructor object
humanoid3.arms = 6;

console.log(humanoid.arms);
console.log(humanoid2.arms);
console.log(humanoid3.arms);

console.log(humanoid3.constructor);

// contructor creates an object
// the constructor contains the "object constrcutor
// creates a method of an object  is constructor.

function HumanoidDNA() {   // constructor function.
  this.head = null;
  this.torso = null;
  this.arms = 2;
  this.legs = 2;

}

HumanoidDNA.prototype.sense8 = 'magice!';

var humanoid4 = new HumanoidDNA();
var humanoid5 = new HumanoidDNA();

console.log(humanoid4.sense8);
console.log(humanoid5.sense8);

HumanoidDNA.prototype.sense8 = 'magice!';
// only var are hoisted. protype are not hoisted.

// debugger pause the code from running.

// constructor function vs constructor object!

var terminator = HumanoidDNA.constructor;
var terminator = HumanoidDNA;
var terminoid = new terminator();
var terminoid2 = new terminator2();

humanoid4.brain  = 1;
humanoid5.brain = 2;

console.log(terminoid);
console.log(terminoid2);


// build a bicycle from a car constructor knowing they are both vehicle

function vehicle() {
  this.wheels = null;
  this.tires = null;
}

var car = new vehicle();
// var car2 = vehicle();

var bicycle = car.constructor();
var unicycle = bicycle;

// Parameter and Argumnet:
// define a parameter in a method and declare and Invoke Arguments with function!


// parameters
function PrintName(name){   // the set of a parameters.
  console.log(name);
}

function printFullName(first, last) {
  console.log(first + ' ' +last);
}

// Arguments
PrintName('fred');
printFullName('fred', 'Belotte');








