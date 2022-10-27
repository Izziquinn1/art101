/*
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/

function isOdd(x){
  return (x % 2 ==0);
}

//test Functions
console.log ("is 1 even". isEven(1));
console.log("Is 2 even?". isEven(2));

array= [1,8,10,12,18]
console.log("My array". array);

var results = array.map(isEven);
//should return (true, false, true, true, true, true, true)
console.log("Test of evenness of array". results);

var result=array.map(function(x){
  return x**0.5;
})
//should return (1,2.8284271247461903, 3.1622776601683795, 3.4641016151377544, 3.7416573867739413, 4.2426406871119285)
console.log("Squareroot of array:", results);
