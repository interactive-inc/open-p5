// テーマ: キャッチゲーム。落ちてくるアイテムを受け皿で取る

let score = 0
const items: { x: number; y: number; speed: number }[] = []
let spawnTimer = 0

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20, 30, 50)
  noStroke()

  const paddleX = mouseX
  const paddleY = 370
  const paddleWidth = 80

  fill(100, 200, 255)
  rect(paddleX - paddleWidth / 2, paddleY, paddleWidth, 15, 8)

  // タイマーを毎フレーム増やし、30フレームごとにアイテムを追加する
  spawnTimer = spawnTimer + 1

  if (spawnTimer > 30) {
    items.push({
      x: random(20, 380),
      y: -10,
      speed: random(2, 5),
    })

    spawnTimer = 0
  }

  // ループ中に splice で要素を消すので、後ろから前へ逆順にまわす
  // 前からまわすと、消した瞬間に番号がずれて次の要素を飛ばしてしまう
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i]

    item.y = item.y + item.speed

    fill(255, 200, 50)
    circle(item.x, item.y, 20)

    // アイテムがパドルの範囲内 (縦も横も) に入ったらキャッチ成功
    if (
      item.y > paddleY - 10 &&
      item.y < paddleY + 15 &&
      item.x > paddleX - paddleWidth / 2 &&
      item.x < paddleX + paddleWidth / 2
    ) {
      score = score + 1

      // splice(i, 1) で配列から i 番目を取り除く
      items.splice(i, 1)
      continue
    }

    // 取り逃して画面外に出たアイテムも消す
    if (item.y > 420) {
      items.splice(i, 1)
    }
  }

  fill(255)
  textSize(20)
  textAlign(LEFT, TOP)
  text("Score: " + score, 10, 10)
}
