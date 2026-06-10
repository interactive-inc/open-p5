// テーマ: 雨。たくさんの粒を配列で管理して、画面外に出たらリサイクルする

const dropCount = 100
const dropX: number[] = []
const dropY: number[] = []
const dropSpeed: number[] = []

function setup() {
  createCanvas(400, 400)

  // setup で雨粒100個分の初期値を作る
  for (let i = 0; i < dropCount; i++) {
    dropX.push(random(400))

    // 画面より上 (-400〜0) から始めると、バラバラに降ってくる
    dropY.push(random(-400, 0))

    // 速度をランダムにすると奥行き感が出る
    dropSpeed.push(random(2, 6))
  }
}

function draw() {
  background(20, 20, 40)

  stroke(100, 150, 255, 150)
  strokeWeight(1)

  for (let i = 0; i < dropCount; i++) {
    // 速い粒ほど長く描く
    const length = dropSpeed[i] * 3

    line(dropX[i], dropY[i], dropX[i], dropY[i] + length)

    dropY[i] = dropY[i] + dropSpeed[i]

    // 画面の下に出たら上に戻す = 同じ粒を使い回す
    if (dropY[i] > 400) {
      dropY[i] = random(-50, 0)
      dropX[i] = random(400)
    }
  }
}
