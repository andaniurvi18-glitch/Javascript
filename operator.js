
// assignment
// =
// give a value, value assignment operator
//  let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
//-=
//ex. a -= 41; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a / 2;
// %=
// ex. a %= 2; (give remainder)

//logical
// && (AND)
// ex. true && true --> true 12<13 && 14<15 true
// false && true --> false 12<10 && 14 < 15 --> false
// ture && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false

//! (NOT)
// // ex. ! true --> false
// !false --> true
// !12 --> false --> !!12 true

// Unary Oprator
// + - ! typeof ++ --
//+
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
//-
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a+++ a => 25
// ++a --> 13 // pre ex. a+++ a => 26
//--
//ex. let a = 3;
// a--
// a++

// Ternary
// ? :
// condition? true thase to print thase false thase to print thase
//let a = 12>13 ? console.log("true"): console.log("false");

// typeof null --> object I
// typeof [] --> object, let a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo

//Example:1

let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}

//Example:2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}

//Example:3
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}

//Example:4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}

//Example:5
let score = 90;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

//Example:6
let points = 100;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

//Example:7
let loggedIn = true;
let hasToken = true;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

//Example:8
let v = 8 ;
v++
console.log(v);

//Example:9
let b = 8;
++b
console.log(b);

//Example:10
let e = 4;

let c = e++

console.log(e, c);

//example:11
let f = 4;
let g = ++f
console.log(f, g);

//Example:12
let m = 10;
console.log(m--)
console.log(m);

//Example:13
let n = 5;
let result = n++ + ++n;
console.log(result);

//example:14
let likes = 100;
function likePost(){ result +likes; }
console.log(likePost());
console.log(likes);

//Example:15
let count = 5;
if(count-- === 5){ console.log("Matched"); }else{ console.log("Not Matched"); }










