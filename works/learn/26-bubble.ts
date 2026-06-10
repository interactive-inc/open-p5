// テーマ: 泡。上に浮かびながら sin で左右に揺れる

const bubbles: { x: number; y: number; size: number; speed: number; wobble: number }[] = []

function setup() {
  createCanvas(400, 400)

  for (let i = 0; i < 30; i++) {
    bubbles.push({
      x: random(400),
      y: random(400),
      size: random(10, 40),
      speed: random(0.5, 2),

      // wobble = 揺れの開始位置。バラバラにしないと全部の泡が同じ揺れ方になる
      wobble: random(1000),
    })
  }
}

function draw() {
  background(10, 20, 50)
  noFill()

  for (let i = 0; i < bubbles.length; i++) {
    const bub = bubbles[i]

    // 大きい泡ほど濃く描く
    const alpha = map(bub.size, 10, 40, 100, 200)

    stroke(150, 200, 255, alpha)
    strokeWeight(1.5)

    // x に sin を足すと左右にゆらゆら揺れる
    circle(bub.x + sin(bub.wobble + frameCount * 0.02) * 20, bub.y, bub.size)

    // y を減らす = 上に動く
    bub.y = bub.y - bub.speed

    // 画面の上に消えたら下から再登場
    if (bub.y < -bub.size) {
      bub.y = 400 + bub.size
      bub.x = random(400)
    }
  }
}
