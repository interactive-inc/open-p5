// テーマ: 変数。1箇所変えるだけで使っている場所が全部変わる

// const で変数を作る。size という名前に 80 を入れておく
const size = 80
const gap = 100

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255, 80, 80)

  // 変数は計算にも使える。200 - 100 = 100 の位置
  circle(200 - gap, 200, size)

  fill(80, 255, 80)
  circle(200, 200, size)

  fill(80, 80, 255)
  circle(200 + gap, 200, size)
}
