// global
let screenCanvas, info;
let run = true; //trueでゲームが続く
let fps = 1000 / 30; // 1秒に30回更新
let mouse = new Point(); // common.jsで作ったPointクラスで、マウスカーソルの座標格納の為のインスタンスを用意
let ctx; //canvas2nd コンテキスト格納用
let fire = false; //shotを発射するかしないか
let counter = 0; // シーン管理（ゲーム全体の進行具合を把握）
const CHARA_COLOR = 'rgba(84, 77, 203, 0.75)'; // 自機の色
const CHARA_SHOT_COLOR = 'rgba(50, 204, 18, 1)';// ショットの色
const CHARA_SHOT_MAX_COUNT = 10; // 画面上で出せるショットの上限数
const ENEMY_COLOR = 'rgba(255, 98, 50, 0.75)'; //敵の色
const ENEMY_MAX_COUNT = 10; // 敵の上限数

// メイン 初期化-----------------------------------------------------------------------------------------
window.onload = () => {

  // スクリーン初期化
  screenCanvas = document.getElementById("screen");
  screenCanvas.width = 256;
  screenCanvas.height = 256;

  // 2dコンテキスト 描画コンテキスト（2次元グラフィックスの場合は2d指定）
  ctx = screenCanvas.getContext("2d");

  // イベント
  screenCanvas.addEventListener("mousemove", mouseMove, true);
  screenCanvas.addEventListener("mousedown", mouseDown, true);
  window.addEventListener("keydown", keyDown, true);

  // エレメント
  // let info = document.getElementById("info");//HTMLのPタグへの参照
  // https://qiita.com/FumioNonaka/items/0d4e014314e7ac572d0f  JavaScript: getElementById()メソッドを使わずにid属性値で要素を参照する
  info = document.getElementById("info");//HTMLのPタグへの参照

  // 自機の初期化  init メソッドでキャラクターサイズを10ピクセルに設定
  let chara = new Character();
  chara.init(10);

  // ショットの初期化
  let charaShot = new Array(CHARA_SHOT_MAX_COUNT);
  for (i = 0; i < CHARA_SHOT_MAX_COUNT; i++){
    charaShot[i] = new CharacterShot();
  }

  // 敵キャラ用インスタンス初期化
  let enemy = new Array(ENEMY_MAX_COUNT);
  for (i=0; i < ENEMY_MAX_COUNT; i++){
    enemy[i] = new Enemy();
  }

  // ループ  setTimeoutを用いて無名関数自体を再帰的に呼び出し-----------------------------------------------------------
  // run が真の時 fps 秒後に無名関数を実行  
  (function(){
    // HTMLの更新
    info.innerHTML = mouse.x + " : " + mouse.y;
    // -----自機の作成-----
    // スクリーンのクリア clearRect(x, y, w, h)メソッド (canvas 上の指定された矩形のすべてのピクセルを、透明な黒にクリア)
    ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

    // パスの初期化 beginPath()メソッド（現在のパスをクリア）
    ctx.beginPath();

    // 自機の位置を設定
    chara.position.x = mouse.x;
    chara.position.y = mouse.y;

    // 自機（円）の色を設定
    // ctx.fillStyle = "rgba(0, 0, 255, 0.75)"; //最後は透明度
    ctx.fillStyle = CHARA_COLOR;

    // 自機（円）を描くパスを設定
    // ↓座標mouse.x, mouse.yが中心で、半径10ピクセルの円を基準に0度の位置から「時計回り(false)」に360度（角度はラジアン単位）回転して描かれた円弧
    ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2, false); 

    // 自機（円）を描く
    ctx.fill();

    // ----ショットの描画----
    // パスの初期化
    ctx.beginPath();

    // 全ての自機ショットを調査
    for (i = 0; i < CHARA_SHOT_MAX_COUNT; i++){
      // 自機ショットが既に発射されているかチェック
      if (charaShot[i].alive) {

        // 自機ショットを動かす
        charaShot[i].move();

        // 自機ショットを描くパスの設定
        ctx.arc(
          charaShot[i].position.x,
          charaShot[i].position.y,
          charaShot[i].size,
          0, Math.PI * 2, false
        );

        // パスを一旦閉じる
        ctx.closePath();
      }
    }

    // 自機ショットの色を設定
    ctx.fillStyle = CHARA_SHOT_COLOR;

    // 自機ショットを描く
    ctx.fill();
   
    // ----ショットの生成----
    if (fire) {
      // 全ての自機ショットを調査する
      for (i = 0; i < CHARA_SHOT_MAX_COUNT; i++) {
        // 自機ショットが既に発射されているかチェック
        if (!charaShot[i].alive) {
          // 自機ショットを新規にセット
          charaShot[i].set(chara.position, 4, 6); // ショットを生成する初期位置は、自機のいる座標。サイズは 3 で速度は 5
          // ループを抜ける
          break;
        }
      }
      // フラグを降ろしておく
      fire = false;
    }

    // ----敵の出現管理----
    // 100フレームに一度出現
    // if (counter % 100 === 0){
    //   // 全ての敵の調査
    //   for(i = 0; i < ENEMY_MAX_COUNT; i++ ){
    //     // 敵の生存フラグの確認
    //     if (!enemy[i].alive){

    //     }
    // }



    // setTimeoutで再帰呼出し
    if (run) {
      setTimeout(arguments.callee,fps);
    }
  })();

  //イベント-----------------------------------------------------------------------
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

  function mouseDown(event){
    // フラグを立てる  マウスクリックを検知する関数
    fire = true;
  }

}