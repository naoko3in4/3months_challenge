// global
let screenCanvas, info;
let run = true; //trueでゲームが続く
let fps = 1000 / 30; // 1秒に30回更新
let mouse = new Point(); // common.jsで作ったPointクラスで、マウスカーソルの座標格納の為のインスタンスを用意
let ctx; //canvas2nd コンテキスト格納用

// メイン 初期化
window.onload = () => {
// window.onload = function(){

  // スクリーン初期化
  screenCanvas = document.getElementById("screen");
  screenCanvas.width = 256;
  screenCanvas.height = 256;

  // 2ndコンテキスト 描画コンテキスト（2次元グラフィックスの場合は2nd指定）
  ctx = screenCanvas.getContext("2nd");


  // イベント
  screenCanvas.addEventListener("mousemove", mouseMove, true);
  window.addEventListener("keydown", keyDown, true);

  // エレメント
  // let info = document.getElementById("info");//HTMLのPタグへの参照
  // https://qiita.com/FumioNonaka/items/0d4e014314e7ac572d0f  JavaScript: getElementById()メソッドを使わずにid属性値で要素を参照する
   info = document.getElementById("info");//HTMLのPタグへの参照

  // ループ  setTimeoutを用いて無名関数自体を再帰的に呼び出し
  // run が真の時 fps 秒後に無名関数を実行  
  (function(){
    // HTMLの更新
    info.innerHTML = mouse.x + " : " + mouse.y;

    // スクリーンのクリア
    // ctx.clearRect(0,0,screenCanvas.width,screenCanvas.height);



    // setTimeoutで再帰呼出し
    if (run) {
      setTimeout(arguments.callee,fps);
    }
  })();

//イベント
function mouseMove(event) {
//  let mouseMove = (event) => {
  // マウスカーソル座標の更新  ↓offsetLeft, offsetTopは最初のボーダーボックスの位置
  mouse.x = event.clientX - screenCanvas.offsetLeft;
  mouse.y = event.clientY - screenCanvas.offsetTop;
}

function keyDown(event){
// keyDown = (event) => {
  // キーコードをevent.keyCodeプロパティで取得
  let ck = event.keyCode;

  // escキーだったらフラグを下ろす
  if (ck === 27){
    run = false;
  }
}


}