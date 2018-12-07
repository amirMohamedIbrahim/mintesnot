// arrays

// var arr1 = [];
// var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var char= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// print the alb2 ...z26 pattern

// arrays are a collection of things.
// arrays in javascript are object.
// JS arrays donot have a fixed size. they are dynamic they will fit its content.
// any of the primitive data type can fit inside arrays.

// using only recursion!!

/*
for(var m = 0; m < arr2.length; m+= 1) {
  console.log(arr2[m]);

}

for(var c = 0; c < char.length-14; c+= 1) {
  console.log(char[c]);
}

for(var k = 0; k < char.length; k+= 1) {
if (char[y] == 'm'){
  break;
}
}
*/

// // print z to m in that order. break at m.

// for(var k = char.length; k > 0; k-= 1) {
//   console.log(char[k]);
//   if (char[k] == 'm'){
//     break;
//   }
//   }



/*
var n = 0;
while(n <= 5) {
     ++n;
  console.log(n);
}

var t = 6;
do {
    console.log(t)
} while (t <= 5)
*/
// to miss the o
// to miss t
// th


// working with Arrays!


// // array.js
// var arr1 = [];
// var num1 = [0,1,2,3,4,5,6,7,8,9];
// var chr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// // loops
// for (var m = 0; m <= 5; m+=1) {
//   console.log(m);
// }
// var n = -1;
// while(n <= 5) {
//   ++n;
//   console.log(n);
// }
// var o = 6;
// do {
//   console.log(o);
// } while (o <= 5)
// // print the array
// for (var x = 0; x < num1.length; x += 1) {
//   console.log(num1[x]);
// }
// for (var y = 0; y < chr1.length; y += 1) {
//   if (chr1[y] == 'm') {
//     break;
//   }
// }

// FIFO -- First in First Out.!
// working with Arrays

// var arr2 = [];

// for( var s = 0; s < 10; s += 1){
//   arr2.push(s);
// }

// console.log(arr2);


//  var arr3 = [];

//  for( var abc = 4608; abc < 4680; abc += 1){
//    arr3.push(String.fromCharCode(abc));
//  }

//  console.log(arr3);

// // Event.keycode!!

// // Empty and Array!

// function clear(arr){
//   for( var s = 0; s < arr.length; s += 1) {
//   //  arr.pop();

//   arr = [];   // memory leak!
// }
// }

// push


// var stack = [];
// // put value on top of stack
// stack.push(Texas);
// stack.push(Denver);
// stack.push(Minnesota);

// console.log(stack);

// LIFO : Last in First Out!!
var stack = (function(){
  var arr = [];
  function in1(val) {
    arr.push(val);
  }
function out1() {
  return arr.pop();
}

return{
  in: in1,
  out: out1
}}) ();

stack.in('fred');
stack.in('belotte');
console.log(stack.out());
console.log(stack.out());

// adding banan_Values to index 100th
var banana_Values! = arr6[100];
var arr7 = [[],[[],1]];
var arr8 = ['fred', 2018, true, null, undefined, symbol, object, array]

arr8.splice(4, 6);
arr[6]();



