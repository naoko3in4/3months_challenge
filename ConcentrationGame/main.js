// "use strict";
// トランプマークの種類と
const marks = ['club','diamond','heart','spade'];

let n = Math.floor(Math.random()*marks.length +1);
console.log(marks[n]);


// スタートで開始
const gameSart = document.getElementById('gameStart');
gameSart.addEventListener('click', () => {
  gameSart.classList.add('disappearStart');
  for(let i=0; i < 20; i++){
    let card = document.createElement('div');
    const id = i;
    card.id = id;
    card.classList.toggle('card');
    document.body.appendChild(card);

    // クリックしたらカードが裏返しになる
    card.addEventListener('click', (e) =>{
      console.log(e)

      card.classList.add('clickedCard');
      let num = Math.floor(Math.random() * 10+1);
      // 一桁のとき頭に0付ける
      function zeroPadding(num, length) {
        return ('0' + num).slice(-length);
      }
      let cardNum = zeroPadding(num,2);
      const id = e.srcElement.id;
      card.id = id;
      card.style.backgroundImage= `url('img/card_${marks[n]}_${cardNum}.png')`;
    })
  }


});