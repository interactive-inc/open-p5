// テーマ: いろいろな図形を組み合わせて絵を描く

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  fill(200, 100, 100)

  // rect(左上x, 左上y, 幅, 高さ) で四角。家の本体
  rect(120, 200, 160, 120)

  fill(180, 80, 80)

  // triangle(x1,y1, x2,y2, x3,y3) で三角。屋根
  triangle(120, 200, 200, 130, 280, 200)

  fill(255, 220, 100)

  // ドア
  rect(175, 250, 50, 70)

  fill(150, 200, 255)

  // 窓を2つ
  rect(140, 220, 30, 30)
  rect(230, 220, 30, 30)
}
