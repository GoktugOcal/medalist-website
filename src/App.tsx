import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Blog } from "./pages/Blog"
import { BlogPost } from "./pages/BlogPost"
import { Booking } from "./pages/Booking"
import { Home } from "./pages/Home"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"

export default function App() {
  return (
    <BrowserRouter basename={basename === "/" ? undefined : basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
