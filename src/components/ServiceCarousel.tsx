import { useEffect, useRef, useState } from "react"
import { serviceCategories } from "../data/services"
import { ServiceCard } from "./ServiceCard"

export function ServiceCarousel() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = scroller.current
    if (!el) return

    const onScroll = () => {
      const cards = [...el.children] as HTMLElement[]
      if (!cards.length) return
      const mid = el.scrollLeft + el.clientWidth / 2
      let closest = 0
      let best = Infinity
      cards.forEach((card, index) => {
        const center = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(center - mid)
        if (distance < best) {
          best = distance
          closest = index
        }
      })
      setActive(closest)
    }

    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  function goTo(index: number) {
    const el = scroller.current
    const card = el?.children[index] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }

  return (
    <div>
      <div
        ref={scroller}
        className="no-scrollbar flex items-stretch snap-x snap-mandatory gap-3 overflow-x-auto pb-1"
      >
        {serviceCategories.map((category) => (
          <ServiceCard key={category.id} category={category} />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {serviceCategories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            aria-label={`Show ${category.name}`}
            aria-current={active === index}
            onClick={() => goTo(index)}
            className={`h-1.5 rounded-full transition ${
              active === index ? "w-5 bg-lime" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
