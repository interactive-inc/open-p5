// テーマ: アニメーション。draw のたびに変数を変えると動いて見える

// let は後から値を変更できる変数（const は変更できない）
let x = 0

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255, 200, 0)
  circle(x, 200, 60)

  // 毎フレーム x が 2 ずつ増える = 右に動く
  x = x + 2

  // 画面の右端を超えたら左端に戻す
  if (x > 430) {
    x = -30
  }
}
