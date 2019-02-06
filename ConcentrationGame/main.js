"use strict";

const club = [10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const diamond = [10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const heart = [10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const spade = [10, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

let clubTurn = Math.floor(Math.random()*club.length);

// console.log(clubTurn);
// console.log(typeof club[clubTurn]);

let pathList = [
  'img/card_club_01.png',
  'img/card_club_02.png',
  'img/card_club_03.png',
  'img/card_club_04.png',
  'img/card_club_05.png',
  'img/card_club_06.png',
  'img/card_club_07.png',
  'img/card_club_08.png',
  'img/card_club_09.png',
  'img/card_club_10.png',
];

console.log(pathList);

// class Cards {
//   constructor(number, src){
//     this.number = number;
//     this.src = src;
//   }
// }

// let cardImg = new Array();
// for (let i=0; i < pathList.length; i++){
//   console.log(cardImg);

//   let cardImg = new CardImg();
//   cardImg.src = pathList[i];
//   img.push(cardImg);
// }


const gameSart = document.getElementById('gameStart');
gameSart.addEventListener('click', () => {
  gameSart.classList.add('disappearStart');
  for(let i=0; i < 20; i++){
    let card = document.createElement('div');
    card.classList.toggle('card');
    document.body.appendChild(card);
    card.addEventListener('click', () =>{
      card.classList.add('clickedCard');
      card.style.backgroundColor= "yellow";
      // card.style.backgroundImage= "url('img/card_club_02.png')";
      let randomList = Math.floor(Math.random()*pathList.length);
      console.log(randomList);
      // card.style.backgroundImage= 'url(pathList[randomList])';
      card.innerHTMl = pathList[randomList];
    })
  }


});