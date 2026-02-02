// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name (params) {} --> function declaration
function abc(){}
// let fnc = function (){} --> function expression
let fnc = function() {}
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {}

function temp_cart(){
console.log("adding producat");
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli (pass) kareli values)
function cart (producat) { // product params
    console.log(`Adding ${producat}`)
}
cart("Laptop"); // laptop args
cart("Mac Book");
cart("525 ultra");

function cart2(name,rollno){
    console.log(`Adding ${name} at ${rollno}`)
}
        cart2("axita",101);
        cart2("riddhi",102);
        cart2("mansi",103);

//convert into arrow function
//let fnc =() =>{}
    let cart3 = (name, rollno) => {
     console.log(`arrow function ${name} at ${rollno}`)
    };
    cart3("tisha" , 104)


    //convert into arrow function
//let fnc =() =>{}
    let cart4 = (name, rollno) => {
     console.log(`function Expression ${name} at ${rollno}`)
    };
    cart3("lxita" , 105)


    // Default, rest parameters in function
// Default
function abcd(b = 10, price = 0){
console.log(price, b)
}
abcd(15);
// use case fees / flipkart platform fee
//rest
// Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo funtion na parameter ni anadar lakhvama aave chhe)
function def(a, b, c, d, e, f, g){
console.log(a, b, c, d, e, f, g)
}
def (1, 2, 3, 4, 5, 6, 7);

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
const cart5 = function (name, rollno){
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

function hello(andani)
{
    andani();
}
hello(function a() {
    console.log("hello i am Akshita");
});


// function abcd(){ return function(){} } abcd()() --> higherorder
function abcd(){
    return function(){
        console.log("Higher order function Example");
    };
}
abcd()();