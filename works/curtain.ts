function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0)

  for (let x = 0; x < 400; x += 30) {
    for (let y = 0; y < 350; y++) {
      const xShift = sin(frameCount * 0.03 + y * 0.008) * (y / 200) * 30
      const iro = map(xShift, -30, 30, 0, 255)

      stroke(255, 190, iro)
      point(x + xShift, y)
    }
  }
}
