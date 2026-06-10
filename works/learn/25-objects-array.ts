// テーマ: オブジェクトの配列。たくさんのキャラクターを管理する定番の形

// 型を書いておくと、プロパティ名を間違えたときに気づける
const balls: { x: number; y: number; vx: number; vy: number; r: number; g: number; b: number }[] =
  []

function setup() {
  createCanvas(400, 400)

  // 15個のボールをランダムな状態で作って配列に追加する
  for (let i = 0; i < 15; i++) {
    balls.push({
      x: random(400),
      y: random(400),
      vx: random(-3, 3),
      vy: random(-3, 3),
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    })
  }
}

function draw() {
  background(20)
  noStroke()

  for (let i = 0; i < balls.length; i++) {
    // 長い balls[i] を短い名前に入れておくと読みやすい
    const b = balls[i]

    fill(b.r, b.g, b.b)
    circle(b.x, b.y, 30)

    // 各ボールが自分の速度で動く
    b.x = b.x + b.vx
    b.y = b.y + b.vy

    if (b.x > 400 || b.x < 0) {
      b.vx = b.vx * -1
    }

    if (b.y > 400 || b.y < 0) {
      b.vy = b.vy * -1
    }
  }
}
