import ScreenshotMock from "./ScreenshotMock"
import { asset } from "../lib/asset"

export default function ProjectCard({ project, large = false }) {
  const shot = project.screenshots?.[0]

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-carbon-600/60 bg-carbon-800/40 transition duration-300 hover:border-carbon-400/40 hover:bg-carbon-800/80">
      {shot && (
        <div className="border-b border-carbon-600/50">
          <ScreenshotMock
            label={shot.label}
            tone={shot.tone}
            title={project.name}
            image={shot.image ? asset(shot.image) : undefined}
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 ${large ? "md:p-8" : ""}`}>
        <div className="mb-4">
          {project.featured && (
            <span className="mb-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-carbon-400">
              Destacado
            </span>
          )}
          <h3
            className={`font-display font-bold text-carbon-50 ${large ? "text-2xl md:text-3xl" : "text-lg"}`}
          >
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-carbon-400">{project.year}</p>
        </div>

        <p
          className={`text-carbon-200 ${large ? "text-sm leading-relaxed md:text-base" : "text-xs leading-relaxed"}`}
        >
          {project.description}
        </p>

        {project.learned?.length > 0 && (
          <div className="mt-5">
            <p className="text-[10px] uppercase tracking-widest text-carbon-400">
              Habilidades aprendidas
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.learned.map((item) => (
                <li key={item} className="text-xs leading-relaxed text-carbon-200">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-carbon-700/80 px-2.5 py-1 text-[10px] uppercase tracking-wide text-carbon-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 mt-auto flex flex-wrap gap-4 border-t border-carbon-600/50 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-carbon-200 transition hover:text-carbon-50"
            >
              Repositorio
            </a>
          )}
          {project.demo && (
            <a
              href={
                project.demo.startsWith("http") ? project.demo : asset(project.demo)
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-carbon-200 transition hover:text-carbon-50"
            >
              Despliegue
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs text-carbon-500">Repositorio local / académico</span>
          )}
        </div>
      </div>
    </article>
  )
}
