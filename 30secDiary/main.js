let stage;

function init() {
  stage = document.getElementById('stage');
  writingDate();
  createStart();
}   

// writingDate();
function writingDate() {
  // 月と日
  const theDay = new Date;
  const month = theDay.getMonth() + 1;
  const day = theDay.getDate();

  // todayInnerを作る
  const todayInner = `<div class='today'>${month}月${day}日</div>`;

  // todayを作る
  const today = document.createElement('div');
  today.innerHTML = todayInner;
  stage.appendChild(today);
}

// STARTボタンを作る
function createStart() {
  const start = document.createElement('button');
  start.textContent = 'START';
  start.className = 'start';
  stage.appendChild(start);

  // timerInnerを作る
  const timerInner = '<div class="sec count">0.00</div>';
  const timer = document.createElement('div');
  timer.innerHTML = timerInner;
  stage.appendChild(timer);
  diaryBox();

  // クリックしたらcountSecondsが起動する
  start.addEventListener('click', function() {
    countSeconds();
  })
}  

// countSeconds()・・STARTボタンをクリックしたら３０秒カウント開始
function countSeconds() {

}

// diaryBoxを作る
function diaryBox() {
  const diary = document.createElement('textarea');
  diary.className = 'diary';
  stage.appendChild(diary);

  // lettersInnerを作る
  const lettersInner = '<div class="letter count">0</div>';
  const letters = document.createElement('div');
  letters.innerHTML = lettersInner;
  stage.appendChild(letters);

  letterCounter();
}

// letterCounter()で文字数を数える
function letterCounter() {

}

init();