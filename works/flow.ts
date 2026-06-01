function setup() {
  createCanvas(600, 600)
  background(10)
  strokeWeight(0.8)
  noLoop()
}

function draw() {
  for (let i = 0; i < 4000; i++) {
    const x = random(width)
    const y = random(height)
    const angle = noise(x * 0.004, y * 0.004) * TWO_PI * 3
    const len = random(10, 40)
    const hue = noise(x * 0.003, y * 0.003) * 260 + 180
    colorMode(HSB, 360, 100, 100, 100)
    stroke(hue, 60, 90, 30)
    line(x, y, x + cos(angle) * len, y + sin(angle) * len)
  }
}
