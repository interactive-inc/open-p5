// テーマ: 波の重ね描き。位相をずらした sin を複数並べる

function setup() {
  createCanvas(400, 400)
}

function draw() {
  // background の2つ目の引数は透明度。小さくすると前のフレームがうっすら残る
  background(20, 25)

  noFill()
  strokeWeight(2)

  for (let wave = 0; wave < 5; wave++) {
    // 波ごとに色を変える
    const r = map(wave, 0, 5, 255, 100)
    const b = map(wave, 0, 5, 100, 255)

    stroke(r, 150, b, 150)

    beginShape()

    for (let x = 0; x < 400; x++) {
      const offset = wave * 30

      // wave * 0.8 が位相のずれ。波ごとにタイミングがずれて動く
      const y =
        200 + sin(x * 0.02 + frameCount * 0.03 + wave * 0.8) * (50 + wave * 15) + offset - 60

      vertex(x, y)
    }

    endShape()
  }
}
