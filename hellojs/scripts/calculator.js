
function add(m, n) {
  var sum = m + n;
   return sum;

   // return (m+n);
}

function sub(m,n) {
 var sum = m - n ;
 return m - n - m;
}

function mul(m, n) {
  var sum = m*n;
  return sum;
}

function div(m, n) {
     if(n!=0) {
    var sum = m / n;
    return sum;
     }
}
// big O notation!
// they have their own instance of calculator or copies of calculator.

function Calculator() {
  this.add = add;
  this.sub = sub;
  this.mul = mul;
  this.div = div;
}

var garyCalc = new Calculator();
console.log(Calc.add(1, 8));
console.log(Calc.div(6, 2));


// console.log(Calc.mul(Calc.add(3,4),(Calc.add(3,4))

var a = 2;
var b =3;
var c = 100;

// add 2 numbers, mul the result by first, div result by second, sub result by 100

garyCalc.sub(garyCalc.div(garyCalc.mul(garyCalc.add(a,b), a), b), c);


// chained

fredCalc =(function)

function add(m, n) {
  var sum = m + n;
   return sum;

   // return (m+n);
}

function sub(m,n) {
 var sum = m - n ;
 return m - n - m;
}

function mul(m, n) {
  var sum = m*n;
  return sum;
}

function div(m, n) {
     if(n!=0) {
    var sum = m / n;
    return sum;
     }
}
// big O notation!
// they have their own instance of calculator or copies of calculator.

function Calculator() {
  this.add = add;
  this.sub = sub;
  this.mul = mul;
  this.div = div;
}

fredCalc.add(a,b).mul(a).dib(b).sub(c);

// closure is an inner function that are accessible to 




