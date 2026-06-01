function setup() {
  createCanvas(600, 600)
  background(245, 235, 210)
  noLoop()
}

function draw() {
  for (let arc = 0; arc < 18; arc++) {
    const cx = random(100, 500)
    const cy = random(100, 500)
    const r = random(30, 180)
    const a0 = random(TWO_PI)
    const a1 = a0 + random(PI * 0.3, PI * 1.4)
    for (let p = 0; p < 1200; p++) {
      const a = random(a0, a1)
      const jitter = randomGaussian(0, 3)
      const x = cx + cos(a) * (r + jitter)
      const y = cy + sin(a) * (r + jitter)
      const alpha = random(20, 80)
      stroke(80 + random(40), 50 + random(30), 20 + random(20), alpha)
      point(x, y)
    }
  }
}
