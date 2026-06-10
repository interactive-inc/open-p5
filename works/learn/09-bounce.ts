// テーマ: 跳ね返り。速度を位置に足し、壁で速度を反転する

let x = 200

// vx = x 方向の速度 (velocity)
let vx = 3

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(100, 200, 255)
  circle(x, 200, 50)

  // 速度を位置に足す = 動く
  x = x + vx

  // 壁に当たったら速度を反転 (3 → -3) = 逆向きに動く
  if (x > 375 || x < 25) {
    vx = vx * -1
  }
}
