// テーマ: スコア。的をクリックしたら加算して、的を移動する

let score = 0
let targetX = 200
let targetY = 200
let targetSize = 50

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  fill(255, 100, 100)
  circle(targetX, targetY, targetSize)

  fill(255)
  textSize(24)
  textAlign(LEFT, TOP)
  text("Score: " + score, 10, 10)

  fill(255, 200)
  circle(mouseX, mouseY, 10)
}

function mousePressed() {
  const d = dist(mouseX, mouseY, targetX, targetY)

  // クリック位置が的の半径内なら命中
  if (d < targetSize / 2) {
    score = score + 1

    // 的をランダムな位置とサイズで置き直す
    targetX = random(50, 350)
    targetY = random(50, 350)
    targetSize = random(30, 70)
  }
}
