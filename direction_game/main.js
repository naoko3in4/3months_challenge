(function(){
  "use strict";

  //自分の出す一手を選ぶ
  let myPon = document.getElementById("myPon");
  //グー
  let rock = document.getElementById("rock");
  rock.addEventListener("click", function(){
    // myPon.textContent = "グー vs";
    myPon.textContent = "グー";
  }, false);
  //チョキ
  let scissors = document.getElementById("scissors");
  scissors.addEventListener("click", function(){
    // myPon.textContent = "チョキ vs";
    myPon.textContent = "チョキ";
  }, false);
  //パー
  let paper = document.getElementById("paper");
  paper.addEventListener("click", function(){
    // myPon.textContent = "パー vs";
    myPon.textContent = "パー";
  }, false);

  //対戦相手の一手をランダムに表示
  let pon = document.getElementById("pon");
  let ponResult;
  pon.addEventListener("click", function(){
    ponResult = Math.floor(Math.random()*3);
    this.textContent = ponResult;
    switch (ponResult){
      case 0:
        this.textContent = "グー";
        break;
      case 1:
        this.textContent = "チョキ";
        break;
      case 2:
        this.textContent = "パー";
        break;
      default:
        this.textContent = "どれ出すの？";
        break;
    }
    // console.log(myPon);
    // console.log(ponResult);
    
    let judge = document.getElementById("judge");
    //自分がグーの時の相手
    // if (myPon.textContent === "グー vs" && ponResult === 0){
    if (myPon.textContent === rock.textContent && ponResult === 0){
      // console.log(ponResult);
      judge.textContent = "もう一回じゃんけん！";
      // alert("もう一回じゃんけん！");
    // } else if (myPon.textContent === "グー vs" && ponResult === 1){
    } else if (myPon.textContent === rock.textContent && ponResult === 1){
      // console.log(ponResult);
      judge.textContent = "勝ち！あっちむいて・・・";
      // alert("あっちむいて・・・");
    // } else if (myPon.textContent === "グー vs" && ponResult === 2){
    } else if (myPon.textContent === rock.textContent && ponResult === 2){
      // console.log(ponResult);
      judge.textContent = "負け！おしまい！";
      // alert("負け！");
    }

    //自分がチョキの時の相手
    // if (myPon.textContent === "チョキ vs" && ponResult === 0){
    if (myPon.textContent === scissors.textContent && ponResult === 0){
      judge.textContent = "負け！おしまい！";
    // } else if (myPon.textContent === "チョキ vs" && ponResult === 1){
    } else if (myPon.textContent === scissors.textContent && ponResult === 1){
      judge.textContent = "もう一回じゃんけん！";
    // } else if (myPon.textContent === "チョキ vs" && ponResult === 2){
    } else if (myPon.textContent === scissors.textContent && ponResult === 2){
      judge.textContent = "勝ち！あっちむいて・・・";
    }

    //自分がパーの時の相手
    // if (myPon.textContent === "パー vs" && ponResult === 0){
    if (myPon.textContent === paper.textContent && ponResult === 0){
      judge.textContent = "勝ち！あっちむいて・・・";
    // } else if (myPon.textContent === "パー vs" && ponResult === 1){
    } else if (myPon.textContent === paper.textContent && ponResult === 1){
      judge.textContent = "負け！おしまい！";
    // } else if (myPon.textContent === "パー vs" && ponResult === 2){
    } else if (myPon.textContent === paper.textContent && ponResult === 2){
      judge.textContent = "もう一回じゃんけん！";
    }
  }, false);

  //対戦結果を表示(自分の結果)
  //自分グー 相手グー あいこ
  //自分グー 相手チョキ 勝ち
  //自分グー 相手パー 負け

  //自分チョキ 相手グー 負け
  //自分チョキ 相手チョキ あいこ
  //自分チョキ 相手パー 勝ち

  //自分パー 相手グー 勝ち
  //自分パー 相手チョキ 負け
  //自分パー 相手パー あいこ
  // if (myPon === rock && ponResult === 0){
  //   alart ("もう一回！");
  // }

  //あっちむいてパート
  //自分の出す一手を選ぶ
  let myD = document.getElementById("myD");
  //上
  let up = document.getElementById("up");
  up.addEventListener("click", function(){
    myD.textContent = "上（UP）";
  }, false);
  //下
  let down = document.getElementById("down");
  down.addEventListener("click", function(){
    myD.textContent = "下（DOWN）";
  }, false);
  //左
  let left = document.getElementById("left");
  left.addEventListener("click", function(){
    myD.textContent = "左（LEFT）";
  }, false);
   //右
   let right = document.getElementById("right");
   right.addEventListener("click", function(){
     myD.textContent = "右（RIGHT）";
   }, false);

  //対戦相手の「ほい」をランダムに表示
  let hoi = document.getElementById("hoi");
  let hoiResult;
  hoi.addEventListener("click", function(){
    hoiResult = Math.floor(Math.random()*4);
    this.textContent = ponResult;
    switch (hoiResult){
      case 0:
        this.textContent = "上（UP）";
        break;
      case 1:
        this.textContent = "下（DOWN）";
        break;
      case 2:
        this.textContent = "左（LEFT）";
        break;
      case 3:
        this.textContent = "右（RIGHT）";
        break;
      default:
        this.textContent = "どれ出すの？";
        break;
    }
    //あっちむいてほいの結果表示
    let final = document.getElementById("final");
    if (myD.textContent === hoi.textContent){
      final.textContent = "YOU WIN! おめでとう！";
    } else {
      final.textContent = "TRY AGAIN...";
    }
  })
})();