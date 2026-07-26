import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import GeneralData from "./components/GeneralData"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Gallery from "./components/Gallery"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

/**
 * Estructura alineada a la rúbrica Kinal — Portafolio de desarrollador (Taller III):
 * 1. Bienvenida · 2a Sobre mí · 2b Datos · 2c Habilidades · 2d CV · 2e Galería · 2f Proyectos · 3 Redes
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <GeneralData />
        <Skills />
        <Experience />
        <Gallery />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
