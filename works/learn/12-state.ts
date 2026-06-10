// テーマ: 状態。変数に true/false を持たせてクリックで切り替える

// boolean (真偽値)。true か false のどちらかが入る
let isOn = false

function setup() {
  createCanvas(400, 400)
}

function draw() {
  // 状態によって描くものを丸ごと変える
  if (isOn) {
    background(255, 220, 50)
    fill(50)
    textSize(32)
    textAlign(CENTER, CENTER)
    text("ON", 200, 200)
  } else {
    background(30)
    fill(100)
    textSize(32)
    textAlign(CENTER, CENTER)
    text("OFF", 200, 200)
  }
}

// クリックした瞬間に1回だけ呼ばれる p5 の特別な関数
function mousePressed() {
  // !isOn は「isOn の反対」。true なら false に、false なら true になる
  isOn = !isOn
}
