// テーマ: 擬似3D。z (奥行き) を持たせて遠近感を出す

const stars: { x: number; y: number; z: number }[] = []

function setup() {
  createCanvas(400, 400)

  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(-200, 200),
      y: random(-200, 200),

      // z = 奥行き。大きいほど遠い
      z: random(400),
    })
  }
}

function draw() {
  background(0)

  // translate で原点 (0, 0) を画面中央に移動する
  translate(200, 200)
  noStroke()

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i]

    // z を減らす = 星が手前に近づいてくる
    star.z = star.z - 2

    // 手前を通り過ぎたら奥に戻す
    if (star.z < 1) {
      star.x = random(-200, 200)
      star.y = random(-200, 200)
      star.z = 400
    }

    // 位置を z で割るのが遠近法の基本。遠いものほど中央に寄る
    const sx = map(star.x / star.z, 0, 1, 0, 200)
    const sy = map(star.y / star.z, 0, 1, 0, 200)

    // 近い星ほど大きく描く
    const size = map(star.z, 0, 400, 4, 0)

    fill(255)
    circle(sx, sy, size)
  }
}
