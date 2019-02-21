"use strict";

// カード情報
const cards = [];
const marks = ['club','diamond','heart','spade'];

// プレイ中に使用する変数
let flipCount = 0;
let firstCard = null;
let secondCard = null;

// スタートで開始
const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', () => {
  gameStart.classList.add('disappearStart');
  createCards();
});

// 引数は必要なし
function createCards() {
  for (let j = 0; j < 4; j++) {
    const mark = marks[j];

    for(let i = 1; i <= 10; i++) {
      let card = {};
      card.num = i;
      card.mark = mark;
      card.open = false;
      cards.push(card);
    };
  }
  // shuffleCards に生成したカードデータを渡す
  shuffleCards(); 
}

// createCards からカードデータ [card] を受け取る
function shuffleCards() {
  for(let i = cards.length - 1; i > 0; i--){
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = cards[i];
    cards[i] = cards[r];
    cards[r] = tmp;
  }
  // ゴール：シャッフルしたカードデータを作る
  console.log(cards);
  drawCards();
}

// 一桁のとき頭に0付ける（画像の名前に合わせるため）
function zeroPadding(num, length) {
  return ('0' + num).slice(-length);
}

// カードデータをもとにDOM操作でカードを表示させる
function drawCards() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    // カードのクラスcardは裏画面うさぎ
    card.classList.toggle('card');
    // クリックしたら裏面が出る
    card.addEventListener('click', ()=> {
      let cardNum = zeroPadding(cards[i].num, 2);
      card.style.backgroundImage= `url('img/card_${cards[i].mark}_${cardNum}.png')`;
      console.log(card);
    // card.classList.toggle('clickedCard');
    });
    document.body.appendChild(card);
  }
}

// for(let i = 0; i < 10; i++) {

//   let count = 0;
//   // クリックしたらカードが裏返しになる
//   card.addEventListener('click', e => {
//     flipCard(e);
//     count++;
//     if (count > 3) {
//       return;
//       // card.classList.add('card');
//     } else {
//       const marks = ['club','diamond','heart','spade'];
//       // トランプマークをランダムに選択
//       let n = Math.floor(Math.random() * marks.length);
//       card.classList.add('clickedCard');
//       // 数字画像が1〜10までしかないのでその中からランダムに数字を選択
//       let num = Math.floor(Math.random() * 10+1);
//       // 一桁のとき頭に0付ける（画像の名前に合わせるため）
//       function zeroPadding(num, length) {
//         return ('0' + num).slice(-length);
//       }
//       let cardNum = zeroPadding(num, 2);
//       const id = e.srcElement.id;
//       card.id = id;
//       card.style.backgroundImage= `url('img/card_${marks[n]}_${cardNum}.png')`;
//     }

//   });
// };

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