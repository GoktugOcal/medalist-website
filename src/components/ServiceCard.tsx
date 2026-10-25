import { Link } from "react-router-dom"
import { CircleDot, CircleStop, Cog, Disc3, Wrench } from "lucide-react"
import type { ServiceCategory } from "../data/services"

const icons = {
  wrench: Wrench,
  brake: CircleStop,
  wheel: Disc3,
  cog: Cog,
  bearing: CircleDot,
}

type ServiceCardProps = {
  category: ServiceCategory
  index: number
}

export function ServiceCard({ category, index }: ServiceCardProps) {
  const Icon = icons[category.icon]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition duration-300 hover:border-lime/40 hover:bg-panel-2">
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lime/0 blur-2xl transition group-hover:bg-lime/10" />
      <div className="mb-6 flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-lime/25 bg-lime/10 text-lime">
          <Icon size={20} strokeWidth={1.6} />
        </span>
        <span className="font-sans text-[12px] font-medium tracking-[0.08em] text-mute">
          0{index + 1}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{category.name}</h3>
      <ul className="mt-4 flex-1 space-y-2">
        {category.items.map((item) => (
          <li key={item.id} className="flex items-start gap-2.5 text-sm text-white/75">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
            {item.name}
          </li>
        ))}
      </ul>
      <Link
        to="/booking"
        className="mt-6 font-sans text-[12px] font-medium tracking-[0.08em] text-white/80 uppercase transition hover:text-lime"
      >
        Book →
      </Link>
    </article>
  )
}
