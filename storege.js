// local Storage API: setItem, getItem,  removeItem, clear
// localstorege --> save that data into browser's storage, after closer browser data wansn't deleted
// (browser nu eavu storege ke jema data store thai chhe and browser band tahai jai to pan data delete tahto nathi)
//~ 5 MB storege

//setItem
//localStorage.setItem("key", value)
localStorage.setItem("user", "Test_User");

//getItem
// localStorage.getItem("Key_name")
console.log(localStorage.getItem("user"));

//removeItem
//localStorege.removeItem("key_name")
 localStorage.removeItem("user");

 //updateItem
 //localStorege.setItem("key_name","new_value")
 localStorage.setItem("user", "Demo_User");

 // sessionStorage --> save that data into browser's storage, after closer browser data wansn't deleted
// (aa storge data ne temporarily time mate save kari ne rakhe chee, jyare pan tab close karsho tyare teni sathe data delete thai jai chhe)
//~ 5 MB storege

//setItem
sessionStorage.setItem("email", "user@test.com");

//getItem
console.log(sessionStorage.getItem("email"));

//removeItem
//sessionStorage.removeItem("email");

//updateItem
//sessionStorage.setItem("key_name","new_value")
sessionStorage.setItem("email","demo@test.com");

//Basic cookies structure (manual key = value;)
//cookie --> store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save kare chhe , cookie no use light data svae karva mate thai chhe)
// when you reload web page data will be automatically send to server
// ~4 KB storage
document.cookie = "email = test@mail.com";

//max age
document.cookie = "email= 10 ; max-age = 60"; // 60 seconds

// date and time
document.cookie = "username=meet; expiress=web, 28 feb 2026 12:00:00 GMT";

// storing/retrieving strings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string

// JSON.stringify
localStorage.setItem( "data",JSON.stringify([{ username: "test", email: "test@mail.com", age: 25 }]),

);

//Json.parse
let data = JSON.parse(localStorage.getItem("data"));
console.log(data);

//dark light mode --> save into local storage
// 
let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btn.textContent = "Dark";
        localStorage.setItem("mode", "light");
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
    }
    else{
        body.classList.add("dark");
        btn.textContent = "Light";
        localStorage.setItem("mode", "dark");
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
    }
});
 








