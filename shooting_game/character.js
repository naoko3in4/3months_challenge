// // 自機に関するクラスを記述
// // 自機サイズは0で初期化
function Character(){
  this.position = new Point();
  this.size = 0;
}

// // 自機サイズはinitメソッドで行う
Character.prototype.init = function(size){
  this.size = size;
}

// 自機ショット用のクラスを記述
function CharacterShot(){
  this.position = new Point();
  this.size = 0; // ショットサイズ
  this.speed = 0;// ショットスピード
  this.alive = false; // 自機ショットの生存フラグ(画面上に描かれる場合とそうでない場合)
}

// ショットの初期化
CharacterShot.prototype.set = function(p, size, speed){
  // 座標をセット
  this.position.x = p.x;
  this.position.y = p.y;

// サイズ・スピードをセット
  this.size = size;
  this.speed = speed;

// 生存フラグを立てる
  this.alive = true;
};

// ショットの動きに関する処理を記述
CharacterShot.prototype.move = function(){
  // 座標を真上にspeed分だけ移動させる
  this.position.y -= this.speed;

  // 一定以上の座標に到達していたら生存フラグを降ろす(画面外に出てしまったショットの生存フラグは降ろす)
  if (this.position.y < -this.size){
    this.alive = false;
  }
};

// 敵のクラスを作成-------------------------------------------------------------------------
function Enemy(){
  this.position = new Point();
  this.size = 0;
  this.type = 0;
  this.param = 0;  // 各敵キャラごとに登場してどれくらい経過したのかの指標
  this.alive = false;
}

Enemy.prototype.set = function(p, size, type){
  // 座標をセット
  this.position.x = p.x;
  this.position.y = p.y;

  // サイズ、タイプセット
  this.size = size;
  this.type = type;

  // パラメータリセット
  this.param = 0;

  // 生存フラグ立てる
  this.alive = true;
};

Enemy.prototype.move = function(){
  // パラメータ増やす
  this.param++; 

  // タイプに応じて分岐
  switch (this.type){
    case 0:
      // X方向にまっすぐ進む
      this.position.x += 2;

      // スクリーン右端より先になったら生存フラグ降ろす
      if (this.position.x > this.size + screenCanvas.width){
        this.alive = false;
      }
      break;
    case 1:
      // マイナスX方向にまっすぐ進む
      this.position.x -= 2;
      
      // スクリーン左端より先になったら生存フラグ降ろす
      if (this.position.x < -this.size) {
        this.alive = false;
      }
      break;
  }
};

// 敵のショットを管理するクラス-------------------------------------------------------------------------

function EnemyShot(){
  this.position = new Point();
  this.vector = new Point();
  this.size = 0;
  this.speed = 0;
  this.alive = false;
}

EnemyShot.prototype.set = function (p, vector, size, speed){
  // 座標、ベクトルをセット
  this.position.x = p.x;
  this.position.y = p.y;
  this.vector.y = vector.y; 

  // サイズ、スピードをセット
  this.size = size;
  this.speed = speed;

  // 生存フラグ立てる
  this.alive = true;
};

EnemyShot.prototype.move = function(){
  // 座標をベクトルに応じてspeed分だけ移動させる(敵キャラのショットが自機キャラがいる場所に向かって飛んでくる)
  // 自分自身の現在地に、ベクトルとスピードを掛け合わせたものを加算
  this.position.x += this.vector.x * this.speed;
  this.position.y += this.vector.y * this.speed;

  // 一定以上の座標に到達していたら生存フラグ降ろす
  if (
    this.position.x < -this.size ||
    this.position.y < -this.size ||
    this.position.x > this.size + screenCanvas.width ||
    this.position.y > this.size + screenCanvas.height
  ) {
      this.alive = false;
  }
};





