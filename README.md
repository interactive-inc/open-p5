# open-p5

p5.js のスケッチを管理するリポジトリ。

## 起動

```bash
make dev
```

`https://p5.open.localhost` でスケッチ一覧、`/foo` で各スケッチを表示。
ファイル変更時にホットリロード。

初回のみ portless のローカル CA 証明書インストールのため sudo を求められる。

## スケッチの追加

`works/foo.ts` を作るだけ。

```ts
function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
}
```

import 不要。p5 の関数はすべてグローバルで使える。
