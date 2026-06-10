// テーマ: 避けゲーム。生き延びた時間がスコアになる

let playerX = 200
const playerY = 360
let isGameOver = false
let survivalTime = 0
const enemies: { x: number; y: number; speed: number; size: number }[] = []
let spawnTimer = 0

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  if (isGameOver) {
    fill(255, 80, 80)
    textSize(40)
    textAlign(CENTER, CENTER)
    text("GAME OVER", 200, 160)

    fill(255)
    textSize(24)
    text("Time: " + (survivalTime / 1000).toFixed(1) + "s", 200, 220)

    textSize(16)
    fill(150)
    text("click to restart", 200, 280)
    return
  }

  survivalTime = millis()

  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 5
  }

  // constrain で値を範囲内に収める。画面の外に出られなくなる
  playerX = constrain(playerX, 15, 385)

  noStroke()
  fill(100, 255, 200)
  triangle(playerX, playerY - 20, playerX - 15, playerY + 10, playerX + 15, playerY + 10)

  spawnTimer = spawnTimer + 1

  if (spawnTimer > 20) {
    enemies.push({
      x: random(20, 380),
      y: -20,
      speed: random(2, 5),
      size: random(15, 35),
    })

    spawnTimer = 0
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i]

    e.y = e.y + e.speed

    fill(255, 80, 80)
    rect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size)

    // プレイヤーと敵の距離で当たり判定
    if (dist(playerX, playerY, e.x, e.y) < (e.size + 20) / 2) {
      isGameOver = true
    }

    if (e.y > 440) {
      enemies.splice(i, 1)
    }
  }

  fill(255)
  textSize(16)
  textAlign(LEFT, TOP)
  text("Time: " + (survivalTime / 1000).toFixed(1) + "s", 10, 10)
}

function mousePressed() {
  if (isGameOver) {
    isGameOver = false
    playerX = 200

    // length = 0 で配列を空にする
    enemies.length = 0
    spawnTimer = 0
  }
}
