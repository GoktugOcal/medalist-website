import { FadeIn } from "../components/FadeIn"
import { SectionLabel } from "../components/SectionLabel"
import { CalBooker } from "../components/CalBooker"

export function Booking() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-36 pb-24 md:px-8 md:pt-44">
      <FadeIn>
        <SectionLabel index="BK" label="Booking" />
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
          Reserve a stand
        </h1>
        <p className="mt-4 max-w-xl text-white/65">
          Pick a time. Confirmation comes from Cal.com by email.
        </p>
      </FadeIn>
      <div className="mt-10">
        <CalBooker />
      </div>
    </section>
  )
}
