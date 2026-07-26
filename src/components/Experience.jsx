import { Briefcase, GraduationCap } from "lucide-react"
import { profile } from "../data/profile"

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-carbon-400">
          Curriculum virtual
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-carbon-50 md:text-4xl">
          Educación y experiencia.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-carbon-200">
          Formación en programación y trayectoria en proyectos académicos y colaborativos.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-carbon-400">
              <GraduationCap size={16} />
              Educación
            </div>
            <ul className="space-y-6">
              {profile.education.map((item) => (
                <li
                  key={item.title}
                  className="relative border-l border-carbon-600 pl-6"
                >
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-carbon-50" />
                  <p className="font-display text-lg font-semibold text-carbon-50">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-carbon-200">{item.place}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-carbon-400">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-carbon-200">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-carbon-400">
              <Briefcase size={16} />
              Experiencia
            </div>
            <ul className="space-y-6">
              {profile.experience.map((item) => (
                <li
                  key={item.title}
                  className="relative border-l border-carbon-600 pl-6"
                >
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-carbon-50 bg-carbon-950" />
                  <p className="font-display text-lg font-semibold text-carbon-50">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-carbon-200">{item.place}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-carbon-400">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-carbon-200">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
