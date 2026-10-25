import { FadeIn } from "../components/FadeIn"
import { JournalCard } from "../components/JournalCard"
import { SectionLabel } from "../components/SectionLabel"
import { journal } from "../data/journal"

export function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-36 pb-24 md:px-8 md:pt-44">
      <FadeIn>
        <SectionLabel index="BL" label="Blog & workshops" />
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
          Notes from the stand
        </h1>
        <p className="mt-4 max-w-xl text-white/65">
          Dummy posts for now — care notes, setup, and the sessions we run in
          Auderghem.
        </p>
      </FadeIn>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {journal.map((entry, index) => (
          <FadeIn key={entry.slug} delay={index * 0.04}>
            <JournalCard entry={entry} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
