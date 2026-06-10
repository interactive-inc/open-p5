// テーマ: 対称ペイント。1箇所描くと反転した3箇所にも同時に描かれる

function setup() {
  createCanvas(400, 400)

  // background を setup に置く = 毎フレーム消されないので、描いた絵が残る
  background(20)
}

function draw() {
  // mouseIsPressed はマウスを押している間ずっと true
  if (mouseIsPressed) {
    noStroke()

    const r = map(mouseY, 0, 400, 100, 255)
    const b = map(mouseX, 0, 400, 100, 255)

    fill(r, 150, b, 100)

    const size = random(5, 15)

    // 同じ円を4箇所に描く。「幅 - x」が左右反転、「高さ - y」が上下反転
    circle(mouseX, mouseY, size)
    circle(400 - mouseX, mouseY, size)
    circle(mouseX, 400 - mouseY, size)
    circle(400 - mouseX, 400 - mouseY, size)
  }
}

// キーを押した瞬間に1回だけ呼ばれる
function keyPressed() {
  // c キーで画面をリセット
  if (key === "c") {
    background(20)
  }
}
