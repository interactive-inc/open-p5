// テーマ: シューティング。弾の配列 + 敵の配列 + 当たり判定の総合演習

let playerX = 200
let score = 0
let isGameOver = false
const bullets: { x: number; y: number }[] = []
const enemies: { x: number; y: number; speed: number }[] = []
let enemyTimer = 0
let shootTimer = 0

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(10, 10, 30)

  if (isGameOver) {
    fill(255, 80, 80)
    textSize(40)
    textAlign(CENTER, CENTER)
    text("GAME OVER", 200, 160)

    fill(255)
    textSize(24)
    text("Score: " + score, 200, 220)

    textSize(16)
    fill(150)
    text("click to restart", 200, 280)
    return
  }

  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 5
  }

  playerX = constrain(playerX, 15, 385)

  noStroke()

  fill(100, 255, 200)
  triangle(playerX, 350, playerX - 12, 375, playerX + 12, 375)

  // 連射の間隔をタイマーで制御する。タイマーがないと毎フレーム発射されてしまう
  shootTimer = shootTimer + 1

  // 32 はスペースキーのキーコード
  if (keyIsDown(32) && shootTimer > 8) {
    bullets.push({ x: playerX, y: 345 })
    shootTimer = 0
  }

  fill(255, 255, 100)

  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i]

    // 弾は上に向かって飛ぶ
    b.y = b.y - 7

    rect(b.x - 2, b.y, 4, 10)

    if (b.y < -10) {
      bullets.splice(i, 1)
    }
  }

  enemyTimer = enemyTimer + 1

  if (enemyTimer > 40) {
    enemies.push({
      x: random(20, 380),
      y: -20,
      speed: random(1, 3),
    })

    enemyTimer = 0
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i]

    e.y = e.y + e.speed

    fill(255, 80, 80)
    circle(e.x, e.y, 25)

    let isDestroyed = false

    // 敵1体ごとに、全部の弾との距離を調べる (二重ループの当たり判定)
    for (let j = bullets.length - 1; j >= 0; j--) {
      if (dist(bullets[j].x, bullets[j].y, e.x, e.y) < 15) {
        bullets.splice(j, 1)
        isDestroyed = true
        score = score + 1
        break
      }
    }

    if (isDestroyed) {
      enemies.splice(i, 1)
      continue
    }

    // 敵がプレイヤーに触れたらゲームオーバー
    if (dist(playerX, 365, e.x, e.y) < 20) {
      isGameOver = true
    }

    if (e.y > 420) {
      enemies.splice(i, 1)
    }
  }

  fill(255)
  textSize(18)
  textAlign(LEFT, TOP)
  text("Score: " + score, 10, 10)

  fill(150)
  textSize(12)
  text("Arrow keys: move / Space: shoot", 10, 385)
}

function mousePressed() {
  if (isGameOver) {
    score = 0
    isGameOver = false
    bullets.length = 0
    enemies.length = 0
    playerX = 200
  }
}
