"use strict";


// カード情報
const cards = [];
const marks = ['club','diamond','heart','spade'];

// プレイ中に使用する変数
let flipCount = 0;
let firstCard = {};
let secondCard = {};

// スタートで開始
const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', () => {
  gameStart.classList.add('disappearStart');
  createCards();
});

// カード生成
function createCards(num) {

  for (let j = 0; j < 4; j++) {
    const mark = marks[j];

    for(let i = 1; i <= 10; i++) {
      let card = {};
      card.num = i;
      card.mark = mark;
      card.open = false;
      card.image = ('img/card_back.png');
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
    const card = cards[i];
    cards[i] = cards[r];
    cards[r] = card;
  }
  // シャッフルしたカードデータをDOMに書き出すため initDraw関数 に渡す
  initDraw();
}

// 一桁のとき頭に0付ける（画像の名前に合わせるため）
function zeroPadding(num, length) {
  return ('0' + num).slice(-length);
}

// カードデータをもとにDOM操作でカードを表示させる（初期化）
function initDraw() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    // 最後にDOMに渡すdivのデータの箱を準備
    // ここに cards[i]に入っているデータを渡していく
    // DOM上（これから描画するカード）がcardDOM
    // const cardDom = document.createElement('div');
    const cardDom = document.getElementById('field');
    // divのidを定義
    cardDom.id = i + 1;

    // cards[i].image のpathの画像を DOMに渡す
    cardDom.style.backgroundImage= `url(${card.image})`;
    cardDom.classList.add("card");
    field.appendChild(cardDom);
  }
}

// DOMでクリックした場所の情報を取得してflipcardに渡す
field.addEventListener('click', (e)=> {
  const cardId = e.srcElement.id;
  flipCard(cardId);
});

// クリックされたカードを開けて、DOMに描く
function flipCard(cardId) {
  const cardIndex = cardId - 1;
  const card = cards[cardIndex];

  // 配列cards内でindex番号"cardNum番目"のopen情報をtrueに変更
  card.open = true;

  // 画像名に合わせるために番号を取得
  const formattedNum = zeroPadding(card.num, 2);
  
  // 先程取得した"card"のstyleを変更する
  card.image = `img/card_${card.mark}_${formattedNum}.png`;

  // console.log('card.image', card.image);
  drawCards(cardIndex);

  checkFlipLimit(cardIndex);
}

function drawCards(cardIndex) {
  const cardId = cardIndex + 1;
  const cardDom = document.getElementById(cardId);
  // cards[cardIndex].image のpathの画像を DOMに渡す
  console.log(cards[cardIndex]);
  cardDom.style.backgroundImage = `url(${cards[cardIndex].image})`;
  console.log(cardDom);
}

// １枚めのカードと２枚めのカードを照合
// 同じ番号の場合、fistCard, secondCardを初期化するのみ。
// 違う番号の場合、１秒後に裏に戻す。その間、他のカードはクリックできない。
// firstCard, secondCardを初期化。
function checkFlipLimit(cardIndex) {
  const card = cards[cardIndex];
  // めくった回数をカウント(0 〜 2まで。2になったら0に戻す)
  flipCount++;
  console.log(flipCount);
  // めくった回数によって1枚目、2枚目のカード番号を保持
  if (flipCount === 1) {
    firstCard.num = card.num;
    console.log(firstCard);
    firstCard.index = cardIndex;
    console.log("firstだよ");
  }

  if (flipCount === 2) {
    secondCard.num = card.num;
    secondCard.index = cardIndex;
    console.log("secondだよ");

    // 1枚目と2枚目が同じ番号の場合、fistCard, secondCardを初期化するのみ。
    // カードは見えたまま
    if (firstCard.num === !secondCard.num) {
      // resetFlippedCards();
      // console.log("正解！");

      
      // return;
    // } else {
      resetFlippedCards(cardIndex);
    }
  }

}

function resetFlippedCards(cardIndex) {
  // 配列cardsの中でのfirstCard.index番目のimageをうさぎにす
  //る
  console.log(cardIndex);
  cards[firstCard.index].image = ('img/card_back.png');
  console.log(cards);
}
  // firstCard, secondCard空にする
  firstCard = {};
  secondCard = {};

  // draw
  // Cards();
  // resetCards(cardIndex);
  resetCards();
// }

  function resetCards(cardIndex){
    const cardId = cardIndex + 1;
    const cardDom = document.getElementById(cardId);
    // cards[cardIndex].image のpathの画像を DOMに渡す
    cardDom.style.backgroundImage = `url("img/card_back.png")`;
  }
