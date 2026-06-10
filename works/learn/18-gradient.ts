// テーマ: グラデーション。細い線を1本ずつ色を変えながら並べる

function setup() {
  createCanvas(400, 400)
}

function draw() {
  // color() で色を変数に入れておける
  const colorTop = color(255, 50, 100)
  const colorBottom = color(50, 50, 255)

  // y を 0〜399 まで動かして、横線を400本描く
  for (let y = 0; y < 400; y++) {
    // ratio は 0〜1。画面の上端で 0、下端で 1
    const ratio = y / 400

    // lerpColor(色A, 色B, 割合) で2色の中間色を計算する
    const c = lerpColor(colorTop, colorBottom, ratio)

    stroke(c)
    line(0, y, 400, y)
  }

  noStroke()

  // fill の4つ目の引数は透明度 (0〜255)
  fill(255, 200)
  circle(200, 200, 100 + sin(frameCount * 0.03) * 30)
}
