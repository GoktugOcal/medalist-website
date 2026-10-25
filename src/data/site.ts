export const SITE_NAME = "MEDALIST LAB"
export const SITE_TITLE = "MEDALIST LAB — Brussels Bike Workshop"
export const SITE_DESCRIPTION =
  "MEDALIST LAB — precision bike repair and workshop in Auderghem, Brussels. Tune-ups, brakes, wheels, drivetrain, and custom builds."
export const SITE_ORIGIN = "https://www.goktugocal.com"
export const OG_IMAGE_PATH = "og.jpg"
export const OG_IMAGE_ALT =
  "Road bike in the MEDALIST LAB workshop, Auderghem, Brussels"
export const OG_IMAGE_WIDTH = "1200"
export const OG_IMAGE_HEIGHT = "630"

export function siteBasePath() {
  return import.meta.env.BASE_URL.replace(/\/$/, "")
}

export function absoluteUrl(path = "/") {
  const origin =
    typeof window !== "undefined" ? window.location.origin : SITE_ORIGIN
  const base = siteBasePath()
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (normalized === "/") return `${origin}${base || ""}/`
  return `${origin}${base}${normalized}`
}

export function assetUrl(file: string) {
  if (/^https?:\/\//i.test(file)) return file
  const origin =
    typeof window !== "undefined" ? window.location.origin : SITE_ORIGIN
  const base = import.meta.env.BASE_URL
  return `${origin}${base}${file.replace(/^\//, "")}`
}
