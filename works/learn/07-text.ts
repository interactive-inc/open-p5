// テーマ: テキストの描画。変数の中身を画面で確認するのにも便利

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255)

  // 文字の大きさと揃え方を決めてから text を呼ぶ
  textSize(48)
  textAlign(CENTER, CENTER)

  // text("文字列", x, y) で描画
  text("Hello p5!", 200, 180)

  textSize(20)
  fill(150)

  // 文字列は + でつなげられる。変数の中身を表示するのに便利
  text("x: " + mouseX + " y: " + mouseY, 200, 260)
}
