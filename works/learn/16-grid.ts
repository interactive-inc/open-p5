// テーマ: 二重ループ。for の中に for を入れてグリッドを作る

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
  noStroke()

  // 外側のループが行 (縦方向)
  for (let row = 0; row < 10; row++) {
    // 内側のループが列 (横方向)。行ごとに10回まわる = 合計100個
    for (let col = 0; col < 10; col++) {
      const x = 20 + col * 40
      const y = 20 + row * 40

      // dist は2点間の距離。マウスに近いほど小さい値になる
      const d = dist(x, y, mouseX, mouseY)

      // マウスに近い円ほど大きくする
      const size = map(d, 0, 300, 30, 5)

      fill(map(col, 0, 10, 100, 255), 100, map(row, 0, 10, 100, 255))
      circle(x, y, size)
    }
  }
}
