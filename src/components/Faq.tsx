import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Minus, Plus } from "lucide-react"
import { FadeIn } from "./FadeIn"
import { shop } from "../data/shop"

const faqs = [
  {
    q: "What does the three-month guarantee cover?",
    a: "Work we did in the workshop is covered for three months. If the same issue comes back in normal use, we put it back on the stand. Crash damage, contamination, neglected maintenance, and parts that were already worn when you arrived sit outside that.",
  },
  {
    q: "How do I know if my tyres need replacing?",
    a: "Look for a square profile, cuts in the sidewall, or a casing that shows through. In Brussels rain, worn tread also means less grip on cobbles. Bring the bike in — we check pressure, wear, and whether a tubeless refresh will do instead of a new tyre.",
  },
  {
    q: "Do you offer pickup and drop-off?",
    a: `Not as a standard run. Drop the bike at ${shop.address} during open hours, or book a stand and roll in. If the bike is not rideable, call first and we will see what we can do.`,
  },
  {
    q: "Does regular servicing actually change the ride?",
    a: "A quiet drivetrain, true wheels, and brakes that bite the first time you pull them. That is the difference. Indexing and a clean chain also keep expensive cassettes from wearing out early.",
  },
  {
    q: "How do I know if my brakes need replacing?",
    a: "Squeal, a lever that comes too close to the bar, or a rotor that rubs after every ride. Pads, bleed, or a bent rotor are the usual fixes — we will tell you which one before we start.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2 md:px-8">
        <FadeIn>
          <span className="inline-flex rounded-full border border-lime/40 px-3 py-1 font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
            FAQ & option
          </span>
          <h2 className="mt-5 max-w-md text-left font-display text-4xl font-bold tracking-tight md:text-5xl">
            Your satisfaction is our top priority!
          </h2>
          <div className="mt-10 rounded-2xl border border-line bg-panel p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-white">
                100% Satisfaction Guarantee
              </h3>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime text-ink">
                <Check size={14} strokeWidth={2.4} />
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              At {shop.name}, we treat your bike as equipment you rely on every
              day — commute, weekend, or race. If the work does not feel right,
              we put it back on the stand.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-3xl border border-line bg-panel px-2 py-2 md:px-4 md:py-3">
            {faqs.map((item, index) => {
              const active = open === index
              return (
                <div
                  key={item.q}
                  className={index === 0 ? "" : "border-t border-line"}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                    aria-expanded={active}
                  >
                    <span className="text-left font-sans font-medium leading-snug text-white">{item.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime text-ink">
                      {active ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active ? (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-5 text-sm leading-relaxed text-mute">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
