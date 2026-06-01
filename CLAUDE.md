# open-p5

p5.js の作品を管理するリポジトリ。

## 構成

- `cli.ts` — 開発サーバー（Bun で起動）
- `p5-runtime.ts` — p5 を IIFE バンドルしてブラウザに配信するエントリポイント
- `global.d.ts` — p5 グローバル型定義の読み込み
- `portless.json` — `https://p5.open.localhost` でアクセスするための設定
- `works/` — スケッチ置き場。`works/foo.ts` または `works/foo/sketch.ts`

## 開発サーバー

```bash
make dev
```

portless 経由で `https://p5.open.localhost` でスケッチ一覧、`/foo` で各スケッチを表示。ファイル変更時にホットリロード。

## スケッチの書き方

`works/` に `.ts` ファイルを置くだけ。p5 グローバルモード（`setup`/`draw` を window に定義する形式）。

```ts
function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(20)
}
```

import 不要。`createCanvas`/`background` 等の p5 関数はすべてグローバルで使える。

## コミットの原則

このリポジトリはオープンソース。コミット前に以下を確認すること。

コミットしてはいけないもの:

- APIキー・トークン・パスワード等の認証情報
- 個人情報（メールアドレス、氏名、住所など）
- 他社の商標・ロゴ・ブランド素材
- ライセンスが不明または商用利用不可の素材
- 特定のサービスや他者のコードを無断で複製したもの

## 技術メモ

- p5 バンドルを `format: "iife"` で出力する理由: フラットスクリプトだと `var PI` がグローバルに漏れて `Object.defineProperty` が失敗するため
- スケッチを `Bun.Transpiler` でトランスパイルのみ（バンドルしない）する理由: トップレベル関数が `window` に出てグローバルモードが機能するため
- `moduleDetection: "force"` の理由: 複数スケッチで `function setup()` が重複宣言になる TS エラーを回避するため
- `PORT` 環境変数を読む理由: portless がポートを動的に割り当てて渡すため
