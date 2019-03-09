const theDay = new Date;
console.log(theDay);

let stage;
let today;
let todayInner;

// 月と日
let month = theDay.getMonth() + 1;
let day = theDay.getDate();

console.log(month);
console.log(day);

stage = document.getElementById('stage');
// todayInnerを作る
todayInner = `<div class='today'>${month}月${day}日</div>`;
console.log(todayInner);
// todayを作る
today = document.createElement('div');
today.innerHTML = todayInner;
stage.appendChild(today);

