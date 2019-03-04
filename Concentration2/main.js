(function() {
  'use strict';

  let pairs = 13;
  let cards = [];

  let flipCount = 0;
  let firstCard = null;
  let secondCard = null;

  let startTime;
  let isRunning = false;

  // 揃えたペアを保持する変数
  let correctCount = 0;
  // setTimeoutの返り値で使うための変数を定義
  let timeoutId;

  function init() {
    let card;
    let i;
    for (i = 1; i <= pairs; i++) {
      // ***直接Domに追加しない***  createCard関数で作ったカードをstageの下につけていく
      // document.getElementById('stage').appendChild(createCard(i));
      // document.getElementById('stage').appendChild(createCard(i));

      // 配列cardsに作ったカードを追加する 
      //その後ランダムに取り出してDomに追加
      cards.push(createCard(i));
      cards.push(createCard(i));
      
    }
    while (cards.length) {
      card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
      document.getElementById('stage').appendChild(card);
    }
  }

  // createCard関数を作る
  function createCard(num) {
  // Dom上の、container・card・（フロント・バックカードの）inneerクラス作成のための変数を用意
    let container;
    let card;
    let inner;

    //innerをつくる
    inner = '<div class="card-front">' + num + '</div><div class="card-back">?</div>';

    //cardをつくる
    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';


    // cardクリックでcard  open になる
    card.addEventListener('click', function() {
      // カードの要素をflipCard関数に渡す
      flipCard(card);

      // タイマー稼働中ならrunTimer()が走らないようにする
      if (isRunning === true) {
        return;
      }
      isRunning = true;

      // 最初のカードめくった時の時刻をsetTimeに設定
      startTime = Date.now();
      // タイマーを稼働
      runTimer();
      // リスタートボタンの設定
      document.getElementById('restart').className = '';
    });

    //containerをつくる
    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);
    return container;
  }

  // flipCard() カードをめくる枚数を定義する関数を作る
  function flipCard(card) {
    if (firstCard !== null && secondCard !== null) {
      return;
    }
    // openクラスがついていたらめくれないように（同じカードをめくれないように）
    //indexOf・・・指定された値が最初に現れたインデックスを返す。値が見つからない場合は -1 を返す。
    if (card.className.indexOf('open') !== -1) {
      return;
    }
    card.className = 'card open';
    flipCount++;
    if (flipCount % 2 === 1) {
      firstCard = card;
    } else {
      secondCard = card;
      // check();
      secondCard.addEventListener('transitionend', check);
    }
  };

  // check()関数で、2枚目で正誤判定をして同じ番号じゃなかったらカードを閉じる
  function check() {
    // console.log(firstCard.children[0]);

    if (
      // firstCard.children[0].textContent !== secondCard.children[0].textContent
      firstCard.textContent !== secondCard.textContent
      ) {
        firstCard.className = 'card';
        secondCard.className ='card';
      } else {
        correctCount++;
        if (correctCount === pairs) {
          clearTimeout(timeoutId);
        }
      }
      secondCard.removeEventListener('transitionend', check);
      firstCard = null;
      secondCard = null;
  }
    
  function runTimer() {
    document.getElementById("score" ).textContent = ((Date.now() - startTime) / 1000).toFixed(2);
    // setTimeout(function() {
    timeoutId = setTimeout(function() {
      runTimer();
    }, 10);
  }

  init();
})();