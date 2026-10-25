import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ScrollToTop } from "./ScrollToTop"

export function Layout() {
  return (
    <div className="relative min-h-svh">
      <div className="grain" />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
