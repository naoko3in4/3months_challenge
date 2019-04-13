function Point(){
  this.x = 0;
  this.y = 0;
}

// // Pointクラス拡張の為↓
// // 敵キャラから自機へショットを飛ばす時の距離で必要
Point.prototype.distance = function(p){
  let q = new Point();
  q.x = p.x - this.x;
  q.y = p.y - this.y;
  return q;
};
// x,yの比率は平方根で計算する
Point.prototype.length = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

// 比率を一定にする為の処理 ベクトルを正規化・・ベクトルの大きさが１ちょうどになるよう調整
Point.prototype.normalize = function(){
  let i = this.length();
  if (i > 0){
    let j = 1 / i;
    this.x *= j;
    this.y *= j;
  }
};




