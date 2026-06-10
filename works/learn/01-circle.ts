// テーマ: 最初のスケッチ。setup と draw のしくみ

// setup は最初に1回だけ呼ばれる
function setup() {
  // 400 x 400 のキャンバスを作る
  createCanvas(400, 400)
}

// draw は毎秒60回くりかえし呼ばれる
function draw() {
  // 画面全体を暗い色で塗りつぶす
  background(20)

  // circle(x, y, 直径) で円を描く
  circle(200, 200, 100)
}
