//Data Types:
//Two Types of Data types:
//1.Primitive Data Types
// copy --> real value
let a =12;
let b= a;//a--> 12
a = a+3;

// types: string, number, boolean, null, undefined,symbol,bigint

//2.Non-primitive Data Types (Reference Data Types)
// copy --> give refrence of parent
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); //remove value

//Types : array [], objects {}, function ()

//Types: string, number, boolean, null, undefined, symbol,bigint

//string:
// ''- singal quotesundefined:
// ""- double quotes
//``- backticks
let d = "name";
d = 'username';
d = `firstname`;

//number:
let e = 12;
e =12.25;

//boolean:
let g ="true";
g = "false";

//null:
// you give a value
let t=null;

//undefined:
//you don't give a value, by default value
let h;

//symbol:
// unique immutable value
let u1= Symbol("uid");
let u2= Symbol("uid");
// check u1===u2
let obj ={uid: 1, name: "test", email: "test@test.com"};
let u3 = Symbol("uid")
obj[u3]= "001" 

//bigint:
// cheak range of number , Number.MAX_SALF_INTEGER
let number = 9007199254740991;
number = number + 6;
let num2 = 9007199254740991n;
num2 +3n;

// <--------Non-Primitive Data Types----->
// types: arrays [], objects {}, function ()
let temp_array = ["name", "age","phone_number"];
let obj1 = {name: "test", age: 9, phone_number:558998554}
function name (parent) {}

//Dynamic types
let temp_d = "name";
temp_d = 123;
temp_d = {};
// javascript --> typescript
//typeof quirks
// typeof 12
//check type of variable use ex. typeof NaN, typeof null, 1+ "1", 1= "1", 1== "1"
// why typeof NaN --> number
// NaN is a failed number oprations that why that
//type is number
// ex. "hello" NaN
// type coeration
// "5" + 1
// "5" 1


// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, documnet. all, -- false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true

