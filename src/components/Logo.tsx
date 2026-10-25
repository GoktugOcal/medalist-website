import { Link } from "react-router-dom"
import mark from "../assets/logo_icon/Medalist Lab_01.png"
import wordmark from "../assets/logo_icon/Medalist Lab text.png"
import { shop } from "../data/shop"

type LogoProps = {
  variant?: "header" | "footer"
}

export function Logo({ variant = "header" }: LogoProps) {
  const stacked = variant === "footer"

  return (
    <Link
      to="/"
      aria-label={shop.name}
      className={
        stacked
          ? "group flex max-w-xs flex-col items-start gap-4"
          : "group flex min-w-0 items-center gap-2.5 md:gap-3"
      }
    >
      <img
        src={mark}
        alt=""
        className={
          stacked
            ? "h-10 w-auto md:h-12"
            : "h-7 w-auto shrink-0 md:h-8"
        }
      />
      <img
        src={wordmark}
        alt={shop.name}
        className={
          stacked
            ? "h-8 w-auto max-w-[16rem]"
            : "h-5 w-auto max-w-[8.5rem] sm:h-6 sm:max-w-[11rem] md:h-7 md:max-w-[13.5rem]"
        }
      />
    </Link>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return <img src={mark} alt="" className={className} />
}
