// テーマ: 自作関数。処理をまとめて引数でバリエーションを作る

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  // 同じ関数を引数を変えて4回呼ぶ。位置・サイズ・色が全部違う顔になる
  drawFace(100, 150, 80, 255, 200, 100)
  drawFace(300, 150, 60, 100, 200, 255)
  drawFace(200, 300, 100, 255, 100, 200)
  drawFace(mouseX, mouseY, 50, 200, 255, 100)
}

// 引数: 位置 (x, y)、大きさ (size)、色 (r, g, b)
function drawFace(x: number, y: number, size: number, r: number, g: number, b: number) {
  noStroke()

  fill(r, g, b)
  circle(x, y, size)

  // 目の位置やサイズを size から計算すると、どんな大きさでも形が崩れない
  const eyeOffset = size * 0.15
  const eyeSize = size * 0.15

  fill(255)
  circle(x - eyeOffset, y - eyeOffset, eyeSize)
  circle(x + eyeOffset, y - eyeOffset, eyeSize)

  fill(50)
  circle(x - eyeOffset, y - eyeOffset, eyeSize * 0.5)
  circle(x + eyeOffset, y - eyeOffset, eyeSize * 0.5)

  fill(r * 0.7, g * 0.7, b * 0.7)

  // arc は円弧。0〜PI で下半分 = 口
  arc(x, y + eyeOffset, size * 0.3, size * 0.15, 0, PI)
}
