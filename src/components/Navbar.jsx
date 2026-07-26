import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "../data/profile"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#datos", label: "Datos" },
  { href: "#skills", label: "Skills" },
  { href: "#experiencia", label: "CV" },
  { href: "#galeria", label: "Galería" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cream-200/20 bg-ink-950/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight text-cream-50">
          jc<span className="text-moss-400">.</span>cano
        </a>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[10px] uppercase tracking-widest text-cream-200/80 transition hover:text-cream-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="border border-cream-200/30 bg-cream-50 px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-ink-950 transition hover:bg-cream-100"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-cream-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-200/15 bg-ink-900 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-cream-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
