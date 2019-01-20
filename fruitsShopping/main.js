"use strict";

// const fruits = ["りんご", "バナナ", "みかん"];

// fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });
// console.log(document.getElementById("example"));


//正しい回答　ポイントはgetElementById
let fruits = document.getElementById("fruits");
console.log(fruits)
fruits.addEventListener('click', function(e) {
  console.log(e);
  e.srcElement.textContent = "購入済み";
});

let apple = document.getElementById("apple");
let banana = document.getElementById("banana");
let orange = document.getElementById("orange");

 console.log(apple); 


// &&banana.textContent = "購入済み"&&orange.textContent = "購入済み"


