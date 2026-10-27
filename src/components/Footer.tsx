import { Link } from "react-router-dom"
import { shop } from "../data/shop"
import { Logo, LogoMark } from "./Logo"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-panel">
      <LogoMark className="pointer-events-none absolute -right-8 bottom-10 w-[22rem] opacity-[0.06] md:w-[28rem]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo variant="footer" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            A quiet lab for loud bikes. Diagnostics, rebuilds, and same-week
            slots in Auderghem.
          </p>
        </div>
        <div>
          <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
            Visit
          </p>
          <p className="mt-3 text-sm text-white/85">
            {shop.address}
            <br />
            {shop.city}
          </p>
          <p className="mt-2 text-xs font-medium tracking-[0.06em] text-mute uppercase">
            {shop.coords}
          </p>
          <p className="mt-3 text-sm text-mute">{shop.phone}</p>
        </div>
        <div>
          <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
            Hours
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-white/85">
            {shop.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span className="text-mute">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {shop.name} · Brussels</p>
          <div className="flex gap-5">
            {shop.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="tracking-wide uppercase transition hover:text-lime"
              >
                {social.label}
              </a>
            ))}
            <Link to="/services" className="uppercase transition hover:text-lime">
              Services
            </Link>
            <Link to="/blog" className="uppercase transition hover:text-lime">
              Blog
            </Link>
            <Link to="/booking" className="uppercase transition hover:text-lime">
              Book
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
