import heroBike from "../assets/hero-road-bike-v1.2.jpg"

export type ServiceIcon = "wrench" | "brake" | "cog" | "wheel" | "bearing"

export type ServiceItem = {
  id: string
  name: string
}

export type ServiceCategory = {
  id: string
  name: string
  icon: ServiceIcon
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "generic",
    name: "Generic",
    icon: "wrench",
    items: [
      { id: "safety-check", name: "Safety Check" },
      { id: "tune-up", name: "Tune-up" },
      { id: "routine-maintenance", name: "Routine Maintenance" },
      { id: "custom-bike-build", name: "Custom bike build" },
      { id: "accessory-mounting", name: "Accessory mounting" },
      { id: "wash-and-polish", name: "Wash and polish" },
    ],
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: "brake",
    items: [
      { id: "cable-replacement", name: "Cable replacement" },
      { id: "pad-installation", name: "Pad installation" },
      { id: "bleeding", name: "Bleeding" },
      { id: "rotor-alignment", name: "Rotor disc alignment / cleaning" },
    ],
  },
  {
    id: "drivetrain",
    name: "Drivetrain and Shifting",
    icon: "cog",
    items: [
      { id: "gear-indexing", name: "Gear indexing" },
      { id: "chain-replacement", name: "Chain replacement" },
      { id: "cassette-chainring", name: "Cassette and chainring installation" },
      { id: "derailleur-straightening", name: "Derailleur straightening" },
    ],
  },
  {
    id: "wheels",
    name: "Wheels and Tyres",
    icon: "wheel",
    items: [
      { id: "puncture-repair", name: "Puncture Repair" },
      { id: "tubeless-setup", name: "Tubeless tyre setup" },
      { id: "sealant-refresh", name: "Sealant refresh" },
      { id: "spoke-replacement", name: "Spoke replacement" },
      { id: "wheel-truing", name: "Wheel Truing" },
    ],
  },
  {
    id: "bearings",
    name: "Bearings and Bottom brackets",
    icon: "bearing",
    items: [
      { id: "headset-service", name: "Headset service" },
      { id: "bottom-bracket", name: "Bottom bracket service / replacement" },
      { id: "wheel-hub-service", name: "Wheel hub service" },
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

export const heroImage = heroBike

export const aboutImage =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
