// テーマ: キーボード入力。矢印キーで動かす

let x = 200
let y = 200

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  // keyIsDown は「そのキーが押されている間ずっと」true になる
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 3
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 3
  }

  if (keyIsDown(UP_ARROW)) {
    y = y - 3
  }

  if (keyIsDown(DOWN_ARROW)) {
    y = y + 3
  }

  fill(100, 255, 200)
  noStroke()
  circle(x, y, 40)
}
