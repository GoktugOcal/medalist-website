import { cpSync, mkdirSync, rmSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const out = join(root, ".lambda")

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
cpSync(join(root, "lambda", "handler.mjs"), join(out, "handler.mjs"))
cpSync(join(root, "dist"), join(out, "dist"), { recursive: true })

console.log("Lambda package ready in .lambda/")
