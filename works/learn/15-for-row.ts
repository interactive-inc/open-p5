// テーマ: for ループ。同じ処理をくりかえして円を並べる

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // i = 0, 1, 2, ... 7 と8回くりかえす
  for (let i = 0; i < 8; i++) {
    // i を使って位置を計算する。i が増えるごとに 50 ずつ右にずれる
    const x = 30 + i * 50

    // i を色にも使う。左から右へ色が変化する
    const hue = map(i, 0, 8, 0, 255)

    fill(hue, 150, 255 - hue)
    circle(x, 200, 40)
  }
}
