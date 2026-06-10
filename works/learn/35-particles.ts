// テーマ: パーティクル。寿命を持つ粒を大量に動かす

const particles: {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  r: number
  g: number
  b: number
}[] = []

function setup() {
  createCanvas(400, 400)

  for (let i = 0; i < 100; i++) {
    particles.push(createParticle(200, 300))
  }
}

function draw() {
  // 透明度の低い background で軌跡をうっすら残す
  background(20, 30)
  noStroke()

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    p.x = p.x + p.vx
    p.y = p.y + p.vy

    // 重力。少しずつ下向きの速度が増える
    p.vy = p.vy + 0.02

    // 寿命を毎フレーム減らす
    p.life = p.life - 1

    // 寿命が尽きたら、マウス位置から新しい粒として生まれ変わる
    if (p.life <= 0) {
      const fresh = createParticle(mouseX, mouseY)
      particles[i] = fresh
      continue
    }

    // 寿命の残りに応じて薄く小さくなっていく
    const alpha = map(p.life, 0, p.maxLife, 0, 255)
    const size = map(p.life, 0, p.maxLife, 0, 8)

    fill(p.r, p.g, p.b, alpha)
    circle(p.x, p.y, size)
  }
}

// オブジェクトを返す関数。粒の作り方を1箇所にまとめる
function createParticle(x: number, y: number) {
  return {
    x: x,
    y: y,
    vx: random(-2, 2),

    // 上向き (マイナス) の初速で噴き上がる
    vy: random(-3, -0.5),
    life: random(40, 80),
    maxLife: 80,
    r: random(200, 255),
    g: random(50, 150),
    b: random(20, 80),
  }
}
