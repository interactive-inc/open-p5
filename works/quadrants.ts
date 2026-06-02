function setup() {
  createCanvas(400, 400)
}

function draw() {
  if (mouseX > 200 && mouseY < 200) {
    background('yellow')
  } else if (mouseX < 200 && mouseY < 200) {
    background('pink')
  } else if (mouseX > 200 && mouseY > 200) {
    background('orange')
  } else {
    background('blue')
  }

  if (mouseY > 200) {
    fill('black')
  } else {
    fill('green')
  }

  circle(200, 200, 30)
}
