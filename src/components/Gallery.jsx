import { projects } from "../data/projects"
import ScreenshotMock from "./ScreenshotMock"
import { asset } from "../lib/asset"

export default function Gallery() {
  const visual = projects.filter((p) => p.screenshots?.length)

  return (
    <section id="galeria" className="border-t border-ink-200 bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">
          Vistas de proyectos
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
          Capturas generales.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-600">
          Vista general de interfaces y capturas — evidencia visual de la capacidad de entrega.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visual.flatMap((project) =>
            project.screenshots.map((shot) => (
              <ScreenshotMock
                key={`${project.id}-${shot.label}`}
                label={shot.label}
                tone={shot.tone}
                title={project.name}
                image={shot.image ? asset(shot.image) : undefined}
              />
            )),
          )}
        </div>
      </div>
    </section>
  )
}
