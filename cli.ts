#!/usr/bin/env bun

import { watch } from "node:fs"
import { resolve, join } from "node:path"

const ROOT = resolve(import.meta.dir, "works")
const clients = new Set<(data: string) => void>()

const JS = { "content-type": "application/javascript", "cache-control": "no-store" }
const HTML = { "content-type": "text/html" }

function page(slug: string) {
  return `<!doctype html>
<html>
<head><meta charset="utf-8"><title>${slug}</title>
<style>html,body{margin:0;background:#111}</style></head>
<body>
<script type="module">
  new EventSource("/__events").onmessage = (e) => { if (e.data === "reload") location.reload(); };
</script>
<script src="/__p5"></script>
<script src="/__sketch/${slug}"></script>
</body>
</html>`
}

async function sketchPath(slug: string) {
  if (slug.includes("..")) return null
  const flat = join(ROOT, `${slug}.ts`)
  if (await Bun.file(flat).exists()) return flat
  const nested = join(ROOT, slug, "sketch.ts")
  if (await Bun.file(nested).exists()) return nested
  return null
}

let p5Bundle: string | null = null

async function buildP5() {
  if (p5Bundle) return p5Bundle
  const built = await Bun.build({
    entrypoints: [join(import.meta.dir, "p5-runtime.ts")],
    target: "browser",
    minify: true,
    format: "iife",
  })
  if (!built.success) throw new Error(String(built.logs))
  p5Bundle = await built.outputs[0].text()
  return p5Bundle
}

watch(ROOT, { recursive: true }, (_event, filename) => {
  console.log(`[reload] ${filename}`)
  for (const send of clients) send("reload")
})

const server = Bun.serve({
  port: Number(process.env.PORT ?? 0),
  async fetch(req) {
    const { pathname } = new URL(req.url)

    if (pathname === "/__events") {
      let send: (d: string) => void
      const stream = new ReadableStream({
        start(controller) {
          send = (d) => controller.enqueue(`data: ${d}\n\n`)
          clients.add(send)
        },
        cancel() {
          clients.delete(send)
        },
      })
      return new Response(stream, {
        headers: { "content-type": "text/event-stream", "cache-control": "no-cache" },
      })
    }

    if (pathname === "/__p5") {
      try {
        return new Response(await buildP5(), { headers: JS })
      } catch (e) {
        return new Response(`console.error(${JSON.stringify(String(e))})`, { headers: JS })
      }
    }

    if (pathname.startsWith("/__sketch/")) {
      const slug = pathname.slice("/__sketch/".length)
      const entry = await sketchPath(slug)
      if (!entry) return new Response("Not found", { status: 404 })
      const src = await Bun.file(entry).text()
      try {
        // バンドルしないのでトップレベルの setup()/draw() が window に出る = グローバルモード
        const js = new Bun.Transpiler({ loader: "ts" }).transformSync(src)
        return new Response(js, { headers: JS })
      } catch (e) {
        return new Response(`console.error(${JSON.stringify(String(e))})`, { headers: JS })
      }
    }

    const slug = pathname.slice(1).replace(/\/$/, "")
    if (slug && (await sketchPath(slug))) {
      return new Response(page(slug), { headers: HTML })
    }

    const flat = [...new Bun.Glob("**/*.ts").scanSync(ROOT)]
      .filter((f) => !f.endsWith("/sketch.ts"))
      .map((f) => f.replace(/\.ts$/, ""))
    const nested = [...new Bun.Glob("*/sketch.ts").scanSync(ROOT)].map((f) => f.split("/")[0])
    const all = [...new Set([...flat, ...nested])].sort()

    // /learn のようにディレクトリ名が来たら、その中のスケッチだけを一覧にする
    // ルートではサブディレクトリ内を並べず「learn/」のような1件にまとめる
    const inDirectory = slug ? all.filter((s) => s.startsWith(`${slug}/`)) : []
    if (slug && inDirectory.length === 0) return new Response("Not found", { status: 404 })

    const topLevel = [
      ...new Set(all.map((s) => (s.includes("/") ? `${s.split("/")[0]}/` : s))),
    ].sort()
    const entries = slug ? inDirectory : topLevel
    const title = slug || "works"
    const list = entries.map((s) => `<li><a href="/${s}">${s}</a></li>`).join("")
    return new Response(`<!doctype html><meta charset=utf-8><h1>${title}</h1><ul>${list}</ul>`, {
      headers: HTML,
    })
  },
})

console.log(`p5 sketches → http://localhost:${server.port}`)
