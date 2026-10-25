import { Link } from "react-router-dom"
import type { JournalEntry } from "../data/journal"

export function JournalCard({ entry }: { entry: JournalEntry }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition hover:border-lime/40">
      <Link to={`/blog/${entry.slug}`} className="relative overflow-hidden">
        <img
          src={entry.src}
          alt={entry.alt}
          loading="lazy"
          decoding="async"
          className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full border border-lime/30 bg-ink/80 px-2.5 py-1 font-sans text-[10px] font-medium tracking-[0.08em] text-lime uppercase">
          {entry.kind}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-sans text-[11px] font-medium tracking-[0.08em] text-mute uppercase">
          {entry.meta}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-white">
          <Link to={`/blog/${entry.slug}`} className="transition hover:text-lime">
            {entry.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{entry.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            to={`/blog/${entry.slug}`}
            className="font-sans text-[12px] font-medium tracking-[0.08em] text-white/80 uppercase transition hover:text-lime"
          >
            Read →
          </Link>
          {entry.kind === "Workshop" ? (
            <Link
              to="/booking"
              className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase transition hover:text-white"
            >
              Book a seat →
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
