// テーマ: 条件分岐。if で「もし〜なら」を表現する

function setup() {
  createCanvas(400, 400)
}

function draw() {
  // マウスが画面の右半分にあるかどうかで背景色を変える
  if (mouseX > 200) {
    background(50, 100, 200)
  } else {
    background(200, 50, 100)
  }

  fill(255)
  noStroke()
  circle(mouseX, mouseY, 40)
}
