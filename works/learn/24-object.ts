// テーマ: オブジェクト。関連する値に名前を付けてまとめる

// 配列だと ball[0] が何か分からないが、ball.x なら意味が分かる
const ball = {
  x: 200,
  y: 200,
  vx: 3,
  vy: 2,
  size: 40,
}

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)

  fill(255, 150, 50)
  noStroke()

  // 「.」 でオブジェクトの中の値を取り出す
  circle(ball.x, ball.y, ball.size)

  // const のオブジェクトでも、中身のプロパティは変更できる
  ball.x = ball.x + ball.vx
  ball.y = ball.y + ball.vy

  // size / 2 = 半径。円のフチで跳ね返るようにする
  if (ball.x > 400 - ball.size / 2 || ball.x < ball.size / 2) {
    ball.vx = ball.vx * -1
  }

  if (ball.y > 400 - ball.size / 2 || ball.y < ball.size / 2) {
    ball.vy = ball.vy * -1
  }
}
