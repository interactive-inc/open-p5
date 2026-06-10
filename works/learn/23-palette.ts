// テーマ: 色パレット。色の配列と % (余り) で色を順番にくりかえす

const palette = [
  [255, 89, 94],
  [255, 202, 58],
  [138, 201, 38],
  [25, 130, 196],
  [106, 76, 147],
]

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  for (let i = 0; i < 25; i++) {
    // i % 5 は 0,1,2,3,4,0,1,2... とくりかえす。配列の範囲を超えない
    const col = palette[i % palette.length]

    // i % 5 で列、floor(i / 5) で行が決まる。1次元のループでグリッドを作る方法
    const x = (i % 5) * 80 + 40
    const y = floor(i / 5) * 80 + 40

    fill(col[0], col[1], col[2])

    // rect の5つ目の引数は角の丸み
    rect(x - 30, y - 30, 60, 60, 8)
  }
}
