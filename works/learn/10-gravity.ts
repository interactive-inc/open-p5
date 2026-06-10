// テーマ: 重力。毎フレーム速度に少しずつ下向きの力を足す

let y = 50
let vy = 0

// 重力の強さ。毎フレーム速度に足される
const gravity = 0.5

// 跳ね返るときに速度が何倍になるか。1未満だと少しずつ弱まる
const bounceFactor = 0.7

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255, 80, 80)
  circle(200, y, 40)

  // 速度に重力を足してから、位置に速度を足す。この2行が物理の基本
  vy = vy + gravity
  y = y + vy

  if (y > 380) {
    y = 380

    // 跳ね返り = 速度を反転して少し弱める
    vy = vy * -bounceFactor
  }
}
