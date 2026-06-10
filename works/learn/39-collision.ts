// テーマ: 当たり判定。円同士は「中心の距離 < 半径の合計」で重なりが分かる

const target = { x: 200, y: 200, size: 60 }
let isHitting = false

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // dist で2点間の距離を計算する
  const d = dist(mouseX, mouseY, target.x, target.y)

  // (直径 + 直径) / 2 = 半径の合計。距離がそれより小さければ重なっている
  isHitting = d < (target.size + 30) / 2

  // 当たっているかどうかで色を変える
  if (isHitting) {
    fill(255, 50, 50)
  } else {
    fill(50, 200, 100)
  }

  circle(target.x, target.y, target.size)

  fill(255, 200)
  circle(mouseX, mouseY, 30)

  fill(255)
  textAlign(CENTER)
  textSize(16)

  // 条件 ? A : B は「条件が true なら A、false なら B」という書き方
  text(isHitting ? "HIT!" : "move to the circle", 200, 380)
}
