export const shop = {
  name: "MEDALIST LAB",
  slogan: "we care your bike it deserves",
  tagline: "Precision repair lab · Auderghem, Brussels",
  address: "Place de l’Amitié 6",
  city: "1160 Auderghem, Brussels",
  coords: "50.8239° N · 4.4028° E",
  phone: "+32 477 77 04 97",
  email: "hello@medalistlab.be",
  // Cal.com event path, without the domain. Example: "medalistlab/bike-service"
  // Override with VITE_CAL_LINK in a .env file if you prefer.
  calLink: "goktug-ocal-6yozec/30min",
  rating: "5.0",
  customers: "1,240+",
  mapEmbed:
    "https://maps.google.com/maps?q=Place%20de%20l%27Amitie%206%20Auderghem%20Brussels&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hours: [
    { days: "Tue — Fri", time: "09:00 — 18:30" },
    { days: "Sat", time: "10:00 — 16:00" },
    { days: "Sun — Mon", time: "Closed" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Strava", href: "https://www.strava.com" },
    { label: "Maps", href: "https://maps.google.com/?q=Place+de+l+Amitie+6+Auderghem" },
  ],
} as const

export const bikeTypes = [
  "Road",
  "Gravel",
  "Mountain",
  "City",
  "E-bike",
  "Cargo",
  "Kids",
] as const
