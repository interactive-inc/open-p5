// テーマ: 螺旋。角度と半径を同時に増やしながら点を打つ

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  translate(200, 200)
  noStroke()

  const pointCount = 300

  for (let i = 0; i < pointCount; i++) {
    // i が増えるほど角度が進む。frameCount を足すと全体が回転する
    const angle = i * 0.15 + frameCount * 0.02

    // i が増えるほど半径も大きくなる = 外に広がる螺旋
    const radius = i * 0.6

    // 角度と半径から座標を計算する (極座標 → xy座標の変換)
    const x = cos(angle) * radius
    const y = sin(angle) * radius

    // 外側の点ほど大きく
    const size = map(i, 0, pointCount, 2, 8)

    // sin/cos に i を渡すと色が螺旋に沿ってうねる
    const hueR = map(sin(i * 0.05 + frameCount * 0.01), -1, 1, 100, 255)
    const hueB = map(cos(i * 0.05 + frameCount * 0.01), -1, 1, 100, 255)

    fill(hueR, 100, hueB)
    circle(x, y, size)
  }
}
