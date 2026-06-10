// テーマ: 制限時間。millis (経過ミリ秒) で残り時間を計算する

let score = 0
let targetX = 200
let targetY = 200

// 10000ミリ秒 = 10秒
const timeLimit = 10000
let startTime = 0
let isGameOver = false

function setup() {
  createCanvas(400, 400)

  // millis() は起動からの経過時間。開始時刻として記録しておく
  startTime = millis()
  targetX = random(50, 350)
  targetY = random(50, 350)
}

function draw() {
  background(20)

  // 今の時刻 - 開始時刻 = 経過時間
  const elapsed = millis() - startTime

  // max(0, ...) でマイナスにならないようにする
  const remaining = max(0, timeLimit - elapsed)

  if (remaining <= 0) {
    isGameOver = true
  }

  // ゲームオーバー画面。return で以降の処理を打ち切るのがポイント
  if (isGameOver) {
    fill(255)
    textSize(48)
    textAlign(CENTER, CENTER)
    text("TIME UP!", 200, 160)

    textSize(32)
    text("Score: " + score, 200, 230)

    textSize(16)
    fill(150)
    text("click to restart", 200, 300)
    return
  }

  noStroke()

  fill(255, 100, 100)
  circle(targetX, targetY, 50)

  fill(255)
  textSize(20)
  textAlign(LEFT, TOP)
  text("Score: " + score, 10, 10)

  // toFixed(1) で小数1桁に丸める
  text("Time: " + (remaining / 1000).toFixed(1), 10, 35)

  // 残り時間をバーの長さに変換して表示する
  const barWidth = map(remaining, 0, timeLimit, 0, 380)

  fill(100, 255, 100)
  rect(10, 65, barWidth, 8, 4)
}

function mousePressed() {
  // ゲームオーバー中のクリックはリスタート
  if (isGameOver) {
    score = 0
    startTime = millis()
    isGameOver = false
    targetX = random(50, 350)
    targetY = random(50, 350)
    return
  }

  const d = dist(mouseX, mouseY, targetX, targetY)

  if (d < 25) {
    score = score + 1
    targetX = random(50, 350)
    targetY = random(50, 350)
  }
}
