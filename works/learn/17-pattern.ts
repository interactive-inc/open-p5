// テーマ: ループ + sin で動くパターンを作る

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const x = 10 + i * 20
      const y = 10 + j * 20

      // i と j で sin の位相をずらすと、波が伝わるように見える
      // frameCount を足しているので時間とともに動く
      const size = sin(i * 0.5 + frameCount * 0.05) * 5 + sin(j * 0.5 + frameCount * 0.03) * 5 + 10

      // 位置によって色を変える
      fill(i * 12, j * 12, 200)
      circle(x, y, size)
    }
  }
}
