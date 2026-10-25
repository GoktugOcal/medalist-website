import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { shop } from "../data/shop"

function resolveCalLink() {
  const raw = (import.meta.env.VITE_CAL_LINK as string | undefined)?.trim() || shop.calLink.trim()
  return raw.replace(/^https?:\/\/(www\.)?cal\.com\//i, "").replace(/\/$/, "")
}

export function CalBooker() {
  const calLink = resolveCalLink()

  useEffect(() => {
    if (!calLink) return
    void getCalApi().then((cal) => {
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#d1d067",
            "cal-brand-text": "#050505",
          },
          dark: {
            "cal-brand": "#d1d067",
            "cal-brand-text": "#050505",
            "cal-bg": "#050505",
            "cal-bg-emphasis": "#24272b",
            "cal-text": "#bfc3c8",
            "cal-text-emphasis": "#ffffff",
            "cal-border": "#3a3e44",
          },
        },
      })
    })
  }, [calLink])

  if (!calLink) {
    return (
      <div className="rounded-3xl border border-line bg-panel p-6 md:p-8">
        <p className="font-sans text-[12px] font-medium tracking-[0.08em] text-lime uppercase">
          Calendar
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold">Connect Cal.com</h2>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          Set your event path in <code className="text-white">src/data/shop.ts</code> as{" "}
          <code className="text-white">calLink</code>, or add{" "}
          <code className="text-white">VITE_CAL_LINK</code> to a{" "}
          <code className="text-white">.env</code> file.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-panel p-2 md:p-3">
      <Cal
        calLink={calLink}
        style={{ width: "100%", minHeight: 720, overflow: "auto" }}
        config={{
          layout: "month_view",
          theme: "dark",
        }}
      />
    </div>
  )
}
