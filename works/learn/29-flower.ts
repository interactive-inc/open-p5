// テーマ: 座標変換。translate と rotate で花びらを円形に並べる

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  drawFlower(100, 150, 6, 30, [255, 100, 150])
  drawFlower(300, 120, 8, 20, [100, 200, 255])
  drawFlower(200, 300, 5, 40, [255, 200, 50])
  drawFlower(mouseX, mouseY, 7, 25, [200, 100, 255])
}

function drawFlower(x: number, y: number, petals: number, petalSize: number, col: number[]) {
  // push で今の座標系を保存。pop で元に戻す
  // これがないと translate が次の花にも影響してしまう
  push()

  // 原点を花の中心に移動。以降は (0, 0) が花の中心になる
  translate(x, y)
  noStroke()

  for (let i = 0; i < petals; i++) {
    // TWO_PI (一周) を花びらの数で等分する
    const angle = (TWO_PI / petals) * i + frameCount * 0.01

    fill(col[0], col[1], col[2], 180)

    // cos と sin で円周上の位置を計算する
    const px = cos(angle) * petalSize
    const py = sin(angle) * petalSize

    ellipse(px, py, petalSize * 1.5, petalSize * 0.8)
  }

  fill(255, 220, 50)
  circle(0, 0, petalSize * 0.6)
  pop()
}
