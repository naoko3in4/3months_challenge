"use strict";


// カード情報
const cards = [];
const marks = ['club','diamond','heart','spade'];

// プレイ中に使用する変数
let flipCount = 0;
let firstCard;
let secondCard;

const field = document.getElementById("field");

// スタートで開始
const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', () => {
  gameStart.classList.add('disappearStart');
  createCards();
});

function resetFlippedCards() {
  firstCard = {};
  secondCard = {};
  console.log("リセット");
}

// 引数は必要なし
function createCards() {
  resetFlippedCards();

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
  // 生成したカードデータを shuffleCards関数 に渡す
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
  // シャッフルしたカードデータをDOMに書き出すため drawCards関数 に渡す
  drawCards();
}

// 一桁のとき頭に0付ける（画像の名前に合わせるため）
function zeroPadding(num, length) {
  return ('0' + num).slice(-length);
}

// カードデータをもとにDOM操作でカードを表示させる（初期化）
function drawCards() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    // カードのクラスcardは裏画面うさぎ
    card.classList.toggle('card');
    card.id = i;
    field.appendChild(card);
  }
}

// DOMでクリックした場所の情報を取得してflipcardに渡す
field.addEventListener('click', (e)=> {
  const cardId = e.srcElement.id;
  flipCard(cardId);
});

// クリックされたカードを開けて、DOMに描く
function flipCard(cardIndex) {
  const card = cards[cardIndex];

  // 配列cards内でindex番号"cardNum番目"のopen情報をtrueに変更
  card.open = true;

  // HTML内でidが"cardIndex"のものを取得
  const cardDom = document.getElementById(cardIndex);

  // 画像名に合わせるために番号を取得
  const formattedNum = zeroPadding(card.num, 2);
  
  // 先程取得した"card"のstyleを変更する
  cardDom.style.backgroundImage= `url('img/card_${card.mark}_${formattedNum}.png')`;

  checkFlipLimit(cardIndex);
}

// １枚めのカードと２枚めのカードを照合
// 同じ番号の場合、fistCard, secondCardを初期化するのみ。
// 違う番号の場合、１秒後に裏に戻す。その間、他のカードはクリックできない。
// firstCard, secondCardを初期化。
function checkFlipLimit(cardIndex) {
  const card = cards[cardIndex];

  // めくった回数をカウント(0 〜 2まで。2になったら0に戻す)
  flipCount++;
  // めくった回数によって1枚目、2枚目のカード番号を保持
  if (flipCount === 1) {
    firstCard.num = card.num;
    firstCard.index = cardIndex;
  }

  if (flipCount === 2) {
    secondCard.num = card.num;
    secondCard.index = cardIndex;

    // 1枚目と2枚目が同じ番号の場合、fistCard, secondCardを初期化するのみ。
    // カードは見えたまま
    if (firstCard.num === secondCard.num) {
      resetFlippedCards();
    }
    // 違う番号の場合、１秒後に裏に戻す。
    // その間、他のカードはクリックできない。
    if (firstCard.num !== secondCard.num) {

      // const cardDom = 
      resetFlippedCards();
    }

    flipCount = 0;
  }

}

// トランプをクリックするたびマーク・数字が変わるように
// 同じマークかつ数字が出ないように
// 同じ数字が揃ったら消えるorカウントする