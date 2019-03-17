let stage;
let count = 30;

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
  // const timerInner = '<div class="sec count">30.00</div>';
  const timerInner = `<div class="sec count">${count}</div>`;
  const timer = document.createElement('div');
  timer.id = 'timer';
  timer.className = 'count';
  timer.innerHTML = timerInner;
  stage.appendChild(timer);
  diaryBox();

  // クリックしたらcountSecondsが起動する
  start.addEventListener('click', function() {
    countdown();
  })
}  

// countdown()・・STARTボタンをクリックしたら３０秒カウント開始
function countdown() {
  document.getElementById('timer').textContent = count.toString();
  console.log(count--);
  const id = setTimeout(countdown, 1000);
  if (count < 0) {
    clearTimeout(id);
  }
}

// diaryBoxを作る
function diaryBox() {
  let diary = document.createElement('textarea');
  diary.placeholder = '今日の出来事';
  diary.className = 'diary';
  diary.id = 'diaryId';
  stage.appendChild(diary);

  // lettersInnerを作る
  const letters = document.createElement('span');
  letters.className = 'count';
  stage.appendChild(letters);
  // テキストエリア→ diaryに入力したら、
  // 入力中の文字数→ lettersの数が増える
  diary.addEventListener('keyup', onkeyup);
  function onkeyup() {
    const inputText = diary.value;
    letters.innerHTML = '<p>'+ inputText.length + ' '+'characters</p>';
  } 
}

init();