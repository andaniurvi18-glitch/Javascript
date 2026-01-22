var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24;// naver use
//let
let temp = "abc";
//const
const temp_const = "Hello Word !!"

//declarations and initialization
var d; // declare
var d = 12; // declare and initialize for first time
//var add value into window
//var is function scoped
// var can be redeclared and reassigned
d = 24; // reassign
var d = "Hello" // redeclar
// temp_const = "Hello";

//scope (globel, Block, functional)
//var=block scope use
var e = 23; //globel scope
{
    var e = 25; // block scope
    console.log("block scope " + e);

}
function abc() {
    var e = 30; // functional scope
    console.log("functional scope " + e);
}
abc();
console.log(e);

//let=global scope use
let f = 23; //globel scope
{
    let f = 25; // block scope
    console.log("block scope " + f);

}
function abc() {
    let f = 30; // functional scope
    console.log("functional scope " + f);
}
abc();
console.log(f);

//Temporal Dead Zone (TDZ)
//TDZ not Working on var
console.log(temp_b);
var temp_b = 24; // on var there is no TDZ

//  console.log(j);
//  let j = 12;


//Hoisting Impact
//Hoisting --> when your create a variable into js that braek into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 64)
// if you use console.log before initialization that give you underfined;
let temp_d_let = 24;
//let variable not use before initialization
// if you use console.log before initialization that give you error;
//Hoisting Impace on var, let, cont
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/
//ex-1
// console.log(nm);
// let nm = "name";

//ex-2
console.log(s);
var s= "username";

//ex-3
var x = 1
{
    var x =2
}
console.log(x);

//ex-4
let p = 10; 
 {
let p = 20;
console.log("Inside:", p);
}
console.log("Outside:", p);

//ex-5
const person = {name: "demo"};
console.log
person.name = "user";
person = {}; 





