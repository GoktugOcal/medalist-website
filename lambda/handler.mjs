import { existsSync, readFileSync, statSync } from "node:fs"
import { extname, join, normalize, sep } from "node:path"
import { fileURLToPath } from "node:url"

const DIST = join(fileURLToPath(new URL(".", import.meta.url)), "dist")

const MIME = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

const BINARY = new Set([".ico", ".jpeg", ".jpg", ".png", ".webp", ".woff", ".woff2"])

function json(statusCode, payload) {
  return {
    statusCode,
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  }
}

function requestPath(event) {
  const raw = event.rawPath || event.path || "/"
  return decodeURIComponent(raw.split("?")[0] || "/")
}

function resolveFile(reqPath) {
  const cleaned = normalize(reqPath).replaceAll("\\", "/")
  if (cleaned.includes("..")) return null

  const relative = cleaned === "/" ? "index.html" : cleaned.replace(/^\//, "")
  const candidate = join(DIST, relative)
  const root = DIST.endsWith(sep) ? DIST : DIST + sep
  if (candidate !== DIST && !candidate.startsWith(root)) return null

  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate
  if (!extname(relative)) return join(DIST, "index.html")
  return null
}

function fileResponse(filePath) {
  const ext = extname(filePath).toLowerCase()
  const binary = BINARY.has(ext)
  const body = readFileSync(filePath)
  const hashedAsset = filePath.includes(`${sep}assets${sep}`)

  return {
    statusCode: 200,
    headers: {
      "content-type": MIME[ext] || "application/octet-stream",
      "cache-control": hashedAsset
        ? "public, max-age=31536000, immutable"
        : "no-cache",
    },
    body: binary ? body.toString("base64") : body.toString("utf8"),
    isBase64Encoded: binary,
  }
}

export async function handler(event) {
  const path = requestPath(event)
  const method = event.requestContext?.http?.method || event.httpMethod || "GET"

  if (method !== "GET" && method !== "HEAD") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  // Later: Cal.com / Supabase booking API can live under /api/*
  if (path === "/api" || path.startsWith("/api/")) {
    return json(404, { error: "Not implemented" })
  }

  const filePath = resolveFile(path)
  if (!filePath || !existsSync(filePath)) {
    return { statusCode: 404, body: "Not Found" }
  }

  const response = fileResponse(filePath)
  if (method === "HEAD") return { ...response, body: "" }
  return response
}
