import { useState } from "react"
import { projects, categories } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const [filter, setFilter] = useState("featured")

  const filtered =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter)

  return (
    <section id="proyectos" className="border-t border-carbon-600/50 bg-carbon-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-carbon-400">
            Portafolio de aplicaciones
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-carbon-50 md:text-5xl">
            Proyectos.
          </h2>
          <p className="mt-4 text-sm text-carbon-200">
            Cada proyecto incluye título, descripción, habilidades aprendidas, enlace a
            repositorio y captura cuando aplica. Mínimo tres proyectos completos destacados.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider transition ${
                filter === cat.id
                  ? "bg-carbon-50 text-carbon-950"
                  : "border border-carbon-600 text-carbon-300 hover:border-carbon-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>
      </div>
    </section>
  )
}
