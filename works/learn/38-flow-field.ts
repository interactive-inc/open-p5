// テーマ: フローフィールド。noise で決めた「流れ」に沿って点を動かす

const walkers: { x: number; y: number }[] = []

// noise に渡す座標の縮尺。小さいほどゆるやかな流れになる
const noiseScale = 0.005

function setup() {
  createCanvas(400, 400)

  // background が setup だけなので、点の軌跡が線として積み重なっていく
  background(20)

  for (let i = 0; i < 500; i++) {
    walkers.push({ x: random(400), y: random(400) })
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    const w = walkers[i]

    // 今いる場所の noise 値を「進む方向 (角度)」として使う
    // 近い場所では近い角度になるので、流れがなめらかにつながる
    const angle = noise(w.x * noiseScale, w.y * noiseScale, frameCount * 0.003) * TWO_PI * 2

    // 角度の方向に少し進む
    w.x = w.x + cos(angle) * 1.5
    w.y = w.y + sin(angle) * 1.5

    const r = map(noise(w.x * 0.01, w.y * 0.01), 0, 1, 100, 255)
    const b = map(noise(w.y * 0.01, w.x * 0.01), 0, 1, 100, 255)

    stroke(r, 100, b, 20)
    strokeWeight(1)
    point(w.x, w.y)

    // 画面外に出たらランダムな場所に置き直す
    if (w.x < 0 || w.x > 400 || w.y < 0 || w.y > 400) {
      w.x = random(400)
      w.y = random(400)
    }
  }
}
