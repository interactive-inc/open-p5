let t = 0

function setup() {
  createCanvas(600, 600)
  colorMode(HSB, 1, 1, 1, 1)
}

function draw() {
  background(0, 0, 0.06)
  const cols = 28
  const size = width / cols
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < cols; y++) {
      const n = noise(x * 0.18, y * 0.18, t)
      const h = n
      const s = 0.7 + noise(x * 0.3, y * 0.3, t * 0.4) * 0.3
      const b = pow(n, 1.5)
      noStroke()
      fill(h, s, b, 0.85)
      const pad = size * 0.12
      rect(x * size + pad, y * size + pad, size - pad * 2, size - pad * 2, 3)
    }
  }
  t += 0.008
}
