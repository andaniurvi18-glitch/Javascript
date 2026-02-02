<h1>Example of var, let and const</h1>

<h2>1. var</h2>
<p><code>var</code> keyword JavaScript ma old way chhe variable declare karvano.</p>

<ul>
  <li><code>var</code> can be <b>redeclared</b> and <b>reassigned</b></li>
  <li><code>var</code> is <b>function scoped</b></li>
  <li>Block scope follow nathi karto</li>
</ul>

<pre>
var a = "temp";
var _123 = "Hello";
var $123 = "hello";
b = 24; // never recommended (auto global)
</pre>

<h2>2. let</h2>
<p><code>let</code> ES6 ma introduce thayu chhe.</p>

<ul>
  <li><code>let</code> can be <b>reassigned</b> but <b>not redeclared</b></li>
  <li><code>let</code> is <b>block scoped</b></li>
</ul>

<pre>
let temp = "abc";
</pre>

<h2>3. const</h2>
<p><code>const</code> variable ni value change kari sakay nahi.</p>

<ul>
  <li>Must be initialized at declaration time</li>
  <li>Block scoped</li>
</ul>

<pre>
const temp_const = "Hello World!!";
</pre>

<h2>Declaration and Initialization</h2>

<pre>
var d;        // declaration
var d = 12;   // declaration + initialization
d = 24;       // reassigned
d = "hello";  // reassigned again
</pre>

<h2>Scope in JavaScript</h2>
<p>JavaScript ma mainly 3 scope hoy chhe:</p>

<ul>
  <li>Global Scope</li>
  <li>Block Scope</li>
  <li>Function Scope</li>
</ul>

<h3>var Scope Example</h3>

<pre>
var f = 23;
{
  var f = 43;
  console.log(f); // 43
}
console.log(f); // 43
</pre>

<h3>let Scope Example</h3>

<pre>
let e = 23;
{
  let e = 43;
  console.log(e); // 43
}
console.log(e); // 23
</pre>

<h2>Temporal Dead Zone (TDZ)</h2>

<p>
TDZ <code>let</code> ane <code>const</code> par lagu pade chhe, 
<code>var</code> par nahi.
</p>

<pre>
console.log(temp_b);
var temp_b = 24; // undefined (no TDZ)
</pre>

<pre>
// console.log(j);
// let j = 12; // ReferenceError (TDZ)
</pre>

<h2>Hoisting</h2>

<p>
Hoisting ma declaration upar jai chhe pan initialization niche j rahe chhe.
</p>

<ul>
  <li><b>var</b> → hoisted as <code>undefined</code></li>
  <li><b>let</b> → hoisted but TDZ error</li>
  <li><b>const</b> → hoisted but TDZ error</li>
</ul>

<pre>
var temp_d = 12;
</pre>

<div>
<h3>Example 1:</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error:Error </p>
<p>Why:we print console before intilization & use let keyword for declare variable .</p>
</div>
<div>
<h3>Example 2:</h3>
<p>console.log(b);</p>
<p>var b= "username"; </p>
<p>Answer or Error:Answer(undefinded)</p>
<p>Why:When we print console before intilization & use var keyword for declare variable .</p>
</div>

<div>
<h3>Example 3:</h3>
<p>var x = 1 </p>
<p>{
var x = 2
}
</p>
<p>consol.log(x) ;</p>
<p>Answer or Error:Answer(2)</p>
<p>Why:When we use var than in console print block scope.</p>
</div>

<h3>Example 4:</h3>
<p>let a 10; </p>
<p>{
let a = 20;
console.log("Inside:", a);</p>
}<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:Answer(Inside: 20  Outside: 10) </p>
<p>Why:In console first print block scope after print global scope. </p>
</div>

<h3>Example 5:</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; </p>
<p>person = {}; X </p>
<p>Answer or Error:Error </p>
<p>Why:eneter the object than change the value and without the add object otherwise not change the value.</p>
</div>

<h1>JavaScript Data Types</h1>

<p>JavaScript ma mainly <b>2 types na data types</b> hoy chhe:</p>

<ul>
  <li><b>Primitive Data Types</b></li>
  <li><b>Non-Primitive (Reference) Data Types</b></li>
</ul>

<hr>

<h2>1. Primitive Data Types</h2>

<p>
Primitive data types ma <b>actual value copy</b> thay chhe.
Ek variable change karva thi bijo variable effect thato nathi.
</p>

<pre><code>
let a = 12;
let b = a;   // copy value
a = a + 3;
</code></pre>

<h3>Primitive Data Types List</h3>

<ul>
  <li>String</li>
  <li>Number</li>
  <li>Boolean</li>
  <li>Null</li>
  <li>Undefined</li>
  <li>Symbol</li>
  <li>BigInt</li>
</ul>

<h3>String</h3>

<p>String 3 rite lakhay chhe:</p>

<pre><code>
let d = "name";
d = 'username';
d = `firstname`;
</code></pre>

<h3>Number</h3>

<pre><code>
let e = 12;
e = 12.25;
</code></pre>

<h3>Boolean</h3>

<pre><code>
let f = true;
f = false;
</code></pre>

<h3>Null</h3>

<p>Null ma value manually aapvi pade chhe.</p>

<pre><code>
let g = null;
</code></pre>

<h3>Undefined</h3>

<p>Undefined default value hoy chhe, value assign na kari hoy.</p>

<pre><code>
let h;
</code></pre>

<h3>Symbol</h3>

<p>Symbol unique ane immutable value hoy chhe.</p>

<pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// u1 === u2 -> false

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "101";
</code></pre>

<h3>BigInt</h3>

<p>BigInt large numbers handle karva mate use thay chhe.</p>

<pre><code>
let number = 9007199254740991;
number = number + 6;

let num2 = 900719925470991n;
num2 + 3n;
</code></pre>

<hr>

<h2>2. Non-Primitive (Reference) Data Types</h2>

<p>
Non-primitive data types ma <b>reference copy</b> thay chhe.
Ek variable change karva thi bijo variable par pan effect pade chhe.
</p>

<pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // original array pan change thase
</code></pre>

<h3>Non-Primitive Types List</h3>

<ul>
  <li>Array</li>
  <li>Object</li>
  <li>Function</li>
</ul>

<h3>Array</h3>

<pre><code>
let temp_array = ["name", "age", "phone_number"];
</code></pre>

<h3>Object</h3>

<pre><code>
let obj1 = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
</code></pre>

<h3>Function</h3>

<pre><code>
function name(params) {
  // function body
}
</code></pre>

<hr>
<h2>Dynamic Typing in JavaScript</h2>

<p>
JavaScript <b>dynamically typed language</b> chhe.
Etle ek variable alag-alag type ni value hold kari shake chhe.
</p>

<pre><code>
let temp_d = "name";   // string
temp_d = 123;         // number
temp_d = {};          // object
</code></pre>

<p>
Aa reason thi JavaScript flexible chhe, pan large projects mate
<b>TypeScript</b> use karvama aave chhe.
</p>

<pre><code>
// JavaScript --> TypeScript
</code></pre>

<hr>

<h2>typeof Operator</h2>

<p>
Variable no type check karva mate <b>typeof</b> operator use thay chhe.
</p>

<pre><code>
typeof 12;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
</code></pre>

<h3>typeof Quirks (Confusing Cases)</h3>

<pre><code>
typeof NaN;       // "number"
typeof null;      // "object"  (JavaScript bug)
</code></pre>

<h4>Why typeof NaN is "number"?</h4>

<p>
<b>NaN</b> no matlab chhe <i>Not a Number</i>,
pan te ek <b>failed number operation</b> chhe,
etle JavaScript eni type "number" j rakhe chhe.
</p>

<pre><code>
"hello" - 5;   // NaN
</code></pre>

<hr>

<h2>Type Coerction in JavaScript</h2>

<p>
JavaScript automatic type conversion kare chhe,
jene <b>Type Coerction</b> kahe chhe.
</p>

<h3>Examples</h3>

<pre><code>
"5" + 1;   // "51"  (string concatenation)
"5" - 1;   // 4     (string converted to number)
</code></pre>

<hr>

<h2>Comparison Operators</h2>

<h3>Loose Equality (==)</h3>

<p>
Type convert kari ne comparison kare chhe.
</p>

<pre><code>
1 == "1";   // true
</code></pre>

<h3>Strict Equality (===)</h3>

<p>
Value ane type banne same hoy to j true return kare chhe.
</p>

<pre><code>
1 === "1";  // false
</code></pre>

<hr>

<p><b>Conclusion:</b></p>

<ul>
  <li>JavaScript dynamically typed chhe</li>
  <li><code>typeof</code> ma thoda quirks chhe</li>
  <li>Type coercion samajhvu important chhe</li>
  <li><code>===</code> always preferred over <code>==</code></li>
</ul>
===============================================================================================================================
<h1>JavaScript Operators</h1>

<p>This README covers basic JavaScript operators with examples.</p>

<hr>

<h2>Comparison Operators</h2>

<ul>
  <li><strong>==</strong> : Equal to (value only, type is ignored)</li>
  <li><strong>===</strong> : Strict equal (value + type)</li>
  <li><strong>!=</strong> : Not equal (value only)</li>
  <li><strong>!==</strong> : Strict not equal (value or type)</li>
  <li><strong>&gt;</strong> : Greater than</li>
  <li><strong>&lt;</strong> : Less than</li>
  <li><strong>&gt;=</strong> : Greater than or equal to</li>
  <li><strong>&lt;=</strong> : Less than or equal to</li>
</ul>

<pre><code>
5 == "5"        // true
5 == 6          // false

5 === "5"       // false
5 === 5         // true

5 != "5"        // false
5 != 6          // true

5 !== "5"       // true
5 !== 5         // false

10 > 5          // true
5 > 10          // false

5 < 10          // true
10 < 5          // false

10 >= 10        // true
8 >= 10         // false

10 <= 10        // true
12 <= 10        // false
</code></pre>

<hr>

<h2>Assignment Operators</h2>

<ul>
  <li><strong>=</strong> : Value assignment operator</li>
  <li><strong>+=</strong> : Add value to existing value</li>
  <li><strong>-=</strong> : Subtract value from existing value</li>
  <li><strong>*=</strong> : Multiply and assign</li>
  <li><strong>/=</strong> : Divide and assign</li>
  <li><strong>%=</strong> : Gives remainder</li>
</ul>

<pre><code>
let a = 12;
a += 3;

a -= 4;
a *= 2;
a /= 2;
a %= 2;
</code></pre>

<hr>

<h2>Logical Operators</h2>

<ul>
  <li><strong>&&</strong> : AND</li>
  <li><strong>||</strong> : OR</li>
  <li><strong>!</strong> : NOT</li>
</ul>

<pre><code>
true && true     // true
false && true   // false

true || true    // true
false || true   // true
false || false  // false

!true           // false
!false          // true

!!12            // true
</code></pre>

<hr>

<h2>Unary Operators</h2>

<ul>
  <li><strong>+</strong> : Convert string to number</li>
  <li><strong>-</strong> : Negative value</li>
  <li><strong>!</strong> : Logical NOT</li>
  <li><strong>typeof</strong> : Check data type</li>
  <li><strong>++</strong> : Increment</li>
  <li><strong>--</strong> : Decrement</li>
</ul>

<pre><code>
+"5"        // 5
+"Name"     // NaN

-5

!12         // false

typeof "name"   // string

let a = 12;
a++;        // post increment
++a;        // pre increment

let b = 3;
b--;
b++;
</code></pre>

<hr>

0<hr>

<h2>Ternary Operator</h2>

<p>
Ternary operator is a short form of <strong>if-else</strong>.
It works on a condition and returns one of two values.
</p>

<ul>
  <li><strong>Syntax :</strong> condition ? trueExpression : falseExpression</li>
</ul>

<pre><code>
12 > 13 ? console.log("true") : console.log("false");
</code></pre>

<p>
If the condition is <strong>true</strong>, first statement will execute.<br>
If the condition is <strong>false</strong>, second statement will execute.
</p>

<hr>
==================================================================================================================================
<h2>Type Checking in JavaScript</h2>

<h3>typeof Operator</h3>

<ul>
  <li><strong>typeof null</strong> returns <code>object</code> (JavaScript bug)</li>
  <li><strong>typeof []</strong> returns <code>object</code></li>
  <li><strong>typeof NaN</strong> returns <code>number</code></li>
  <li><strong>typeof</strong> is mainly used for <strong>primitive data types</strong></li>
</ul>

<pre><code>
typeof null       // "object"
typeof []         // "object"
typeof NaN        // "number"
typeof "Hello"    // "string"
</code></pre>

<hr>

<h3>instanceof Operator</h3>

<p>
<strong>instanceof</strong> is used to check the type of <strong>reference data types</strong>.
</p>

<ul>
  <li>Checks whether an object belongs to a constructor</li>
  <li>Mainly used for arrays, objects, classes</li>
</ul>

<pre><code>
let a = [];

a instanceof Array   // true
a instanceof Object  // true
</code></pre>

<p>
<strong>Note:</strong><br>
Use <code>typeof</code> for <strong>primitive data types</strong><br>
Use <code>instanceof</code> for <strong>reference data types</strong>
</p>

<div>
  <h3>Example 1</h3>
  <p>let x = 10;</p>
  <p>let y = 20;</p>
  <p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
    }else{
    console.log("One or both are not greater than 5");
    }</p>
  <p>Answer: Both are greater than 5</p>
  <p>Why: x and y both are greater than 5 and && operator needs both conditions true.</p>
</div>

<div>
  <h3>Example 2</h3>
  <p>let isAdmin = true;</p>
  <p>let isLoggedIn = false;</p>
  <p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
    }else{
    console.log("Acess Denied");
    }</p>
  <p>Answer: Access granted</p>
  <p>Why: OR (||) operator executes if any one condition is true.</p>
</div>

<div>
  <h3>Example 3</h3>
  <p>let temp = 35;</p>
  <p>if(!(temp > 30)){
    console.log("Hot day");
    }else{
    console.log("Pleasant day");
    }</p>
  <p>Answer: Pleasant day</p>
  <p>Why: temp > 30 is true, NOT operator makes it false so else runs.</p>
</div>

<div>
  <h3>Example 4</h3>
  <p>let a = 0;</p>
  <p>if(a){
    console.log("Truthy value");
    }else{
    console.log("Falsy value");
    }</p>
  <p>Answer: Falsy value</p>
  <p>Why: 0 is a falsy value in JavaScript.</p>
</div>

<div>
  <h3>Example 5</h3>
  <p>let score = 78;</p>
  <p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
  <p>console.log("Grade:", grade);</p>
  <p>Answer: Grade C</p>
  <p>Why: Score is greater than or equal to 70.</p>
</div>

<div>
  <h3>Example 6</h3>
  <p>let points = 120;</p>
  <p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
  <p>console.log("Status:", status);</p>
  <p>Answer: Status Gold</p>
  <p>Why: Points are greater than or equal to 100.</p>
</div>

<div>
  <h3>Example 7</h3>
  <p>let loggedIn = true;</p>
  <p>let hasToken = false;</p>
  <p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
  <p>console.log("access:", access);</p>
  <p>Answer: Deny</p>
  <p>Why: AND (&&) operator requires both conditions true.</p>
</div>

<div>
  <h3>Example 8</h3>
  <p>let a = 5;</p>
  <p>a++</p>
  <p>console.log(a);</p>
  <p>Answer: 6</p>
  <p>Why: Post-increment increases value by 1.</p>
</div>

<div>
  <h3>Example 9</h3>
  <h1>Example 9:</h1>
  <p>let a = 8;</p>
  <p>++a</p>
  <p>console.log(a);</p>
  <p>Answer: 9</p>
  <p>Why: Pre-increment increases value before execution.</p>
</div>

<div>
  <h3>Example 10</h3>
  <p>let b = 4;</p>
  <p>let c = b++</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 4</p>
  <p>Why: Post-increment assigns old value first.</p>
</div>

<div>
  <h3>Example 11</h3>
  <p>let b = 4;</p>
  <p>let c = ++b</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 5</p>
  <p>Why: Pre-increment happens before assignment.</p>
</div>

<div>
  <h3>Example 12</h3>
  <p>let m = 10;</p>
  <p>console.log(m--)</p>
  <p>console.log(m);</p>
  <p>Answer: 10 then 9</p>
  <p>Why: Post-decrement prints value first then decreases.</p>
</div>

<div>
  <h3>Example 13</h3>
  <p>let n = 5;</p>
  <p>let result = n++ + ++n;</p>
  <p>console.log(result);</p>
  <p>Answer: 12</p>
  <p>Why: 5 + 7 = 12.</p>
</div>

<div>
  <h3>Example 14</h3>
  <p>let likes = 100;</p>
  <p>function likePost(){
    result ++likes;
    }</p>
  <p>console.log(likePost());</p>
  <p>console.log(likes);</p>
  <p>Answer: Error</p>
  <p>Why: Invalid syntax and undefined variable.</p>
</div>

<div>
  <h3>Example 15</h3>
  <p>let count = 5;</p>
  <p>if(count-- === 5){
    console.log("Matched");
    }else{
    console.log("Not Matched");
    }</p>
  <p></p>
  <p>Answer: Matched</p>
  <p>Why: Comparison happens before decrement.</p>
</div>

   =========================================================================================================

   # JavaScript Control Flow Statements 

<p>
This README explains <b>Control Flow Statements in JavaScript</b> using examples like
<b>if, if-else, else-if, switch case, early return</b> and a small game example.
</p>

<hr>

<h2>1. If Statement</h2>

<p>
The <b>if</b> statement runs the code only when the condition is <b>true</b>.
In JavaScript, numbers other than <b>0</b> are considered <b>truthy</b>.
</p>

<pre>
if (1213) {
    console.log(true);
}
</pre>

<p>
This will run because <b>1213</b> is a truthy value.
</p>

<pre>
if (15 < 13) {
    console.log(true);
}
</pre>

<p>
This will NOT run because the condition is <b>false</b>.
</p>

<hr>

<h2>2. If-Else Statement</h2>

<p>
The <b>if-else</b> statement runs one block when the condition is true
and another block when it is false.
</p>

<pre>
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}
</pre>

<hr>

<h2>3. Logical NOT (!) Operator</h2>

<p>
The <b>!</b> operator converts a value into boolean and reverses it.
</p>

<pre>
if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
</pre>

<p>
12 is truthy, so <b>!12</b> becomes false.
</p>

<hr>

<h2>4. If - Else If - Else</h2>

<p>
Used when multiple conditions need to be checked.
</p>

<pre>
let loggedin = true;
let admin = true;

if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</pre>

<hr>

<h2>5. Switch Case Statement</h2>

<p>
<b>switch</b> is used when we want to compare one value with multiple cases.
</p>

<pre>
switch ('tuesday') {
    case 'Monday':
        console.log("First day");
        break;
    case 'tuesday':
        console.log("second day");
        break;
    default:
        console.log("normal day");
}
</pre>

<p>
<b>Note:</b> Switch case is <b>case-sensitive</b>.
</p>

<hr>

<h2>6. Early Return Pattern</h2>

<p>
Early return makes the function clean and readable by returning
the result as soon as the condition matches.
</p>

<pre>
function score2(value) {
    if (value < 60) return "Value is less than 60";
    else if (value < 70) return "Value is less than 70";
    else if (value < 80) return "Value is less than 80";
    else if (value < 90) return "Value is less than 90";
    else return "Value is more than 90";
}
</pre>

<hr>

<h2>7. Rock Paper Scissors Game</h2>

<p>
This function checks user and computer choices and returns the winner.
</p>

<pre>
function rps2(user, computer) {
    if (user === computer) return "It's a tie!";
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}
</pre>

<hr>
==================================================================================================================================

<h1>JavaScript Loops – Notes</h1>

<p>
Aa README file ma JavaScript na <b>loops</b> samjhavya chhe.
Loops no use repeating code blocks mate thay chhe.
</p>

<hr>

<h2>Why use Loops?</h2>
<p>
Jyaare ek j code ne vaar-vaar chalavvo hoy, tyaare loops no use thay chhe.
Example: 1 thi 10 sudhi numbers print karva.
</p>

<hr>

<h2>For Loop</h2>
<p>
<b>For loop</b> tyaare use thay chhe jyaare tame pehla thi j jano cho
ke loop ketli vaar chalavvo chhe.
</p>

<p><b>Structure:</b></p>
<p>
Start → End → Change
</p>

<p><b>Example 1: 1 thi 10 sudhi print</b></p>
<pre>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
</pre>

<p><b>Example 2: 20 thi 10 sudhi reverse</b></p>
<pre>
for (let i = 20; i >= 10; i--) {
  console.log(i);
}
</pre>

<hr>

<h2>While Loop</h2>
<p>
<b>While loop</b> tyaare use thay chhe jyaare repeat karvanu che
pan ketli vaar chalavvu chhe e clear na hoy.
</p>

<p><b>Structure:</b></p>
<p>
Start → Condition → Code → Change
</p>

<p><b>Example 1: 10 thi 20</b></p>
<pre>
let k = 10;
while (k <= 20) {
  console.log(k);
  k++;
}
</pre>

<p><b>Example 2: Reverse loop</b></p>
<pre>
let ao = 6;
while (ao > 1) {
  console.log(ao);
  ao--;
}
</pre>

<p><b>Example 3: Hello 20 times</b></p>
<pre>
let d = "Hello";
let i = 0;
while (i < 20) {
  console.log(d);
  i++;
}
</pre>

<p><b>Example 4: 20 thi 25</b></p>
<pre>
let d = 20;
while (d >= 20 && d <= 25) {
  console.log(d);
  d++;
}
</pre>

<p><b>Example 5: 50 thi 60</b></p>
<pre>
let q = 50;
while (q <= 60) {
  console.log(q);
  q++;
}
</pre>

<hr>

<h2>Do While Loop</h2>
<p>
<b>Do while loop</b> ek vaar to condition check karya vagar
code execute kare j chhe.
</p>

<p><b>Structure:</b></p>
<p>
Start → Code → Change → Condition
</p>

<p><b>Example 1: 10 thi 20</b></p>
<pre>
let g = 10;
do {
  console.log("do while:", g);
  g++;
} while (g <= 20);
</pre>

<p><b>Example 2: 10 thi 1</b></p>
<pre>
let h = 10;
do {
  console.log("do while:", h);
  h--;
} while (h >= 1);
</pre>

<hr>

=========================================================================================

# JavaScript Loop Examples (Break & Continue)

<div>
  <h3>Example 1:</h3>
  <p>Print number from 1 to 10 using a for loop.</p>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> for loop 1 thi 10 sudhi sacho chale chhe, koi error nathi.</p>
</div>

<div>
  <h3>Example 2:</h3>
  <p>Print number from 10 to 1 using while loop.</p>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> while loop condition sachi hoy to number reverse ma print thashe.</p>
</div>

<div>
  <h3>Example 3:</h3>
  <p>Print even numbers from 1 to 20 using for loop.</p>
  <pre>
for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> i % 2 === 0 thi even numbers sacha check thay chhe.</p>
</div>

<div>
  <h3>Example 4:</h3>
  <p>Print odd numbers from 1 to 15 using while loop.</p>
  <pre>
let i = 1;
while(i <= 15){
  if(i % 2 !== 0){
    console.log(i);
  }
  i++;
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> i % 2 !== 0 odd number check kare chhe, loop sacho chhe.</p>
</div>

<div>
  <h3>Example 5:</h3>
  <p>Print the multiplication table of 5.</p>
  <pre>
for(let i = 1; i <= 10; i++){
  console.log(`5 x ${i} = ${5 * i}`);
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> for loop 1 thi 10 sudhi chale chhe ane 5*i sacho calculation kare chhe.</p>
</div>

<div>
  <h3>Example 6:</h3>
  <p>Find the sum of numbers from 1 to 100 using a loop.</p>
  <pre>
let sum = 0;
for(let i = 1; i <= 100; i++){
  sum = sum + i;
}
console.log(sum);
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> sum variable loop ni andar properly update thay chhe.</p>
</div>

<div>
  <h3>Example 7:</h3>
  <p>Print all numbers between 1 to 50 that are divisible by 3.</p>
  <pre>
for(let i = 1; i <= 50; i++){
  if(i % 3 === 0){
    console.log(i);
  }
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> i % 3 === 0 condition thi divisible by 3 numbers print thay chhe.</p>
</div>

<div>
  <h3>Example 8:</h3>
  <p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
  <pre>
let num = prompt("give a number");
for(let i = 1; i <= num; i++){
  if(i % 2 === 0){
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> for loop ma spelling mistake hati (numl), correct variable num chhe.</p>
</div>

<div>
  <h3>Example 9:</h3>
  <p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
  <pre>
let count = 0;
for(let i = 1; i <= 100; i++){
  if(i % 3 === 0 || i % 5 === 0){
    count++;
  }
}
console.log(count);
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> aa code count kare chhe, sirf print nathi karto.</p>
</div>

<div>
  <h3>Example 10 (Break):</h3>
  <p>Stop at first multiple of 7.</p>
  <pre>
for(let i = 1; i <= 100; i++){
  console.log(i);
  if(i % 7 === 0){
    break;
  }
}
  </pre>
    <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> break statement pehli vaar 7 no multiple male tyare loop stop kare chhe.</p>
</div>

<div>
  <h3>Example 11 (Continue):</h3>
  <p>Skip multiples of 3 and print all other numbers.</p>
  <pre>
for(let i = 1; i <= 20; i++){
  if(i % 3 === 0){
    continue;
  }
  console.log(i);
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> continue multiples of 3 skip kare chhe ane baki numbers print thay chhe.</p>
</div>

<div>
  <h3>Example 12 (Break + Continue):</h3>
  <p>Print first 5 odd numbers and stop the loop.</p>
  <pre>
let count = 0;
for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    continue;
  }
  console.log(i);
  count++;
  if(count === 5){
    break;
  }
}
  </pre>
  <p><b>Answer:</b> Output aavshe</p>
  <p><b>Why:</b> 5 odd numbers complete thata j loop break thai jay chhe.</p>
</div>
======================================================================================================


# JavaScript Functions – Complete Guide

<div>
  <h4>What is a Function?</h4>
  <p><b>What:</b> Function is a block of code that performs a specific task.</p>
  <p><b>Why:</b> To avoid code repetition and make code modular & reusable.</p>
  <p><b>How:</b> function keyword, name, parameters, body, return statement.</p>
</div>

<div>
  <h4>Types of Functions</h4>

  <p><b>Function Declaration</b></p>
  <pre>
function abc(){}
  </pre>

  <p><b>Function Expression</b></p>
  <pre>
let fnc = function(){}
  </pre>

  <p><b>Arrow Function (Fat Arrow)</b></p>
  <pre>
let fnc1 = () => {}
  </pre>
</div>

<div>
  <h4>Basic Function Example</h4>
  <pre>
function temp_cart(){
  console.log("adding product");
}

temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");
  </pre>
</div>

<div>
  <h4>Parameters vs Arguments</h4>
  <p><b>Parameters:</b> Function definition ma () andar lakheli values.</p>
  <p><b>Arguments:</b> Function call karta vakhte pass kareli values.</p>

  <pre>
function cart(product){ // parameter
  console.log(`Adding ${product}`);
}

cart("Laptop"); // argument
cart("Mac Book");
cart("525 ultra");
  </pre>
</div>

<div>
  <h4>Multiple Parameters</h4>
  <pre>
function cart2(name, rollno){
  console.log(`Adding ${name} at ${rollno}`);
}

cart2("axita",101);
cart2("riddhi",102);
cart2("mansi",103);
  </pre>
</div>

<div>
  <h4>Arrow Function Conversion</h4>
  <pre>
let cart3 = (name, rollno) => {
  console.log(`arrow function ${name} at ${rollno}`);
};
cart3("tisha", 104);

let cart4 = (name, rollno) => {
  console.log(`function Expression ${name} at ${rollno}`);
};
cart3("lxita", 105);
  </pre>
</div>

<div>
  <h4>Default Parameters</h4>
  <pre>
function abcd(b = 10, price = 0){
  console.log(price, b)
}
abcd(15);
  </pre>
  <p><b>Use Case:</b> Fees, platform charges, optional values.</p>
</div>

<div>
  <h4>Rest Parameters</h4>
  <pre>
function def1(...number){
  console.log(number);
}
def1(1,2,3,4,5,6,7,8,9,10);
  </pre>
</div>

<div>
  <h4>Early Return</h4>
  <pre>
function score1(value) {
  if (value > 90) return "Value is more than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "value is less than 60";
}
let result = score1(80);
console.log(result);
  </pre>
</div>

<div>
  <h4>First Class Functions</h4>

  <p><b>1. Function stored in variable</b></p>
  <pre>
const cart5 = function(name, rollno){
  console.log(`Adding ${name} at ${rollno}`);
};
cart5("function expression - S25 ultra", 69000);
  </pre>

  <p><b>2. Function passed as argument</b></p>
  <pre>
function temp_b(fnc) {
  fnc();
}
temp_b(function fnc2() {
  console.log("First Class Function");
});
  </pre>

  <p><b>3. Function returned from another function</b></p>
  <pre>
function abcd() {
  return function () {
    console.log("function return other function");
  };
}
abcd()(); // call a function that returns another function
  </pre>
</div>

<div>
  <h4>Higher Order Functions (HOF)</h4>
  <p>Function that takes another function as argument or returns a function as result.</p>

  <pre>
// HOF example: passing function as argument
function hello(andani){
  andani();
}
hello(function a(){
  console.log("hello i am Akshita");
});

// HOF example: returning a function
function abcd(){
  return function(){
    console.log("Higher order function Example");
  };
}
abcd()();
  </pre>
</div>

