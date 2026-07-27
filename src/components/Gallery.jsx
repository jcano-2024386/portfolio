import { projects } from "../data/projects"
import ScreenshotMock from "./ScreenshotMock"
import { asset } from "../lib/asset"
import Reveal from "./Reveal"

/**
 * Rúbrica e — Vistas de proyectos:
 * galería con capturas de interfaces (solo proyectos con UI visual).
 */
export default function Gallery() {
  const visual = projects.filter((p) => p.hasUi && p.screenshots?.length)

  const shots = visual.flatMap((project) =>
    project.screenshots
      .filter((shot) => shot.image && !shot.image.endsWith(".svg"))
      .map((shot) => ({
        ...shot,
        projectName: project.name,
        key: `${project.id}-${shot.label}`,
      })),
  )

  return (
    <section id="galeria" className="border-t border-ink-200 bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="up">
          <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">
            Vistas de proyectos
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
            Galería.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-600">
            Capturas generales de interfaces y paneles — evidencia visual de los
            proyectos con UI.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <Reveal key={shot.key} variant="scale" delay={i * 70}>
              <div className="transition duration-500 hover:-translate-y-1">
                <ScreenshotMock
                  label={shot.label}
                  tone={shot.tone}
                  title={shot.projectName}
                  image={asset(shot.image)}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
