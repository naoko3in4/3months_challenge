const cards = [];
const pairs = 13;

let flipCount = 0;
let firstCard = null;
let secondCard = null;

//init
function init() {
  let card;
  for (let i = 1; i <= pairs; i++) {
    // creatCards呼び出す→cards[]配列に足していく
    cards.push(createCards(i));
    cards.push(createCards(i));
  }
  // Domに配列の中からランダムに1つ取り出したものをappendする
  while (cards.length) {
    card = cards.splice(Math.floor(Math.random()*cards.length), 1)[0];
    document.getElementById('stage').appendChild(card);
  }
}

// カードを作る
function createCards(num) {
  // カードを作る上で必要なもの
  let container;
  let card;
  let inner;

  // ①innerを作る
  inner = '<div class="card-front">'+ num +'</div><div class="card-back">CARD</div>';
  // ②cardを作る
  card = document.createElement('div');
  card.innerHTML = inner;
  card.className = 'card';
  //<< ☆ 別functionへ>> cardクリックしたら、flipCard()関数に飛ぶようにする・・・card要素を渡す
  card.addEventListener('click', function() {
    flipCard(card);
  });

  // ③containerを作る
  container = document.createElement('div')
  container.className = 'container';
  container.appendChild(card);
  return container; 
  
}
// ☆ flipCard()関数・・2枚のみ返せるように
function flipCard(card) {
  if (firstCard !== null && secondCard !== null) {
    return;
  }
  // cardにopenクラスが付いてたらreturnする(openで開いたカードはそのままにしておく（再度クリックできないように）)
  if (card.className.indexOf('open') !== -1) {
    return;
  }
  flipCount++;
  card.className = 'card open';

  if (flipCount % 2 === 1) {
    firstCard = card;
  } else {
    secondCard = card;
  }
  // << ※ 別functionへ>>secondCardをクリックしたら正誤判定 check() へ
  secondCard.addEventListener('transitionend', check);
}


// ※ check()関数・・・正誤判定 
function check () {
  if (firstCard.textContent !== secondCard.textContent) {
    firstCard.className = "card";
    secondCard.className = "card";
  }
  // 正誤判定が済んだら、check()を外す
  // flipCard() が動くようにfirstCard, secondCard をnull に戻す
  secondCard.removeEventListener('transitionend', check);
  firstCard = null;
  secondCard = null;
}



init();
