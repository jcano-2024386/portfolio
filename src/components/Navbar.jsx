import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "../data/profile"

const links = [
  { href: "#inicio", label: "Bienvenida" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#datos", label: "Datos" },
  { href: "#skills", label: "Habilidades" },
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
          ? "border-b border-carbon-600/50 bg-carbon-950/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight text-carbon-50">
          jc<span className="text-carbon-400">.</span>cano
        </a>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[10px] uppercase tracking-widest text-carbon-200 transition hover:text-carbon-50"
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
              className="rounded-full border border-carbon-600 bg-carbon-50 px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-carbon-950 transition hover:bg-white"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-carbon-50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-carbon-600/50 bg-carbon-900 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-carbon-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-carbon-600 px-4 py-2 text-xs uppercase tracking-wider"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-carbon-600 px-4 py-2 text-xs uppercase tracking-wider"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
