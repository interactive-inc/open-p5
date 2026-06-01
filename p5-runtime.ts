// ブラウザ側で p5 をグローバルモードで起動するためのランタイム。
// これをバンドルして classic script として読み込むと、createCanvas など全関数が
// window に展開され、後続スクリプトの setup()/draw() を p5 が拾う。
import "p5/global"
