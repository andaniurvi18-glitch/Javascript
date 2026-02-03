// Array -- Hold multiple values at same time
// [1,2,3,4,5]
// ["Hello", "a", "B" , "C"]
//[2,"Bye", "Hello",50]

// create
// define a variable = [multiple values]
let arr = [1,2,3,4];

// access
// position = [0 1 2 3]
// access
// array_name[postion]
//arr[3], arr[2], arr[10]

// modify
// array_name[position] = new value
// arr[0] = 10

// Array Methods:(variable_name.method_name)
// push, pop, shift, unshift, splice, slice, reverse,sort
// push --> enter new value into array -- place it into last
arr.push(5);
// variable || function.method --> koi variable ke function in pachal dot(.) kari ne lakho te method keavi
// use case -- enter new producats into existing producats list

let clothe_product = ["Nike","Reebok","Levi’s","Zara"]
clothe_product.push("Fabindia")

//pop --> remove last value into array
clothe_product.pop()
// use case -- remove last product you add into your list

//shift -- remove first value  into Array
clothe_product.shift()
// use case -- remove old product automatic after sometimes

// unshift -- add value into array -- first
clothe_product.unshift("Jack & Jones")
// use case -- add a value into top of that data you receive

//splice - add a values into array -- specific position and specific number of values
// into () - first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// use case -- select msg and remove multiple msg at on click

// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let all_product = ["Nike","Reebok","Levi’s","Zara"];
let face_product = all_product .slice(0,3);

//use case -- copy specific data and save it into new variable
//generate a report based on data and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value frome main array and create a new array that hold the value that you can into

//reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your fronted

//sort -- set into ascending order
let h = [50,20,80,10,40];
h.sort();
let b = [11, 62, 3, 4, 25];
 let sr = b.sort(function(a,b)
 {
  return a-b; // ascending order
 })

let i = [11, 62, 3, 4, 25];
let sr1 = i.sort(function(a,b){ 
 return b - a; // decending order
 })

