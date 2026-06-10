// テーマ: 色の指定。(赤, 緑, 青) それぞれ 0〜255

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  // fill で「これ以降に描く図形」の塗り色が決まる
  fill(255, 100, 50)

  // noStroke で輪郭線を消す
  noStroke()
  circle(150, 200, 120)

  // fill を変えると次の図形から色が変わる
  fill(50, 100, 255)
  circle(250, 200, 120)

  fill(50, 255, 100)

  // stroke は輪郭線の色、strokeWeight は線の太さ
  stroke(255)
  strokeWeight(3)
  circle(200, 300, 80)
}
