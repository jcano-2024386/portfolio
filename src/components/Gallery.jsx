import { projects } from "../data/projects"
import ScreenshotMock from "./ScreenshotMock"
import { asset } from "../lib/asset"

export default function Gallery() {
  const visual = projects.filter((p) => p.screenshots?.length)

  return (
    <section id="galeria" className="border-t border-carbon-600/50 bg-carbon-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-carbon-400">
          Vistas de proyectos
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-carbon-50 md:text-4xl">
          Capturas generales.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-carbon-200">
          Vista general de interfaces y capturas de código — evidencia visual de la
          capacidad de entrega.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
