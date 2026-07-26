import { useState } from "react"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { projects, categories } from "../data/projects"
import { asset } from "../lib/asset"

export default function Projects() {
  const [filter, setFilter] = useState("featured")
  const filtered =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter)

  const [activeId, setActiveId] = useState(filtered[0]?.id ?? projects[0]?.id)
  const active = projects.find((p) => p.id === activeId) ?? filtered[0]

  const selectFilter = (id) => {
    setFilter(id)
    const next =
      id === "all"
        ? projects
        : id === "featured"
          ? projects.filter((p) => p.featured)
          : projects.filter((p) => p.category === id)
    if (next[0]) setActiveId(next[0].id)
  }

  return (
    <section id="proyectos" className="ink-panel relative py-20 text-cream-50 md:py-28">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-cream-200/15 pb-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-moss-400">
              [A] project archive · terminal
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Proyectos.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectFilter(cat.id)}
                className={`border px-3 py-1.5 text-[10px] uppercase tracking-wider transition ${
                  filter === cat.id
                    ? "border-moss-400 bg-moss-400 text-ink-950"
                    : "border-cream-200/25 text-cream-200 hover:border-cream-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="terminal-frame animate-pulse-border grid min-h-[28rem] overflow-hidden border border-cream-200/20 bg-ink-900/80 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
          {/* Mailbox / list */}
          <div className="border-b border-cream-200/15 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-cream-200/15 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream-300/80">
                [A] mailbox · {filtered.length} entries
              </p>
              <FolderGit2 size={14} className="text-moss-400" />
            </div>
            <ul className="max-h-[32rem] overflow-y-auto">
              {filtered.map((project) => {
                const selected = project.id === active?.id
                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(project.id)}
                      className={`flex w-full flex-col gap-1 border-b border-cream-200/10 px-4 py-4 text-left transition ${
                        selected
                          ? "bg-cream-50 text-ink-950"
                          : "text-cream-100 hover:bg-cream-50/5"
                      }`}
                    >
                      <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70">
                        <span aria-hidden>▣</span>
                        {project.year}
                      </span>
                      <span className="font-display text-sm font-semibold uppercase tracking-wide">
                        {project.name}
                      </span>
                      <span
                        className={`truncate text-[11px] ${selected ? "text-ink-600" : "text-cream-300/70"}`}
                      >
                        FROM: {project.stack.slice(0, 3).join(" · ")}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Message / detail */}
          {active && (
            <div className="flex flex-col">
              <div className="border-b border-cream-200/15 px-5 py-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream-300/80">
                  [B] message · project detail
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-5 md:p-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-moss-400">
                    {active.featured ? "DESTACADO" : active.category} · {active.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide md:text-3xl">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-cream-300/70">
                    IMPACT: {active.impact}
                  </p>
                </div>

                {active.screenshots?.[0]?.image && (
                  <div className="overflow-hidden border border-cream-200/15 bg-ink-950">
                    <img
                      src={asset(active.screenshots[0].image)}
                      alt={active.name}
                      className="aspect-[16/9] w-full object-cover object-top opacity-90"
                      loading="lazy"
                    />
                  </div>
                )}

                <p className="text-sm leading-relaxed text-cream-100">{active.description}</p>

                {active.learned?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream-300/70">
                      Habilidades aprendidas
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {active.learned.map((item) => (
                        <li key={item} className="text-xs text-cream-200">
                          › {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-cream-200/20 px-2.5 py-1 text-[10px] uppercase tracking-wide text-cream-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-px border border-cream-200/20 bg-cream-200/20 sm:grid-cols-4">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="col-span-2 flex items-center justify-center gap-2 bg-moss-400 px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-ink-950 transition hover:bg-moss-500 sm:col-span-2"
                    >
                      <ExternalLink size={12} />
                      Repositorio
                    </a>
                  )}
                  {active.demo && (
                    <a
                      href={
                        active.demo.startsWith("http") ? active.demo : asset(active.demo)
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center bg-ink-950 px-3 py-3 text-[10px] uppercase tracking-wider text-cream-50 transition hover:bg-ink-800 sm:col-span-1"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href="#galeria"
                    className="flex items-center justify-center bg-ink-950 px-3 py-3 text-[10px] uppercase tracking-wider text-cream-50 transition hover:bg-ink-800 sm:col-span-1"
                  >
                    Capturas
                  </a>
                  <a
                    href="#contacto"
                    className="flex items-center justify-center bg-ink-950 px-3 py-3 text-[10px] uppercase tracking-wider text-cream-50 transition hover:bg-ink-800 sm:col-span-1"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
