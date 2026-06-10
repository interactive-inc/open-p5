// テーマ: ポン。パドルでボールを跳ね返す、ゲームの古典

const ball = { x: 200, y: 200, vx: 3, vy: 3, size: 15 }
const paddleWidth = 80
const paddleHeight = 12
let score = 0
let isGameOver = false

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  if (isGameOver) {
    fill(255)
    textSize(36)
    textAlign(CENTER, CENTER)
    text("GAME OVER", 200, 160)

    textSize(24)
    text("Score: " + score, 200, 220)

    textSize(16)
    fill(150)
    text("click to restart", 200, 280)
    return
  }

  noStroke()

  // パドルはマウスで操作。constrain で画面からはみ出さないようにする
  const paddleX = constrain(mouseX, paddleWidth / 2, 400 - paddleWidth / 2)

  fill(100, 200, 255)
  rect(paddleX - paddleWidth / 2, 370, paddleWidth, paddleHeight, 4)

  fill(255, 200, 50)
  circle(ball.x, ball.y, ball.size)

  ball.x = ball.x + ball.vx
  ball.y = ball.y + ball.vy

  // 左右の壁で反射
  if (ball.x < ball.size / 2 || ball.x > 400 - ball.size / 2) {
    ball.vx = ball.vx * -1
  }

  // 上の壁で反射。下は壁がない = 落ちたらゲームオーバー
  if (ball.y < ball.size / 2) {
    ball.vy = ball.vy * -1
  }

  // パドルとの当たり判定
  if (
    ball.y + ball.size / 2 > 370 &&
    ball.y < 370 + paddleHeight &&
    ball.x > paddleX - paddleWidth / 2 &&
    ball.x < paddleX + paddleWidth / 2
  ) {
    // abs で必ず上向きにする。跳ね返るたびに少しずつ速くなる
    ball.vy = -abs(ball.vy) - 0.2

    // パドルの端で打つほど横に曲がる。打ち分けができる
    ball.vx = ball.vx + (ball.x - paddleX) * 0.1
    score = score + 1
  }

  if (ball.y > 420) {
    isGameOver = true
  }

  fill(255)
  textSize(20)
  textAlign(LEFT, TOP)
  text("Score: " + score, 10, 10)
}

function mousePressed() {
  if (isGameOver) {
    ball.x = 200
    ball.y = 200
    ball.vx = 3
    ball.vy = 3
    score = 0
    isGameOver = false
  }
}
