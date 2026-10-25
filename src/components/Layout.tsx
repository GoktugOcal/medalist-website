import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTop } from "./ScrollToTop"
import { Seo } from "./Seo"

export function Layout() {
  return (
    <div className="relative min-h-svh">
      <div className="grain" />
      <ScrollToTop />
      <Seo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
