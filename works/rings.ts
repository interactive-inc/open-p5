let t = 0

function setup() {
  createCanvas(600, 600)
  noFill()
}

function draw() {
  background(8, 8, 12, 18)
  translate(width / 2, height / 2)
  for (let i = 0; i < 12; i++) {
    const r = 40 + i * 22
    const speed = (i % 2 === 0 ? 1 : -1) * (0.008 + i * 0.0015)
    const wave = sin(t * 0.7 + i * 0.5) * 18
    strokeWeight(1.2 - i * 0.05)
    stroke(160 + i * 8, 180, 220, 180)
    beginShape()
    for (let a = 0; a < TWO_PI; a += 0.04) {
      const rr = r + sin(a * 6 + t * speed * 60) * wave
      vertex(cos(a) * rr, sin(a) * rr)
    }
    endShape(CLOSE)
  }
  t += 0.016
}
