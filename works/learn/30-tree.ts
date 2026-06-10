// テーマ: 再帰。関数が自分自身を呼んで木の枝を分岐させる

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  stroke(100, 180, 100)
  strokeWeight(1)

  // 木の根元 (画面下の中央) から描き始める
  translate(200, 380)
  drawBranch(100, 0)
}

function drawBranch(length: number, depth: number) {
  // 停止条件。これがないと無限に自分を呼び続けてフリーズする
  if (length < 4) {
    return
  }

  // マウスの横位置で枝の開き具合が変わる
  const angle = map(mouseX, 0, 400, 0.2, 0.8)

  // 枝分かれするたびに長さが 70% になる
  const shrink = 0.7

  line(0, 0, 0, -length)

  // 原点を枝の先端に移動する
  translate(0, -length)

  // 右の枝。drawBranch の中で drawBranch を呼んでいる = 再帰
  push()
  rotate(angle)
  drawBranch(length * shrink, depth + 1)
  pop()

  // 左の枝
  push()
  rotate(-angle)
  drawBranch(length * shrink, depth + 1)
  pop()
}
