"use strict";
// 2枚だけカードがめくれるように変数設定
let flipCount = 0;
let firstCard = null;
let secondCard = null;

// スタートで開始
const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', () => {
  gameStart.classList.add('disappearStart');

  for(let i = 0; i < 10; i++) {
    const marks = ['club','diamond','heart','spade'];
    let n = Math.floor(Math.random() * marks.length);
    let card = document.createElement('div');
    const id = i;
    card.id = id;
    // カードのクラスcardは裏画面うさぎ
    card.classList.toggle('card');
    document.body.appendChild(card);

    // 下記上手くいかない・・・・・・・・・・・・・・・・！！！！！！！！
    // for(let j=0; j<3; j++){
      let count = 0;
      // クリックしたらカードが裏返しになる
      card.addEventListener('click', e => {
        flipCard(e);
        count++;
        if (count > 3) {
          return;
          // card.classList.add('card');
        } else {
          const marks = ['club','diamond','heart','spade'];
          // トランプマークをランダムに選択
          let n = Math.floor(Math.random() * marks.length);
          card.classList.add('clickedCard');
          // 数字画像が1〜10までしかないのでその中からランダムに数字を選択
          let num = Math.floor(Math.random() * 10+1);
          // 一桁のとき頭に0付ける（画像の名前に合わせるため）
          function zeroPadding(num, length) {
            return ('0' + num).slice(-length);
          }
          let cardNum = zeroPadding(num, 2);
          const id = e.srcElement.id;
          card.id = id;
          card.style.backgroundImage= `url('img/card_${marks[n]}_${cardNum}.png')`;
        }
      // card.addEventListener('click', function(){
      //   flipCard(this);
      // })  
    // }
    // // クリックしたらカードが裏返しになる
    // card.addEventListener('click', (e) =>{
    //   console.log(e)
    //   // トランプマークの配列
    //   const marks = ['club','diamond','heart','spade'];
    //   // トランプマークをランダムに選択
    //   let n = Math.floor(Math.random()*marks.length);
    //   card.classList.add('clickedCard');
    //   // 数字画像が1〜10までしかないのでその中からランダムに数字を選択
    //   let num = Math.floor(Math.random() * 10+1);
    //   // 一桁のとき頭に0付ける（画像の名前に合わせるため）
    //   function zeroPadding(num, length) {
    //     return ('0' + num).slice(-length);
    //   }
    //   let cardNum = zeroPadding(num,2);
    //   const id = e.srcElement.id;
    //   card.id = id;
    //   card.style.backgroundImage= `url('img/card_${marks[n]}_${cardNum}.png')`;
    // })
      });
  };
});

function flipCard(card) {
  console.log('card', card);
  if (firstCard !== null && secondCard !== null) {
    return;
  }
  card.className = 'cardOpen';
  flipCount++;
  if(flipCount % 2 === 1) {
    firstCard = card.srcElement.id;
  } else {
    secondCard = card.srcElement.id;
  }
}


// トランプをクリックするたびマーク・数字が変わるように
// 同じマークかつ数字が出ないように
// 同じ数字が揃ったら消えるorカウントする