// テーマ: sin で揺れる動き。frameCount は draw が呼ばれた回数

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  // sin() は -1〜1 を波のようにくりかえす
  // frameCount が増え続けるので、y は 100〜300 をゆっくり往復する
  const y = 200 + sin(frameCount * 0.05) * 100

  // サイズも同じしくみで 20〜80 を往復させる
  const size = 50 + sin(frameCount * 0.03) * 30

  fill(255, 150, 50)
  noStroke()
  circle(200, y, size)
}
