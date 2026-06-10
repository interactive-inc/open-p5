// テーマ: タイルパターン。グリッドの各セルで図形を回転させる

const tileSize = 40

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const x = col * tileSize + tileSize / 2
      const y = row * tileSize + tileSize / 2

      // (row + col) で位相をずらすと、斜め方向に波打って回る
      const angle = frameCount * 0.02 + (row + col) * 0.3

      push()

      // セルの中心に原点を移してから回転する。rotate は原点を軸に回るため
      translate(x, y)
      rotate(angle)
      noFill()

      // 偶数セルと奇数セルで描く図形を変える
      const isEven = (row + col) % 2 === 0

      if (isEven) {
        stroke(255, 100, 150)
        rect(-15, -15, 30, 30)
      } else {
        stroke(100, 200, 255)
        circle(0, 0, 30)
      }

      pop()
    }
  }
}
