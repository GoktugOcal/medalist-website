import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { findPost } from "../data/journal"
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  absoluteUrl,
  assetUrl,
} from "../data/site"

type PageMeta = {
  title: string
  description: string
  url: string
  image: string
  imageAlt: string
  type: "website" | "article"
}

function metaForPath(pathname: string): PageMeta {
  const url = absoluteUrl(pathname)
  const defaults = {
    url,
    image: assetUrl(OG_IMAGE_PATH),
    imageAlt: OG_IMAGE_ALT,
    type: "website" as const,
  }

  if (pathname === "/booking") {
    return {
      ...defaults,
      title: `Reserve a stand — ${SITE_NAME}`,
      description:
        "Book a workshop stand at MEDALIST LAB in Auderghem, Brussels. Tune-ups, repairs, and custom builds — confirmation by email.",
    }
  }

  if (pathname === "/blog") {
    return {
      ...defaults,
      title: `Blog & workshops — ${SITE_NAME}`,
      description:
        "Care notes, setup guides, and workshop sessions from MEDALIST LAB in Auderghem, Brussels.",
    }
  }

  const postMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (postMatch) {
    const post = findPost(postMatch[1])
    if (post) {
      return {
        title: `${post.title} — ${SITE_NAME}`,
        description: post.excerpt,
        url,
        image: assetUrl(post.src),
        imageAlt: post.alt,
        type: "article",
      }
    }
  }

  return {
    ...defaults,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  }
}

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    document.head.appendChild(el)
  }
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value)
  }
}

function applyMeta(meta: PageMeta) {
  document.title = meta.title

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: meta.description,
  })
  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: meta.title,
  })
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: meta.description,
  })
  upsertMeta('meta[property="og:url"]', {
    property: "og:url",
    content: meta.url,
  })
  upsertMeta('meta[property="og:type"]', {
    property: "og:type",
    content: meta.type,
  })
  upsertMeta('meta[property="og:image"]', {
    property: "og:image",
    content: meta.image,
  })
  upsertMeta('meta[property="og:image:alt"]', {
    property: "og:image:alt",
    content: meta.imageAlt,
  })
  const usingDefaultImage = meta.image.endsWith(`/${OG_IMAGE_PATH}`)
  if (usingDefaultImage) {
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: OG_IMAGE_WIDTH,
    })
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: OG_IMAGE_HEIGHT,
    })
  }
  upsertMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: meta.title,
  })
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: meta.description,
  })
  upsertMeta('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: meta.image,
  })
  upsertMeta('meta[name="twitter:image:alt"]', {
    name: "twitter:image:alt",
    content: meta.imageAlt,
  })

  let canonical = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement("link")
    canonical.setAttribute("rel", "canonical")
    document.head.appendChild(canonical)
  }
  canonical.setAttribute("href", meta.url)
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyMeta(metaForPath(pathname))
  }, [pathname])

  return null
}
