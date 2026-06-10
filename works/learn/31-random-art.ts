// テーマ: ジェネラティブアートの入口。random で毎回違う絵を生成する

function setup() {
  createCanvas(400, 400)

  // draw ではなく setup に描く = 1回だけ実行。リロードするたび違う絵になる
  background(20)
  noStroke()

  for (let i = 0; i < 100; i++) {
    // random(400) は 0〜400 のランダムな数を返す
    const x = random(400)
    const y = random(400)

    // random(5, 50) のように範囲も指定できる
    const size = random(5, 50)

    // 色も透明度もランダムにする
    fill(random(255), random(255), random(255), random(100, 200))
    circle(x, y, size)
  }
}
