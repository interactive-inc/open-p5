// テーマ: マウス入力。mouseX と mouseY は p5 が自動で更新する変数

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255, 100, 200)
  noStroke()

  // mouseX, mouseY にはマウスの現在位置が入っている
  circle(mouseX, mouseY, 50)
}
