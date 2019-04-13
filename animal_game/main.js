{
  const start = document.getElementById('start');
  const myHandContainer = document.getElementById('my-hand__container');
  const result = document.getElementById('result');
  // const enemies = ['ネコ', 'ネズミ' , 'ニンゲン'];
  const enemies = ['img/cat-resized.jpg','img/mouse.jpg','img/human.jpg'];
  const resultContainer = document.getElementById('result__container');
  const reset = document.createElement('button');
  const seconds = document.getElementById('seconds')

  let myDecision;
  let isStarted = false;
  let secondsCounter;
  let count = 0;
  let enemy;
  let enemyHand = document.getElementById('enemy-hand');

  start.addEventListener('click', () => {
    isStarted = true; 
    document.getElementById('start').style.display = 'none';

    // 時間計測
    secondsCounter = setInterval(() => {
      count++;
      seconds.innerHTML = `${count}秒経過`;
    }, 1000) 
    // resetMaker();
  })

  const showReset = () => {
    reset.textContent = 'リセット';
    reset.className = 'game__button';
    resultContainer.append(reset);
  }

  const resetAction = (e) => {
    reset.addEventListener('click', () => {
      document.getElementById('start').style.display = 'block';
      reset.style.display = 'none';
      clearInterval(secondsCounter);
      count = 0;
      seconds.innerHTML = `${count}秒`;
      enemyHand.src = 'img/hatena.png';
      enemyHand.className = '';
      result.innerHTML = '勝負結果';
      isStarted = false;
      resetMyDecision();
    })
  }

  const resetMyDecision = () => {
    const myHandImages = document.querySelectorAll('.my-hand__images');
    myHandImages.forEach(hand => {
      hand.classList.remove('my-hand--active');
      hand.classList.add('my-hand__images--default');
    })

  }

  myHandContainer.addEventListener('click', (e) => {

    resetMyDecision();
    if (!isStarted) {
      return;
    }
    e.srcElement.classList.remove('my-hand__images--default');
    e.srcElement.classList.add('my-hand--active');
    myDecision = (e.srcElement.id)*1;
    if (!e.srcElement.src) {
      console.log('未選択');
      return;
    }
  
    showEnemyHand();
    resetAction(e);
  })

  const showEnemyHand = () => {
    enemy = Math.floor(Math.random() * enemies.length);
    enemyHand.src = enemies[enemy];
    enemyHand.className = 'enemy-hand--active';
    showResult(); 
  }
 
  const showResult = () => {
    reset.style.display = 'block';
    const results = ['勝ち','負け','あいこ'];
    // あいこ → 計算式に戻る
    if (myDecision === enemy) {
      result.textContent = results[2] + '、' + '  あいこで・・・';
      reset.style.display = 'none';
      isStarted = true;
    } 
    
    // 自分ネコ
    if (myDecision === 0) {
      switch (enemy) {
        // 相手 ネズミ → 勝ち
        case 1:
          result.textContent = results[0];
          clearInterval(secondsCounter);
          isStarted = false;
          break;
        // 相手 ニンゲン → 負け
        case 2:
          result.textContent = results[1];
          clearInterval(secondsCounter);
          isStarted = false;
          break;
      }
      showReset();
    }
    
    // 自分ネズミ
    if (myDecision === 1) {
      switch (enemy) {
        // 相手 ニンゲン → 勝ち
        case 2:
          result.textContent = results[0];
          clearInterval(secondsCounter);
          isStarted = false;
          break;
        // 相手 ネコ → 負け
        case 0:
          result.textContent = results[1];
          clearInterval(secondsCounter);
          isStarted = false;
          break;
      }
      showReset();
    }

    // 自分ニンゲン
    if (myDecision === 2) {
      switch (enemy) {
        // 相手 ネコ → 勝ち
        case 0:
          result.textContent = results[0];
          clearInterval(secondsCounter);
          isStarted = false;
          break;
        // 相手 ネズミ → 負け
        case 1:
          result.textContent = results[1];
          clearInterval(secondsCounter);        
          isStarted = false;
          break;
      }
      showReset();
    } 
  }
}


