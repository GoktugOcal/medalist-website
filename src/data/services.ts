import heroBike from "../assets/hero-road-bike-v1.2.jpg"

export type ServiceIcon = "wrench" | "brake" | "cog" | "wheel" | "bearing"

export type ServiceItem = {
  id: string
  name: string
  blurb: string
}

export type ServiceCategory = {
  id: string
  name: string
  icon: ServiceIcon
  image: string
  alt: string
  excerpt: string
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "generic",
    name: "Generic",
    icon: "wrench",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    alt: "Mechanic working on a bicycle in the workshop",
    excerpt:
      "Safety Check, Tune-up, Routine Maintenance, Custom bike build, Accessory mounting, Wash and polish.",
    items: [
      {
        id: "safety-check",
        name: "Safety Check",
        blurb:
          "Brakes, wheels, headset, and drivetrain on the stand. You leave knowing what is safe to ride and what needs work.",
      },
      {
        id: "tune-up",
        name: "Tune-up",
        blurb:
          "Gears, brakes, bolts, and a quiet drivetrain. The full pass we run when the bike has gone a season without one.",
      },
      {
        id: "routine-maintenance",
        name: "Routine Maintenance",
        blurb:
          "The regular service: lube, wear check, and the small fixes that keep a commute from becoming a stand job.",
      },
      {
        id: "custom-bike-build",
        name: "Custom bike build",
        blurb:
          "Frame to finish. We spec, face, press, and torque so the new bike rides like it was assembled once — correctly.",
      },
      {
        id: "accessory-mounting",
        name: "Accessory mounting",
        blurb:
          "Racks, lights, computers, fenders. Fitted so they do not rattle, rub, or chew a cable on the first wet week.",
      },
      {
        id: "wash-and-polish",
        name: "Wash and polish",
        blurb:
          "A proper wash, not a hose. Drivetrain, frame, and a finish that does not hide wear we should tell you about.",
      },
    ],
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: "brake",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=80",
    alt: "Road bike disc brake and wheel close-up",
    excerpt:
      "Cable replacement, Pad installation, Bleeding, Rotor disc alignment / cleaning.",
    items: [
      {
        id: "cable-replacement",
        name: "Cable replacement",
        blurb:
          "Inner and housing, cut clean, no grit left in the run. Lever feel should be sharp again, not spongy from rust.",
      },
      {
        id: "pad-installation",
        name: "Pad installation",
        blurb:
          "The right compound for the rotor and the weather. Bedded in so the first wet descent is not a surprise.",
      },
      {
        id: "bleeding",
        name: "Bleeding",
        blurb:
          "Mineral or DOT, to spec. Air out of the line, lever back to the bar you actually want.",
      },
      {
        id: "rotor-alignment",
        name: "Rotor disc alignment / cleaning",
        blurb:
          "True the disc, clean the track, kill the rub. A ticking rotor is a stand job, not a new set of pads.",
      },
    ],
  },
  {
    id: "drivetrain",
    name: "Drivetrain and Shifting",
    icon: "cog",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=80",
    alt: "Close-up of a bicycle drivetrain and cassette",
    excerpt:
      "Gear indexing, Chain replacement, Cassette and chainring installation, Derailleur straightening.",
    items: [
      {
        id: "gear-indexing",
        name: "Gear indexing",
        blurb:
          "Limit screws, B-tension, cable pull. Shifts land on the cog, not next to it.",
      },
      {
        id: "chain-replacement",
        name: "Chain replacement",
        blurb:
          "Measured, sized, and matched to the cassette. A stretched chain is cheaper than a new cluster.",
      },
      {
        id: "cassette-chainring",
        name: "Cassette and chainring installation",
        blurb:
          "Lockring torque, chainline, and a chain that fits the new teeth. No guessing at wear.",
      },
      {
        id: "derailleur-straightening",
        name: "Derailleur straightening",
        blurb:
          "Hanger alignment first, then the cage. A bent hanger is why indexing never holds.",
      },
    ],
  },
  {
    id: "wheels",
    name: "Wheels and Tyres",
    icon: "wheel",
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1400&q=80",
    alt: "Bicycle wheels in a workshop row",
    excerpt:
      "Puncture Repair, Tubeless tyre setup, Sealant refresh, Spoke replacement, Wheel Truing.",
    items: [
      {
        id: "puncture-repair",
        name: "Puncture Repair",
        blurb:
          "Find the hole, patch or plug, check the rim tape. You should not be walking home twice for the same shard.",
      },
      {
        id: "tubeless-setup",
        name: "Tubeless tyre setup",
        blurb:
          "Tape, valve, sealant, bead. Seated on the stand with a compressor, not hope and a floor pump.",
      },
      {
        id: "sealant-refresh",
        name: "Sealant refresh",
        blurb:
          "Old latex out, fresh volume in. Brussels rain dries a tyre from the inside if you ignore it.",
      },
      {
        id: "spoke-replacement",
        name: "Spoke replacement",
        blurb:
          "The right length and a nipple that is not seized. Then the wheel gets brought back to true.",
      },
      {
        id: "wheel-truing",
        name: "Wheel Truing",
        blurb:
          "Lateral, radial, dish. Hop and rub gone, spoke tension even enough to last the next season.",
      },
    ],
  },
  {
    id: "bearings",
    name: "Bearings and Bottom brackets",
    icon: "bearing",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1400&q=80",
    alt: "Bicycle parked ready for a bearing and headset check",
    excerpt:
      "Headset service, Bottom bracket service / replacement, Wheel hub service.",
    items: [
      {
        id: "headset-service",
        name: "Headset service",
        blurb:
          "Strip, grease, and preload. No knock on cobbles, no tight spot at the stem.",
      },
      {
        id: "bottom-bracket",
        name: "Bottom bracket service / replacement",
        blurb:
          "Press or thread, to the shell that is actually there. Creaks get diagnosed before parts get thrown at them.",
      },
      {
        id: "wheel-hub-service",
        name: "Wheel hub service",
        blurb:
          "Cones or cartridges, cleaned and set. A grinding hub is cheaper on the bench than on a new wheel.",
      },
    ],
  },
]

export const services = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryName: category.name,
  })),
)

export function findService(id: string | null) {
  return services.find((item) => item.id === id) ?? services[0]
}

export function findCategory(id: string | undefined) {
  if (!id) return undefined
  return serviceCategories.find((category) => category.id === id)
}

export const heroImage = heroBike

export const aboutImage =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
