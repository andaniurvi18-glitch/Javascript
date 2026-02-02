// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name (params) {} --> function declaration
function abc() { }
// let fnc = function (){} --> function expression
let fnc = function () { }
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => { }

function temp_cart() {
    console.log("adding producat");
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli (pass) kareli values)
function cart(producat) { // product params
    console.log(`Adding ${producat}`)
}
cart("Laptop"); // laptop args
cart("Mac Book");
cart("525 ultra");

function cart2(name, rollno) {
    console.log(`Adding ${name} at ${rollno}`)
}
cart2("axita", 101);
cart2("riddhi", 102);
cart2("mansi", 103);

//convert into arrow function
//let fnc =() =>{}
let cart3 = (name, rollno) => {
    console.log(`arrow function ${name} at ${rollno}`)
};
cart3("tisha", 104)


//convert into arrow function
//let fnc =() =>{}
let cart4 = (name, rollno) => {
    console.log(`function Expression ${name} at ${rollno}`)
};
cart3("lxita", 105)


// Default, rest parameters in function
// Default
function abcd(b = 10, price = 0) {
    console.log(price, b)
}
abcd(15);
// use case fees / flipkart platform fee
//rest
// Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo funtion na parameter ni anadar lakhvama aave chhe)
function def(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7);

function def1(...number) { //...number resert params  
    console.log(number);
}
def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



//early return --> function mathi jaldi bahar nikalva mate
function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 80) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 60) return "Value is less than 60";
    else return "value is less than 60";
}
let result = score1(80);
console.log(result);

//first class function and their types:
//function can be treated as variables
// let temp_a = function(){} - first class function
const cart5 = function (name, rollno) {
    console.log(`Adding ${name} at ${rollno}`);
};
cart5("function expression - S25 ultra", 69000);
// function can be passed as arguments to other functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});


// function can be returned from other functions
function abcd() {
    return function () {
        console.log("function return other function")
    };
}
// abcd();
abcd()(); // call a function that retrun other function

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

//function abcd(val){} --> higher order function

function hello(andani) {
    andani();
}
hello(function a() {
    console.log("hello i am Akshita");
});


// function abcd(){ return function(){} } abcd()() --> higherorder
function abcd() {
    return function () {
        console.log("Higher order function Example");
    };
}
abcd()();

// pure vs impure function 
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let a = 10;
function abcd_pure() {
    console.log(" Hello");
}

// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare)
function abcd_impure() {
    a++;
    console.log(a);
}

// closure function
// function je potana parent function na variables ne access kari shake ( return thava valo function use karshe parent function na koi variable)(function within function)
function outer() {
    let count = 0;
    function inner() {
        count++;//accessing outer(parent) function variable
        console.log(count);
    }
    return inner;
}
let fun = outer();
fun();

//lexical scope --> nested function can access variable declared in their outer scope
function outer1() {
    let outer_var = "outer function variable";
    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var); // outer1 function variable write in console log
        function most_inner() {
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most inner function variable";
            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }//Hoi
    inner1();
}
outer1();


// IIFE - Immediately Invoked Function Expression
(function () { })(); // function je declare karta j call thavi jaye

(function () {
    console.log("This is IIFE function")
}())

// Hoisting in function
abcde();

function abcde() {
    console.log("This is hoisting function");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//  console.log("Hoisted Function Expression called");
//}

// hoistedFunction2();
// let hoistedFunction2 = () => {
// console.log ("Hoisted arrow Function called");
//  }

//Ex:2
//

greet();

function greet() {
    console.log("Hello!");
}

//Ex:3
//Convert normal function to Arrow Function

let add = (a, b) => {
    console.log(a + b);
}
add(5, 23);

//Ex:4
//how many parameters and args hat is parms and what is args

function welcome(name) { console.log("Welcome " + name); }

welcome("user");

//Ex:6
//Predict the output

function temp_user(name = "Guest") 
{ 
    console.log("Hello " + name); 
}

temp_user();

//Ex:7
//what is ... operator and why use it in function

function number(...numbers) 
{ 
    console.log(numbers); 
}

number(1, 2, 3, 4, 5)

//Ex:8
//Use rest Parameters to accept any number of scores and return the total

function calculateTotal(...scores) 
{
    let total = 0; for (let i = 0; i <= scores.length; i++) { total += scores[i]; } return total;
}

function calculateTotal(...scores) 
{
    let total = 0; scores.forEach(function (val) { total = total + val; }); return total;
}

calculateTotal(10, 20, 30, 40, 50)

let sumtotal = calculateTotal(10, 20, 30, 40, 50)

//Ex:9
//Fix the function using early return

checkAge();
function checkAge(age)
{ 
    if(age < 18){ console.log("Too Young"); } else { console.log("Access Granted"); } 
}

//Ex:10
//What is the return value of above function

function f()
{ 
    return;
}

//Ex:12
//Can You assign a function to a variable and then all it?

a = function(){console.log("Hello");}

a();


//Ex:13
//Pass a function into another function and execute it.

function abcd(val) {
  val();
}

abcd(function () {
  console.log("Hello");
});

//Ex:15
//Identify the higher-order function.

[1, 2, 3].map(function (x) {
  return x * 2;
});
  
//Ex:16
//Pure or impure function?

let total = 5;

function num(num) {
  total += num;
}

num(3);

//Ex:17
//Convert example 16 into a pure function.

function num(total, num) {
  return total + num;
}

num(5, 3);

//Ex:18
//What is Closure? When is it created?

function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

//Ex:19
//What's logged?

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();

//Ex:20
//Convert into an IIFE.

(function () {
  console.log("Initialized");
})();
  
//ex:21
//Use of IIFE with real-world example.

let func = (function () {
  let score = 0;

  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
    }
  };
})();
  
//Ex:22
//What will be the output?

temp_var();

var temp_var = function () {
  console.log("Hello");
};

//Ex:23
//What will be the output?

temp_var();

function temp_var() {
  console.log("Hello");
}
  