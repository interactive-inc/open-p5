// テーマ: マウスの軌跡。x と y の2つの配列で位置の履歴を記録する

const trailX: number[] = []
const trailY: number[] = []
const maxLength = 80

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // 同じタイミングで両方に push するので、trailX[i] と trailY[i] はペアになる
  trailX.push(mouseX)
  trailY.push(mouseY)

  if (trailX.length > maxLength) {
    trailX.shift()
    trailY.shift()
  }

  for (let i = 0; i < trailX.length; i++) {
    // ratio は 0〜1。古い点ほど 0 に近い
    const ratio = i / trailX.length

    // 新しい点ほど大きく濃くなる = 尾を引いて見える
    const size = ratio * 30
    const alpha = ratio * 255

    fill(255, 150, 50, alpha)
    circle(trailX[i], trailY[i], size)
  }
}
