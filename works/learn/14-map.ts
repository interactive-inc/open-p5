// テーマ: map。値の範囲を別の範囲に変換する

function setup() {
  createCanvas(400, 400)
}

function draw() {
  // map(値, 元の最小, 元の最大, 新しい最小, 新しい最大)
  // mouseX は 0〜400 で動く。それを色の範囲 0〜255 に変換する
  const r = map(mouseX, 0, 400, 0, 255)

  // 範囲を逆 (255〜0) にすると、反対方向に変化する
  const b = map(mouseX, 0, 400, 255, 0)

  // mouseY をサイズ 20〜200 に変換
  const size = map(mouseY, 0, 400, 20, 200)

  background(20)

  fill(r, 100, b)
  noStroke()
  circle(200, 200, size)
}
