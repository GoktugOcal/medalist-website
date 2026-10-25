export type JournalKind = "Blog" | "Workshop"

export type JournalEntry = {
  slug: string
  kind: JournalKind
  title: string
  excerpt: string
  meta: string
  src: string
  alt: string
  body: string[]
}

export const journal: JournalEntry[] = [
  {
    slug: "tubeless-clinic",
    kind: "Workshop",
    title: "Tubeless clinic",
    excerpt: "Tape, valves, sealant, and a clean seat. Two hours on the stand — bring your wheels.",
    meta: "Sat 8 Nov · 10:00",
    src: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=80",
    alt: "Close-up of a bicycle drivetrain and wheel",
    body: [
      "This is a stand session, not a lecture. You bring a pair of wheels, we bring tape, valves, sealant, and a compressor. Two hours later you should leave with beads seated and a bottle that is not a mystery.",
      "We start with a look at the rim bed. Old tape that tunnels, spoke holes that still show, valves that were never torqued — that is where most slow leaks start. Then we tape, punch, and fit a valve that actually matches the hole.",
      "Sealant is not a religion. We talk volume, brand, and how often Brussels rain actually dries a tyre out. You shake, you inject, you spin. If a bead will not sit, we say so before you ride home on hope.",
      "Bring wheels that can go tubeless. If you are not sure, message us the rim. Spaces are limited because every pair gets a stand, not a waiting room.",
    ],
  },
  {
    slug: "winter-chains-brussels-rain",
    kind: "Blog",
    title: "Winter chains in Brussels rain",
    excerpt: "What actually rusts, how often to wipe, and when a cheap lube costs you a cassette.",
    meta: "12 Oct 2026",
    src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=80",
    alt: "Road bike on a dark studio backdrop",
    body: [
      "A chain does not fail in one wet commute. It fails after forty of them, each one leaving grit in the rollers and a film that looks like lube but acts like sandpaper. Brussels rain is not dramatic. It is constant. That is worse.",
      "Wipe the chain when you get in. Not a full bath — a rag on the lower run, then a drop of wet lube if it sounds dry. Once a week in winter is enough for most city miles. Once a month is how cassettes die at 2,000 km.",
      "Cheap dry lube in November is a costume. It flakes, it holds grit, and it looks clean until you put a ruler on the chain. If it is over 0.5% elongated, we do not argue with it. We measure, we show you, and we replace before the cassette goes with it.",
      "If you hear sand in the rollers or see rust on the side plates, bring it in. A clean and a new chain is cheaper than a new 12-speed cluster. That is the whole article.",
    ],
  },
  {
    slug: "hydraulic-bleed-evening",
    kind: "Workshop",
    title: "Hydraulic bleed evening",
    excerpt: "Lever feel, mineral vs DOT, and why a spongey bar is not always pads.",
    meta: "Thu 13 Nov · 18:30",
    src: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1400&q=80",
    alt: "Bicycle in a repair workshop",
    body: [
      "A spongey lever is a diagnosis, not a product. Pads, a bent rotor, a hose that was never cut square, air in the system — we sort that on the stand before anyone opens a bottle of fluid.",
      "This evening is for people who want to bleed their own brakes once, correctly, and then know when to stop. Mineral oil and DOT do not mix. We will not let you find that out the expensive way.",
      "You work on your own bike. We watch lever feel, piston return, and whether the bite point stays after ten pulls. If the hose needs a barb and olive, that is a parts job — we flag it before you leave thinking you finished.",
      "Bring the bike, not a bag of random syringes. We have the kits. Book a seat, show up on time, and leave with brakes that meet the bar the first time you pull them.",
    ],
  },
  {
    slug: "when-a-wheel-needs-a-true",
    kind: "Blog",
    title: "When a wheel needs a true",
    excerpt: "Hop, rub, and spoke ping — how to tell a stand job from a new rim.",
    meta: "28 Sep 2026",
    src: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1400&q=80",
    alt: "Bicycle frame and wheel detail",
    body: [
      "A wheel that hops once per revolution is not a personality. It is a rim that moved, or a spoke that lost tension, or a tyre that was seated like a drunk hat. Before we blame the rim, we take the tyre off.",
      "On the stand we look at lateral true, radial hop, and dish. A millimetre of wobble that still clears the pads is a dinner job. A hop you can see from the door is a longer one. A crack at the nipple bed is a new rim, not optimism.",
      "Spoke ping on the first ride after a true is normal. Spoke ping six months later, with a brake that rubs only when you sit, is a wheel that wants another pass. We mark the high spots, we work in small turns, and we stress-relieve so it does not walk back the next day.",
      "If you can hear the rotor kiss the pad in one place only, roll in. Do not keep riding it hoping the pad will wear into the problem. Pads are cheaper than rims, but they are not a truing stand.",
    ],
  },
  {
    slug: "kids-bike-safety-hour",
    kind: "Workshop",
    title: "Kids bike safety hour",
    excerpt: "Brakes, helmet fit, and a once-over before school runs. Parents welcome on the tools.",
    meta: "Sat 22 Nov · 11:00",
    src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1400&q=80",
    alt: "Bicycle parked in an urban setting",
    body: [
      "School-run bikes take more abuse than most race bikes. Kerbs, rain, a stem that was never tightened, brakes that have not been looked at since last spring. This hour is a once-over with the kid on the saddle and a parent on the tools.",
      "We check brake reach, pad life, tyre pressure, headset play, and whether the saddle is still in the land of the living. Helmets get a fit check. If a part is unsafe, we say so in plain language — not a scare, a list.",
      "Parents can turn a barrel adjuster and learn what a loose headset feels like. That is the point. You leave knowing what to glance at on a Sunday night, not a new religion about torque wrenches.",
      "Book one bike per seat. If two kids need the hour, book two. We would rather do them properly than stack frames in the corner.",
    ],
  },
  {
    slug: "ebike-torque-winter-commutes",
    kind: "Blog",
    title: "E-bike torque for winter commutes",
    excerpt: "Motor mounts, connector grease, and the checks we run before the first frost.",
    meta: "4 Sep 2026",
    src: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1400&q=80",
    alt: "Row of bicycles",
    body: [
      "An e-bike motor is a lot of mass hanging off a few bolts. Winter adds salt, swollen cables, and connectors that were never meant to live in a puddle. The commute does not care. We do a torque pass before the first frost for a reason.",
      "Mounts get a wrench to spec, not to “tight”. Connectors get dielectric grease if they sit in the wet. We look at the torque arm, the axle nuts, and whether the battery rail still clicks like it did in June.",
      "Display flicker and a motor that cuts on cobbles is often a plug, not a brain. Unplug, inspect, reseat. If the cable is chewed at the dropout, that is a housing job — not a firmware myth you read on a forum.",
      "Bring it in before the lights fail on the way to work. A winter check is cheaper than a motor that ate its own bolts on Avenue de Tervueren.",
    ],
  },
]

export function findPost(slug: string | undefined) {
  if (!slug) return undefined
  return journal.find((entry) => entry.slug === slug)
}
