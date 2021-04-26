console.log("hii");

//1st= Generate an API key with given link below https://openweathermap.org/guide Print the current
//...... weather data in console- By lat long

//Do the below programs in anonymous function and ,IIFE
// Print odd numbers in an array

var a = [23, 44, 55, 66, 77, 88, 98];

console.log(
  a.filter((ele) => {
    return ele % 2 !== 0;
  })
);

// Convert all the strings to title caps in a string array

var a1 = ["chinmay", "surve", "hii", "meee"];

var a2 = a1.toString();

console.log(a2.toUpperCase());
console.log(a2);

// Sum of all numbers in an array
var arr = [34, 45, 33, 21];

var sum1 = arr.reduce((d1, d2) => {
  return d1 + d2;
});

console.log(sum1);

// Return all the prime numbers in an array

// Return all the palindromes in an array
var arr1 = ["mom", "mine", "dad", "chinmay"];
for (var i in arr1) {
  if (arr[0]) console.log(arr1[i]);
}


//========================================================
// Return median of two sorted arrays of same size

var arr12 = [23, 45, 33, 44, 56];
var arr13 = [23, 45, 45, 33, 11, 22, 33, 22, 33, 40];
function median1(s1) {
  if (s1.length % 2 !== 0) {
    var aw = Math.round(s1.length / 2);
    console.log(s1[aw - 1]);
  } else if (s1.length % 2 === 0) {
    var aw1 = s1.length / 2;
    var aw2 = (s1[aw1 - 1] + s1[aw1]) / 2;
    console.log(aw2);
  }
}
median1(arr13);

//================================================================
// Remove duplicates from an array

var arr12 = [23, 45, 33, 44, 56];
var arr13 = [23, 45, 45, 33, 11, 22, 33, 22, 33, 4];
//let a11 = [1,2,3,3,4]
var set1 = new Set(arr13);

//s2.push(set1[0]);

console.log(set1);

//================================================================
// Rotate an array by k times and return the rotated array

var a = [1, 2, 3, 4, 5];
var k = 4;
//console.log(a);

function rotate_k(ele1) {
  for (let i = 0; i < k; i++) {
    let poped = ele1.pop();
    ele1.unshift(poped);
  }
console.log(ele1);
}

rotate_k(a);
