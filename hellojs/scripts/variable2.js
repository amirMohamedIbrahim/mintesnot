
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



