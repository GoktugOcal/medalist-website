import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { SectionLabel } from "../components/SectionLabel"
import { serviceCategories } from "../data/services"

export function Services() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace("#", "")
    if (!id) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 60)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <section className="px-5 pt-36 pb-24 md:px-8 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionLabel index="01" label="Services" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                Lab work for every kilometer you ride
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Five benches of work. Pick a category, then the job — we confirm
                the stand time when you book.
              </p>
            </div>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 self-start rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_24px_rgba(209,208,103,0.35)]"
            >
              Book an appointment
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-16 md:space-y-24">
          {serviceCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.04}>
              <article
                id={category.id}
                className="scroll-mt-28 border-t border-line pt-10 md:scroll-mt-32"
              >
                <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="h-64 w-full object-cover md:h-[22rem]"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {category.excerpt}
                    </p>
                    <ul className="mt-8 space-y-6">
                      {category.items.map((item) => (
                        <li key={item.id}>
                          <h3 className="font-display text-lg font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-mute">
                            {item.blurb}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/booking"
                      className="mt-8 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold tracking-[0.06em] text-lime uppercase transition hover:text-white"
                    >
                      Book
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
