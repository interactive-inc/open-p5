// テーマ: パーリンノイズ。random と違い「なめらかに」変化するランダム値

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  stroke(255, 150, 50)
  strokeWeight(2)
  noFill()

  // beginShape〜endShape で頂点をつないだ線を描く
  beginShape()

  for (let x = 0; x < 400; x++) {
    // noise は 0〜1 を返す。引数が近いほど近い値が返る = なめらか
    // 2つ目の引数に時間を渡すと、形が少しずつ変わっていく
    const y = noise(x * 0.01, frameCount * 0.01) * 300 + 50

    vertex(x, y)
  }

  endShape()

  stroke(100, 150, 255)

  beginShape()

  for (let x = 0; x < 400; x++) {
    // x のかけ算を小さくすると、よりゆるやかな曲線になる
    const y = noise(x * 0.005, frameCount * 0.005 + 100) * 300 + 50

    vertex(x, y)
  }

  endShape()
}
