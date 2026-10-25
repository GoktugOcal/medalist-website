import { Link, Navigate, useParams } from "react-router-dom"
import { FadeIn } from "../components/FadeIn"
import { findPost, journal } from "../data/journal"

export function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  const more = journal.filter((entry) => entry.slug !== post.slug).slice(0, 3)

  return (
    <article className="px-5 pt-36 pb-24 md:px-8 md:pt-44">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
            <Link to="/blog" className="transition hover:text-white">
              Blog & workshops
            </Link>
            <span className="text-mute"> · {post.kind}</span>
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-[0.06em] text-mute uppercase">
            {post.meta}
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.06}>
        <img
          src={post.src}
          alt={post.alt}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-line object-cover md:h-[28rem] md:w-full"
        />
      </FadeIn>

      <div className="mx-auto mt-10 max-w-3xl">
        <FadeIn delay={0.08}>
          <p className="text-lg leading-relaxed text-white/75">{post.excerpt}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mute">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          {post.kind === "Workshop" ? (
            <Link
              to="/booking"
              className="mt-10 inline-flex rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_24px_rgba(209,208,103,0.35)]"
            >
              Book a seat
            </Link>
          ) : null}
        </FadeIn>
      </div>

      {more.length > 0 ? (
        <div className="mx-auto mt-20 max-w-3xl border-t border-line pt-10">
          <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
            More from the lab
          </p>
          <ul className="mt-4 space-y-3">
            {more.map((entry) => (
              <li key={entry.slug}>
                <Link
                  to={`/blog/${entry.slug}`}
                  className="text-white transition hover:text-lime"
                >
                  {entry.title}
                  <span className="ml-2 text-sm text-mute">{entry.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}
