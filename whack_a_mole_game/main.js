(function(){
  "use strict";

  // ドットインストールで確認 詳解JavaScript DOM編 #09 要素を生成してみよう
  // //もぐら
  // document.createElement("span");
  // span.textContent = "もぐら";

  // document.write("もぐら");

  //もぐら出るのは9箇所
  const mogura = ["もぐら1","もぐら2","もぐら3","もぐら4","もぐら5","もぐら6","もぐら7","もぐら8","もぐら9"];
  // console.log(mogura[0]);
  // document.createElement("span");
  // const M1 = document.createElement("span");
  // document.createElement("tr");
  // document.createElement("td");
  // td.textContent = mogura[1];
  // span.textContent = mogura[1];
  // M1.textContent = mogura[1];
  // M1.textContent = "もぐら?";
  // document.body.appendChild(M1);

  //テーブルは１つ
  const mTabel = document.createElement("table");
  // document.body.appendChild(mTabel);

  //テーブルtrは3つ
  const mTr1 = document.createElement("tr");
  const mTr2 = document.createElement("tr");
  const mTr3 = document.createElement("tr");
  //テーブルtdは9つ
  const mTd1 = document.createElement("td");
  const mTd2 = document.createElement("td");
  const mTd3 = document.createElement("td");
  const mTd4 = document.createElement("td");
  const mTd5 = document.createElement("td");
  const mTd6 = document.createElement("td");
  const mTd7 = document.createElement("td");
  const mTd8 = document.createElement("td");
  const mTd9 = document.createElement("td");
  
  mTd1.textContent = mogura[0];
  mTd2.textContent = mogura[1];
  mTd3.textContent = mogura[2];
  mTd4.textContent = mogura[3];
  mTd5.textContent = mogura[4];
  mTd6.textContent = mogura[5];
  mTd7.textContent = mogura[6];
  mTd8.textContent = mogura[7];
  mTd9.textContent = mogura[8];

  document.body.appendChild(mTabel);
  //trの１行め
  document.body.appendChild(mTr1);
  document.body.appendChild(mTd1);
  document.body.appendChild(mTd2);
  document.body.appendChild(mTd3);
  //trの2行め
  document.body.appendChild(mTr2);
  //document.body.insertBefore(mTr2, mTr3);
  document.body.appendChild(mTd4);
  document.body.appendChild(mTd5);
  document.body.appendChild(mTd6);
  //trの3行め
  document.body.appendChild(mTr3);
  document.body.appendChild(mTd7);
  document.body.appendChild(mTd8);
  document.body.appendChild(mTd9);

  // document.getElementsByTagName("td").style.display("block");
  // document.getElementsByTagName("td").style.display = "block";
  // let display = document.getElementsByTagName("td");
  // console.log(display);//ここで返すのはHTMLCollection
  // display.style.display("block");
  // display.style.display="block";
  // display[0].style.display="block";//どれを変更させるのか指定すれば表示出来る

  //for分の練習（lengthまで全て表示の場合）
  // let display;
  // for (let i = 0; i < mogura.length; i++){
  //   display = document.getElementsByTagName("td");
  //   display[i].style.display="block";//どれを変更させるのか指定すれば表示出来る
  //   display[i].style.float="left";
      // let rand = Math.floor(Math.random()*9);
      // display[rand].style.display="block";//どれを変更させるのか指定すれば表示出来る
  // }
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click",()=>{
    let rand = Math.floor(Math.random()*9);
    console.log(rand);
    console.log(mogura[rand]);

    // let display = document.getElementsByTagName("td");
    // display[rand].style.display="block";//どれを変更させるのか指定すれば表示出来る
    // display[rand].style.float="left";

    //ランダムに見せるため変数displayだけ黒にする
    let display = document.getElementsByTagName("td");
    display[rand].style.color="black";

    // const startButton = document.getElementById("startButton");
    // const stopButton = document.getElementById("stopButton");
    // let timeout;
    // function start(){
    //   timeout = window.setTimeout(start, 2000);
    // }

    //スタートボタン押したらゲーム開始
    // let startTime;
    // startButton.addEventListener("click",()=>{
    // startTime = Date.now();
    // console.log(startTime);
    // if (Date.now() - startTime === 3){
    //   console.log(Date.now());
    //   // return;
    // }

  });
  // stopButton.addEventListener("click",()=>{

  // });
  

})();