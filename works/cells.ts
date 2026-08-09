let t = 0

function setup() {
  createCanvas(600, 600)
  colorMode(HSB, 1, 0.6, 0.5, 0.5)
}

function draw() {
  background(1, 1, 0.1)
  const cols = 60
  const size = width / cols
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < cols; y++) {
      const n = noise(x * 2, y * 3, t * 0.5)
      const h = n
      const s = 0.7 + noise(x * 0.3, y * 5, t) * 0.3
      const b = pow(n, 3)
      noStroke()
      fill(h, s, b, 0.85)
      const pad = size * 0.12
      rect(x * size + pad, y * size + pad, size - pad * 2, size - pad * 2, 3)
    }
  }
  t += 0.008
}
