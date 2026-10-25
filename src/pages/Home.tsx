import { useEffect, type FormEvent, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone, Star } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { SectionLabel } from "../components/SectionLabel"
import { ServiceCard } from "../components/ServiceCard"
import { JournalCard } from "../components/JournalCard"
import { aboutImage, heroImage, serviceCategories } from "../data/services"
import { journal } from "../data/journal"
import { shop } from "../data/shop"
import { LogoMark } from "../components/Logo"
import { Faq } from "../components/Faq"

export function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace("#", "")
    if (!id) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 60)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <>
      <Hero />
      <Services />
      <Motto />
      <About />
      <Journal />
      <Contact />
      <Faq />
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-svh overflow-hidden">
      <img
        src={heroImage}
        alt="Modern road bike on a burnt terracotta wall"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <LogoMark className="pointer-events-none absolute right-[-4%] top-[18%] w-[min(48vw,28rem)] opacity-[0.12]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-20 pt-40 md:px-8 md:pb-24 md:pt-44">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl text-left font-display text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          we care your bike
          <span className="mt-5 block text-lime glow-text">it deserves</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-8 max-w-xl text-left text-base leading-relaxed text-white/70 md:text-lg"
        >
          {shop.tagline}. Quiet stands, honest diagnostics, and a finish that
          feels like a new machine.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_28px_rgba(209,208,103,0.4)]"
            >
              Book a service
              <ArrowRight size={16} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lime/40 hover:text-lime"
            >
              See services
            </a>
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-white">
            <span className="inline-flex items-center gap-0.5 text-lime" aria-label="5 star rating">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span>{shop.rating} rating</span>
            <span className="text-white/40">·</span>
            <span>{shop.customers} happy customers</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel index="01" label="Services" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <h2 className="max-w-xl text-left font-display text-4xl font-bold tracking-tight md:text-5xl">
              Lab work for every kilometer you ride
            </h2>
            <p className="max-w-sm text-left text-sm leading-relaxed text-mute">
              Five benches of work. Pick a category, then the job — we confirm
              the stand time when you book.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.05}>
              <ServiceCard category={category} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Motto() {
  const mottos = [
    {
      index: "01",
      title: "Three months on the work",
      body: "If we repaired it in the lab, you are covered for three months.",
      extra: (
        <a
          href="#faq"
          className="mt-4 inline-block font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase transition hover:text-white"
        >
          See the FAQ →
        </a>
      ),
    },
    {
      index: "02",
      title: "No shit leaves our door",
      body: "If it is not right, it stays on the stand. We do not send a half job home.",
    },
    {
      index: "03",
      title: "Pro work. Amateur spirit.",
      body: "Shop-level standards, without the cold shop attitude. We still get a kick out of a quiet drivetrain.",
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-line bg-panel py-20 md:py-24">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel index="02" label="The lab" />
          <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight md:text-4xl">
            Three rules we ride by
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {mottos.map((item, index) => (
            <FadeIn key={item.index} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-ink/40 p-6 md:p-7">
                <span className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
                  {item.index}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
                {"extra" in item ? item.extra : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img
              src={aboutImage}
              alt="Mechanic working on a bicycle in a dark workshop"
              className="h-[28rem] w-full object-cover saturate-50 contrast-125"
            />
            <div className="absolute inset-0 bg-lime/10 mix-blend-multiply" />
            <div className="absolute bottom-4 left-4 rounded-full border border-lime/30 bg-ink/70 px-3 py-1 font-sans text-[10px] font-medium tracking-[0.08em] text-lime uppercase">
              Bay 02 · live
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionLabel index="03" label="About us" />
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            A precision lab on Place de l’Amitié
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            MEDALIST LAB started as a quiet corner workshop for riders who treat their
            bike like equipment, not luggage. We measure, we document, and we
            only replace what is worn.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From city commuters to carbon race bikes, the standard is the same:
            clean interfaces, correct torque, and a ride that feels newly
            assembled. Brussels weather is not gentle. Your setup should be.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8">
            <div>
              <dt className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
                Founded
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">2019</dd>
            </div>
            <div>
              <dt className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
                Bikes this year
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">1,240+</dd>
            </div>
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section id="blog" className="border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionLabel index="04" label="Blog & workshops" />
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <h2 className="max-w-xl text-left font-display text-3xl font-bold tracking-tight md:text-4xl">
              Notes from the stand, sessions on the calendar
            </h2>
            <p className="max-w-sm text-left text-sm leading-relaxed text-mute">
              Short reads on care and setup, plus hands-on evenings in Auderghem.
              <Link to="/blog" className="mt-3 block text-lime uppercase tracking-[0.08em] text-[12px] font-medium hover:text-white">
                See all →
              </Link>
            </p>
          </div>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journal.map((entry, index) => (
            <FadeIn key={entry.slug} delay={index * 0.04}>
              <JournalCard entry={entry} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <FadeIn>
          <SectionLabel index="05" label="Contact us" />
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Roll in, or write first
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Questions about a noise, a build, or a same-week slot — send a note.
            Walk-ins welcome during open hours if a stand is free.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-white/85">
              <MapPin size={16} className="text-lime" />
              {shop.address}, {shop.city}
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <Phone size={16} className="text-lime" />
              {shop.phone}
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <Mail size={16} className="text-lime" />
              {shop.email}
            </li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <iframe
              title={`${shop.name} workshop map`}
              src={shop.mapEmbed}
              className="map-embed h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          {sent ? (
            <div className="flex h-full min-h-80 flex-col justify-center rounded-3xl border border-lime/30 bg-panel p-8 glow-box">
              <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
                Message received
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold">
                We will write back today
              </h3>
              <p className="mt-3 text-sm text-mute">
                If it is urgent, call the stand. Otherwise expect a reply from
                {` ${shop.email}`}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-panel p-6 md:p-8"
            >
              <label className="block text-sm text-mute">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime/50"
                />
              </label>
              <label className="mt-4 block text-sm text-mute">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime/50"
                />
              </label>
              <label className="mt-4 block text-sm text-mute">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime/50"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-lime py-3 font-medium text-ink transition hover:shadow-[0_0_24px_rgba(209,208,103,0.35)]"
              >
                Send
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
