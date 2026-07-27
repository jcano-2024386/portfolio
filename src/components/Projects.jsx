import { useEffect, useRef, useState } from "react"
import { ExternalLink, FolderGit2, Github, Radio, Server } from "lucide-react"
import { projects, categories } from "../data/projects"
import { asset } from "../lib/asset"
import Reveal from "./Reveal"

const STATUS = {
  deployed: { label: "LIVE", className: "text-moss-400 border-moss-400/40 bg-moss-400/10" },
  api: { label: "API", className: "text-signal border-signal/40 bg-signal/10" },
  prototype: { label: "PROTO", className: "text-cream-200 border-cream-200/30 bg-cream-50/5" },
}

const EXIT_MS = 260

export default function Projects() {
  const [filter, setFilter] = useState("featured")
  const filtered =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter)

  const [activeId, setActiveId] = useState(filtered[0]?.id ?? projects[0]?.id)
  const [panelKey, setPanelKey] = useState(0)
  const [phase, setPhase] = useState("enter") // enter | exit
  const [listKey, setListKey] = useState(0)
  const pendingId = useRef(null)
  const exitTimer = useRef(null)
  const active = projects.find((p) => p.id === activeId) ?? filtered[0]
  const activeIndex = filtered.findIndex((p) => p.id === active?.id)

  const swapTo = (id) => {
    if (!id || id === activeId) return
    if (exitTimer.current) clearTimeout(exitTimer.current)
    pendingId.current = id
    setPhase("exit")
    exitTimer.current = setTimeout(() => {
      setActiveId(pendingId.current)
      setPanelKey((k) => k + 1)
      setPhase("enter")
      pendingId.current = null
    }, EXIT_MS)
  }

  const selectFilter = (id) => {
    setFilter(id)
    setListKey((k) => k + 1)
    const next =
      id === "all"
        ? projects
        : id === "featured"
          ? projects.filter((p) => p.featured)
          : projects.filter((p) => p.category === id)
    if (next[0]) swapTo(next[0].id)
  }

  useEffect(() => {
    return () => {
      if (exitTimer.current) clearTimeout(exitTimer.current)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      if (!filtered.length) return
      const idx = filtered.findIndex((p) => p.id === activeId)
      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault()
        const next = filtered[Math.min(idx + 1, filtered.length - 1)]
        if (next) swapTo(next.id)
      }
      if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault()
        const prev = filtered[Math.max(idx - 1, 0)]
        if (prev) swapTo(prev.id)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [filtered, activeId])

  const statusMeta = STATUS[active?.status] ?? STATUS.prototype
  const panelClass =
    phase === "exit" ? "project-panel-exit" : "project-panel-enter"

  return (
    <section id="proyectos" className="ink-panel relative py-20 text-cream-50 md:py-28">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Reveal variant="up" className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-cream-200/15 pb-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-moss-400">
              [A] project archive · terminal · {projects.length} deploys
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Proyectos.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-cream-200/75">
              Archivo interactivo: selecciona un deploy a la izquierda. ↑↓ o J/K para navegar.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectFilter(cat.id)}
                className={`border px-3.5 py-2 text-[10px] uppercase tracking-wider transition duration-300 ${
                  filter === cat.id
                    ? "filter-chip-active border-moss-400 bg-moss-400 text-ink-950 shadow-[0_0_20px_rgba(107,125,82,0.35)]"
                    : "border-cream-200/25 text-cream-200 hover:border-moss-400/50 hover:text-cream-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variant="scale" delay={80} className="soft-glow">
        <div className="terminal-frame animate-pulse-border grid min-h-[42rem] overflow-hidden border border-cream-200/20 bg-ink-900/85 lg:min-h-[48rem] lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.55fr)]">
          {/* Mailbox */}
          <div className="flex flex-col border-b border-cream-200/15 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-cream-200/15 px-4 py-3.5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream-300/80">
                [A] mailbox · {filtered.length} entries
              </p>
              <div className="flex items-center gap-2 text-moss-400">
                <span className="project-status-dot" aria-hidden />
                <FolderGit2 size={14} />
              </div>
            </div>

            <ul className="flex-1 overflow-y-auto" key={listKey}>
              {filtered.map((project, i) => {
                const selected = project.id === active?.id
                const st = STATUS[project.status] ?? STATUS.prototype
                return (
                  <li
                    key={project.id}
                    className="mailbox-row-enter"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => swapTo(project.id)}
                      className={`group flex w-full flex-col gap-2 border-b border-cream-200/10 px-4 py-5 text-left transition-all duration-300 ${
                        selected
                          ? "bg-cream-50 text-ink-950"
                          : "text-cream-100 hover:bg-cream-50/[0.06] hover:pl-5"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span
                          className={`flex items-center gap-2 text-[10px] uppercase tracking-widest ${
                            selected ? "text-ink-600" : "text-cream-300/70"
                          }`}
                        >
                          <span aria-hidden className={selected ? "text-moss-500" : "text-moss-400"}>
                            {selected ? "▶" : "▣"}
                          </span>
                          #{String(i + 1).padStart(2, "0")} · {project.year}
                        </span>
                        <span
                          className={`border px-1.5 py-0.5 text-[9px] tracking-wider ${
                            selected
                              ? "border-ink-300 bg-ink-950 text-cream-50"
                              : st.className
                          }`}
                        >
                          {st.label}
                        </span>
                      </span>

                      <span className="font-display text-base font-semibold uppercase tracking-wide md:text-lg">
                        {project.name}
                      </span>

                      <span
                        className={`text-[11px] leading-snug ${
                          selected ? "text-ink-700" : "text-cream-300/80"
                        }`}
                      >
                        {project.short}
                      </span>

                      <span
                        className={`truncate text-[10px] uppercase tracking-wide ${
                          selected ? "text-ink-500" : "text-cream-300/55"
                        }`}
                      >
                        ROLE: {project.role}
                      </span>

                      <span
                        className={`truncate text-[11px] ${
                          selected ? "text-ink-600" : "text-cream-300/70"
                        }`}
                      >
                        STACK: {project.stack.slice(0, 3).join(" · ")}
                      </span>

                      {project.deploy && (
                        <span
                          className={`flex items-center gap-1.5 text-[10px] uppercase tracking-wider ${
                            selected ? "text-moss-500" : "text-moss-400/80"
                          }`}
                        >
                          <Server size={11} />
                          {project.deploy.env}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="mt-auto border-t border-cream-200/15 px-4 py-3 text-[10px] uppercase tracking-widest text-cream-300/55">
              sel {activeIndex + 1}/{filtered.length}
              <span className="project-cursor ml-1" aria-hidden>
                _
              </span>
            </div>
          </div>

          {/* Detail */}
          {active && (
            <div className="flex min-h-0 flex-col overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cream-200/15 px-5 py-3.5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream-300/80">
                  [B] message · deploy detail
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[9px] uppercase tracking-wider transition-all duration-300 ${statusMeta.className}`}
                >
                  <Radio size={10} className="project-status-dot-inline" />
                  {statusMeta.label}
                </span>
              </div>

              <div
                key={panelKey}
                className={`${panelClass} flex flex-1 flex-col gap-6 overflow-y-auto p-5 md:p-8`}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-moss-400">
                    {active.featured ? "DESTACADO" : active.category} · {active.year} ·{" "}
                    {active.role}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide md:text-4xl">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-sm text-cream-200/80">{active.short}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-wider text-signal">
                    IMPACT — {active.impact}
                  </p>
                </div>

                {active.screenshots?.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {active.screenshots.map((shot, idx) =>
                      shot.image ? (
                        <div
                          key={shot.label}
                          className="project-shot group overflow-hidden border border-cream-200/15 bg-ink-950 transition duration-500 hover:border-moss-400/50"
                          style={{ animationDelay: `${idx * 80}ms` }}
                        >
                          <img
                            src={asset(shot.image)}
                            alt={`${active.name} — ${shot.label}`}
                            className="aspect-[16/10] w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                            loading="lazy"
                          />
                          <p className="border-t border-cream-200/10 px-3 py-2 text-[10px] uppercase tracking-widest text-cream-300/70">
                            {shot.label}
                          </p>
                        </div>
                      ) : null,
                    )}
                  </div>
                )}

                <div className="space-y-3 border border-cream-200/10 bg-ink-950/40 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-cream-300/70">
                    Descripción
                  </p>
                  <p className="text-sm leading-relaxed text-cream-100">{active.description}</p>
                  {active.longDescription && (
                    <p className="text-sm leading-relaxed text-cream-200/85">
                      {active.longDescription}
                    </p>
                  )}
                </div>

                {active.highlights?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream-300/70">
                      Highlights
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {active.highlights.map((item) => (
                        <li
                          key={item}
                          className="border border-cream-200/15 bg-cream-50/[0.03] px-3 py-2.5 text-xs leading-snug text-cream-100 transition hover:border-moss-400/40"
                        >
                          › {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active.modules?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream-300/70">
                      Módulos / superficie
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.modules.map((mod) => (
                        <span
                          key={mod}
                          className="border border-moss-400/30 bg-moss-400/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-moss-400 transition hover:bg-moss-400/20"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {active.learned?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream-300/70">
                      Habilidades aprendidas
                    </p>
                    <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                      {active.learned.map((item) => (
                        <li key={item} className="text-xs text-cream-200">
                          › {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active.deploy && (
                  <div className="grid gap-3 border border-cream-200/15 bg-ink-950/50 p-4 sm:grid-cols-3">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-cream-300/55">
                        Deploy
                      </p>
                      <p className="mt-1 text-xs text-cream-100">{active.deploy.env}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-cream-300/55">
                        Runtime
                      </p>
                      <p className="mt-1 text-xs text-cream-100">{active.deploy.runtime}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-cream-300/55">
                        Data
                      </p>
                      <p className="mt-1 text-xs text-cream-100">{active.deploy.db}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-cream-200/20 px-2.5 py-1.5 text-[10px] uppercase tracking-wide text-cream-200 transition hover:border-signal hover:text-signal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-px border border-cream-200/20 bg-cream-200/20">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-moss-400 px-3 py-4 text-[11px] font-medium uppercase tracking-wider text-ink-950 transition hover:bg-moss-500"
                    >
                      <Github size={14} />
                      Repositorio
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {active.demo ? (
                    <a
                      href={
                        active.demo.startsWith("http") ? active.demo : asset(active.demo)
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center bg-ink-950 px-3 py-4 text-[11px] uppercase tracking-wider text-cream-50 transition hover:bg-ink-800"
                    >
                      Demo en vivo
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      className="flex items-center justify-center bg-ink-950 px-3 py-4 text-[11px] uppercase tracking-wider text-cream-50 transition hover:bg-ink-800"
                    >
                      Contacto
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
