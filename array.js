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

let h1 = [11, 62, 3, 4, 25];
let sr1 = h1.sort(function(a,b){ 
 return b - a; // decending order
 })

 let arr1 = [10, 2, 5, 20, 30]
 let sort_var = arr1.sort((a,b)=>a-b)//use when array give numbers or numeric value
 let arr2 = [ "b", "f", "z", "q", "m", "k"]

 // For Each Loop
 // for Each -- Array ni darek value mate loop chalse
 let i = [10, 35, 40, 68]

 i.forEach(val => {
    let new_val = val + 10;
    console.log(new_val)
 });

 let i1 = ["axita","riddhi","mansi","nidhi" ]
 i1.forEach(val => {
    let new_val = "my name is" + val;
    console.log(new_val)
 });

 // .map () Method:
 // map tyare j use karvu ke jayare ek new array create karvo chhe
 // first map create a black array -- only for understanding
 let data = [10, 20, 50, 40, 15];
 // same like a for each loop but map return a new array
 let temp_data = data.map( val =>{
    if(val > 20){
        return val;
    }
 });
 //use case -- data mathi specific data new array  ma store karvo hoy
 // ex. product ma thi specific category na product new array ma store karva hoy
 // let product_data = []
 // if you want to show only electronics product on your homepage
 // .length, . toUppercase


// Javascript Array Examples:

// 1. Double daily steps count
// Real life: Fitness app doubling step goal

 const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
console.log(newSteps);

// 2. Convert minutes to seconds
// Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds);

// 3. Add ₹50 delivery charge to prices

// Real life: Food delivery app

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);
console.log(finalPrices);

// 4. Convert exam marks to grades
// Real life: Result system

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);
console.log(grades);

// 5. Capitalize names

// Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames);



// 6. Apply 10% discount

// Real life: Shopping sale

const prices1 = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);
console.log(discounted);



// 7. Add bonus points to scores based on condition

// Real life: Game scoring system

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores);



// 8. Convert temperatures with formula

// Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit);




// 9. Generate table of numbers

// Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo);



// 10. Combine map with string formatting

// Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages);

// filter
// filter tyare use karvu ke jayare ek new array create karvo chhe with conditon
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let leptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_leptops = leptops_price.filter((price)=> {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare
//use case -- data ma thi specific data new array ma store karvo hoy based on condition

//JavaScript .filter() Method Example:

// ### 1. Get even numbers
// **Real life:** Find even roll numbers

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);



// ### 2. Filter adults
// **Real life:** Allow only 3+ users

const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);


// ### 3. Remove empty items
// **Real life:** Clean user input

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');


// ### 4. Filter passing marks
// **Real life:** Exam result system

const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(mark => mark >= 40);


// ### 5. Get affordable prices
// **Real life:** Shopping app price filter

const prices2 = [199, 499, 999, 1499, 299];
const affordable = prices2.filter(price => price <= 500);



// ### 6. Filter long words
// **Real life:** Search keyword validation

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);


// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation

const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);




// ### 8. Filter numbers within a range
// **Real life:** Score selection

const scores1 = [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(score => score >= 50 && score <= 90);


//fillter
let clothe_brand = ["Nike","Reebok","Levi’s","Zara"];
let clothe_brand_type = clothe_brand.filter((type)=>
{
    if(type === "Nike" || type === "Zara") return true;
});

// reduce
// reduce tyare j use karvu ke jayare ek single value calculate karvi hoy from array
let total_Price = [15, 68,45,58,52,48];

let final_price = total_Price.reduce((a,val) =>
{
    return a + val;
}, 0); // intial value of a
// 0 + 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40
// a --> je value function ma return thase te a ma store thase --> a name change kari sako cho
// val --> array ni darek value
//use case -- data ma thi ek single value calculate karvi hoy
// ex.product ma thi total price calculate karvi hoy

//JavaScript .reduce() Method Example:

// ### 1. Total money in wallet
// **Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);

// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker

const steps1 = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);

// ### 3. Find total cart price
// **Real life:** Shopping bill

const prices3 = [499, 299, 199];
const totalPrice = prices3.reduce((total, price) => total + price, 0);

// ### 4. Find maximum score
// **Real life:** Highest exam mark

const marks2 = [45, 88, 67, 92];
const highest = marks2.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);


// ### 5. Count total characters
// **Real life:** Text length calculation

const words1 = ['Hi', 'Hello', 'JS'];
const totalChars = words1.reduce((count, word) => count + word.length, 0);


// ### 6. Combine words into a sentence
// **Real life:** Message builder

const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words2.reduce((text, word) => text + ' ' + word);


// ### 7. Count passed students
// **Real life:** Result summary

const marks4 = [35, 72, 88, 40, 25];
const passCount = marks4.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);


// ### 8. Calculate final balance
// **Real life:** Bank account calculation

const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);

// ### 9. Build comma-separated string
// **Real life:** Display values in UI

const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);


 //JavaScript .Map, .Filter() and .reduce() Method Examples:

// ### Q1. Shopping App – Discounted Total
// You are given a list of item prices.
// **Tasks:**
// 1. Keep only items costing more than 500
// 2. Apply a 10% discount to those items
// 3. Find the total amount to pay

const prices4 = [200, 800, 1200, 450, 700];


// Ans: 
const total = prices4

.filter(price => price > 500)
.map(price => price * 0.9)
.reduce((sum, price) => sum + price, 0);


// ### Q2. Fitness App – Total Active Minutes
// You are given daily activity minutes.
// **Tasks:**
// 1. Keep only days with more than 30 minutes activity
// 2. Convert minutes to calories (1 min = 5 calories)
// 3. Calculate total calories burned

const minutes2 = [20, 45, 60, 15, 90];

// Ans:

 const totalCalories = minutes2

.filter(min => min > 30)
.map(min => min * 5)
.reduce((total, cal) => total + cal, 0);

// ### Q3. Exam System – Average of Passed Marks
// You are given marks of students.
// **Tasks:**
// 1. Keep only passing marks (>= 40)
// 2. Calculate the average of passed marks

const marks6 = [35, 72, 88, 40, 25, 90];

// Ans:
const passed = marks6.filter(mark => mark >= 40);
const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

// ### Q4. Salary System – Monthly Payout
// You are given daily wages.
// **Tasks:**
// 1. Keep wages greater than 500
// 2. Add a bonus of 100 to each
// 3. Calculate total payout

const wages = [300, 800, 450, 1000, 600];

// Ans: 
const totalPayout = wages
.filter(wage => wage > 500)
.map(wage => wage + 100)
.reduce((total, wage) => total + wage, 0);

// ### Q5. Online Course – Completion Points
// You are given lesson completion percentages.
// **Tasks:**
// 1. Keep only completed lessons (>= 50%)
// 2. Convert percentage into points (percentage × 2)
// 3. Calculate total points

const progress = [20, 50, 75, 40, 100];

// Ans: 
const totalPoints = progress
.filter(p => p >= 50)
.map(p => p * 2)
.reduce((sum, p) => sum + p, 0);

// ### Q6. Bank Transactions – Final Balance
// You are given a list of transactions.
// **Tasks:**
// 1. Keep only credit transactions (positive values)
// 2. Add 2% interest to each credit
// 3. Calculate final credited amount

const transactions2 = [1000, -500, 2000, -300, 1500];

// Ans: 
const creditedAmount = transactions2
.filter(amount => amount > 0)
.map(amount => amount * 1.02)
.reduce((total, amount) => total + amount, 0);


// ### Q7. Game App – Final Score
// You are given scores from multiple rounds.
// **Tasks:**
// 1. Keep scores greater than 50
// 2. Add bonus points (+10)
// 3. Calculate final score

const scores5 = [30, 60, 90, 45, 80];

// Ans: 
const finalScore = scores
.filter(score => score > 50)
.map(score => score + 10)
.reduce((sum, score) => sum + score, 0);


// ### Q8. E-commerce – Total Taxed Amount
// You are given item prices.
// **Tasks:**
// 1. Keep items priced above 1000
// 2. Add 18% tax
// 3. Calculate final payable amount

const prices5 = [500, 1200, 3000, 800, 1500];

// Ans:
 const finalAmount = prices5
.filter(price => price > 1000)
.map(price => price * 1.18)
.reduce((sum, price) => sum + price, 0);

// ### Q9. Attendance System – Reward Points
// You are given daily attendance hours.
// **Tasks:**
// 1. Keep days with attendance >= 8 hours
// 2. Convert hours into points (1 hour = 10 points)
// 3. Find total points earned

const hours = [6, 8, 9, 7, 10];

// ans:
const totalPoints1 = hours
.filter(hour => hour >= 8)
.map(hour => hour * 10)
.reduce((sum, point) => sum + point, 0);


// ### Q10. Interview Brain Teaser ⭐
// You are given a list of numbers.
// **Tasks:**
// 1. Keep only even numbers
// 2. Square each number
// 3. Find the sum of squares

const numbers5 = [1, 2, 3, 4, 5, 6];

// ans: 
const sumOfSquares = numbers5
.filter(num => num % 2 === 0)
.map(num => num * num)
.reduce((sum, num) => sum + num, 0);

//find 
// find tyare j use karvu ke jyare array mathi ek value find karvi hoy based on condition
//find() return kare chhe array no element --> callback no return value nahi
//never return what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Leptop","Mobile","Tablet","Desktop","Smart Watch"];
let find_product = product.find ((item) => {
  // console.log("can't find product"); // not Working Why??
  if (item === "Mobile"){
    return true;
  }else if(item === "Tablet"){
    return true;
  }else {
    return false;
  }
}); 

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. product ma thi specifice product find karvo hoy based on name

// find vs filter
//Real-Life Scenario: Shopping Mall Security
//Ypur are a security guard at a shopping mall 
//Chack the list of visitors
let people = ["Johan","Sara","Mike","anna","David","Sara"];
// find --> You are looking for the first person named "sara" in the List an Stop Searching(Pehli var j male, bas e j and Agal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

// filter --> you want to find all visitors named "Sara" in the List (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log(AllSara);

// some
//check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can"t return you value its return true or false, find() return value of array
// give ans in true and false
let marks3 = [10, 20, 35, 90];
let any = marks3.some((val) => {
  if (val > 85) return true;
  //if (val < 85) return "need improvement";
});
console.log(any)
// use case -- ckeck if some product are out of stock in your cart 

//every
// check kare chhe ke array ma badha j items condition satisfy kare chhe ke nahi
// true -- badha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 90, 45];
let num = def.every(function(val){
    return val < 40;
})
 // use case --> check all student is pass or not

 //some(), find(), filter(), every()
 let products = ["Tablet","Mobile","Leptop","Mobile"]
 //method --> condition --> output
 //.some() --> item === "Mobile" --> true
 //.find() --> item === "Mobile" --> "Mobile"
 //.filter() --> item ==="Mobile" --> ["Mobile","Mobile"]
 //.every() --> item === "Mobile" --> false

 let find_product1 = products.every ((item) => {
  // console.log("can't find product"); // not Working Why??
  if (item === "Mobile"){
    return true;
  }
}); 

// Destructuring operator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k]= arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4[0];
// let k = arr4[2];
let [ j, , k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let user_data = ["test","test@gmail.com","Male","Surat"]
let [name2,email,gender,city] = user_data
console.log("name:", name2)
console.log("Email:" ,email)
console.log("Gender:",gender)
console.log("City:", city)

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not copy valuse(when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and object
let temp_arr = [1,2,3];
let temp_arr2 = [4,5,6];
let mix_arr = [...temp_arr, ...temp_arr2];




 
