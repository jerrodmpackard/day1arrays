let myString = "Hello";
let myInt = 50;
let myBool = true;

let myIntArray = [1, 2, 3, 4, 5];
let myStrArray = [
    "Pizza",
    "Tacos",
    "Chinese",
    "Chocolate Chip Croissant",
    "Bagels",
];

let myMixedArray = ["Tacos", 3, "HotDog", 6.13, true];

console.log(myIntArray);

myIntArray[0] = 98;
myIntArray[2] = false;
myIntArray[4] = "Arrays are cool";

console.log(myIntArray);

let twoDArray = [
    ["Kenneth", "Martinez", 3],
    ["Jacob", "Jacoozi", 5],
    ["Jessie", "Lamzon", 5],
    ["Isaiah", "Ferguson", 5],
];

console.log(twoDArray);
console.log(twoDArray[0]);
console.log(twoDArray[0][0]);
console.log(twoDArray[1][1]);

const items = [[[]]];

items[0][0][0] = 5;

console.log(items);

let injectHere = document.getElementById("injectHere");
let btnShow = document.getElementById("btnShow");

btnShow.addEventListener("click", function (e) {
    injectHere.innerText = twoDArray[2][0];
});