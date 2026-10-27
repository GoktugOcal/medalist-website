import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { ServiceCategory } from "../data/services"

type ServiceCardProps = {
  category: ServiceCategory
}

export function ServiceCard({ category }: ServiceCardProps) {
  return (
    <article className="group flex h-full w-[min(78vw,19.5rem)] shrink-0 snap-start flex-col overflow-hidden rounded-none bg-panel">
      <Link to={`/services#${category.id}`} className="relative block shrink-0 overflow-hidden">
        <img
          src={category.image}
          alt={category.alt}
          loading="lazy"
          decoding="async"
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-ink/20" />
      </Link>
      <div className="flex min-h-0 flex-1 flex-col px-5 py-5">
        <h3 className="line-clamp-2 min-h-[3.5rem] font-display text-xl leading-7 font-semibold text-white">
          <Link to={`/services#${category.id}`} className="transition hover:text-lime">
            {category.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[4.125rem] text-sm leading-relaxed text-mute">
          {category.excerpt}
        </p>
        <Link
          to={`/services#${category.id}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 font-sans text-[12px] font-semibold tracking-[0.06em] text-lime uppercase transition hover:text-white"
        >
          Learn more
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}
