// テーマ: 配列。複数の値をひとつの変数にまとめる

// [値, 値, ...] が配列。sizes[0] が 20、sizes[1] が 40
const sizes = [20, 40, 60, 80, 100, 120, 140]

// 配列の中に配列も入れられる。colors[0] は [255, 100, 100]
const colors = [
  [255, 100, 100],
  [255, 180, 50],
  [255, 255, 50],
  [100, 255, 100],
  [50, 200, 255],
  [100, 100, 255],
  [200, 50, 255],
]

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // 大きい円から先に描きたいので、後ろ (length - 1) から逆順にループする
  for (let i = sizes.length - 1; i >= 0; i--) {
    // colors[i][0] = i番目の色の赤成分
    fill(colors[i][0], colors[i][1], colors[i][2])
    circle(200, 200, sizes[i])
  }
}
