// "use strict";

const table = document.getElementById("table");
const array = [];
let field = 3;

//もぐらが「いない・いる」を0,1で表示
let being = {
  "0": "",
  "1": "もぐら！"
}

// プレイ中かどうかを判断
let nowPlaying = false;

// window.onload = function() {
init = () => {    
  for (let i = 0; i < field; i++){
    let tr = document.createElement("tr");
    for (let j = 0; j < field; j++){
      let td = document.createElement("td");
      let num = i * field + j;
      //tdにidを持たせて番号を振る
      td.id = num;
      tr.append(td); //tr.appendchild(td)だと反映されない
    }
    table.append(tr); //table.appendchild(tr)だと反映されない
  }

  //定数arrayに数字の「0」だけ持たせる
  for (let n = 0; n < field ** 2; n++){
    array.push(0);
  }

  // 実装中に表示するためにここでイベント発火中
  draw();
};

// イベント発火すると、もぐらの位置をランダムで表示する
start = () => {
  if (nowPlaying) {
    return;
  } else {
    nowPlaying = true;
    appear = () => {
      for (let p = 0; p < field ** 2; p++){
        let random = Math.floor(Math.random() * field ** 2);
        if (array[random] === 0){
            array[random] = 1;
            break;
        }
      }
      // if (array[random] === 0){
      //   array[random] = 1;
      // }
      draw();
    }
    setInterval(appear, 1000);
  
    // ランダムでarrayの要素を"1"に変更する
    // let random = Math.floor(Math.random() * field ** 2);
    // array[random] = 1;  
  }
};

// 一定期間もぐらが出続ける
// appear = () => {
//   let random = Math.floor(Math.random() * field ** 2);
//   array[random] = 1;
// }
// setInterval(appear, 3000);

// もぐら叩くイベント
table.addEventListener("click", e => {
  const target = e.srcElement.id;
  array[target] = 0;
  draw();
});

// DOMにarrayの状態を描画する
draw = () => {
  // arrayの中でvalueの値(0,1)を一つずつ確認
  for (let n = 0; n < field ** 2; n++) {
    // console.log(array[n]);
    const key = array[n];

    // array[n]のvalueをもとにbeingの文字列を取得
    console.log(being[key]);
    
    // nと同じid番号のtdに、取得した文字列を表示
    //指定したidを持つ要素ノードへの参照を格納したHTMLCollectionを返します。
    const td = document.getElementById(n);

    td.textContent = being[key];
  }
}
