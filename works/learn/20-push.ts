// テーマ: 配列への追加と削除。push と shift

// 空の配列から始める
const xPositions: number[] = []
const maxCount = 50

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // push で配列の最後に値を追加する。毎フレーム1個増える
  xPositions.push(mouseX)

  // 50個を超えたら shift で最初 (一番古い) の値を削除する
  if (xPositions.length > maxCount) {
    xPositions.shift()
  }

  for (let i = 0; i < xPositions.length; i++) {
    // i が小さい = 古い記録。古いほど薄く小さく描く
    const alpha = map(i, 0, xPositions.length, 50, 255)
    const size = map(i, 0, xPositions.length, 5, 30)

    fill(255, 100, 200, alpha)
    circle(xPositions[i], 200, size)
  }
}
