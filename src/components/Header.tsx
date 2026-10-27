import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Mail, MapPin, Menu, Phone, X } from "lucide-react"
import { Logo } from "./Logo"
import { shop } from "../data/shop"

const links = [
  { label: "Home", to: "/#home", hash: "home" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/#about", hash: "about" },
  { label: "Contact Us", to: "/#contact", hash: "contact" },
] as const

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") {
      setActive("")
      return
    }

    const ids = ["home", "services", "about", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.1 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open ? "glass" : "bg-transparent"
      }`}
    >
      <div className="border-b border-white/10 bg-ink/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-x-5 gap-y-1 px-5 py-2 text-[12px] font-semibold text-white md:px-8">
          <a
            href={`tel:${shop.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 transition hover:text-lime"
          >
            <Phone size={13} className="text-lime" />
            {shop.phone}
          </a>
          <a
            href={`mailto:${shop.email}`}
            className="inline-flex items-center gap-1.5 transition hover:text-lime"
          >
            <Mail size={13} className="text-lime" />
            {shop.email}
          </a>
          <a
            href={shop.socials.find((item) => item.label === "Maps")!.href}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 transition hover:text-lime sm:inline-flex"
          >
            <MapPin size={13} className="text-lime" />
            {shop.address}, {shop.city}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive =
              link.to === "/services"
                ? pathname.startsWith("/services") ||
                  (pathname === "/" && active === "services")
                : pathname === "/" && "hash" in link && active === link.hash
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-[13px] font-bold leading-none tracking-[0.06em] uppercase transition ${
                  isActive ? "text-lime" : "text-white hover:text-lime"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/booking"
            className={`rounded-full px-4 py-2.5 font-sans text-[12px] font-bold leading-none tracking-[0.06em] uppercase transition ${
              pathname === "/booking"
                ? "bg-lime text-ink"
                : "bg-lime text-ink hover:shadow-[0_0_24px_rgba(209,208,103,0.35)]"
            }`}
          >
            Book an appointment
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-2 font-sans text-sm font-bold tracking-[0.06em] text-white uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="mt-1 rounded-full bg-lime px-4 py-3 text-center font-sans text-xs font-bold tracking-[0.06em] text-ink uppercase"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
