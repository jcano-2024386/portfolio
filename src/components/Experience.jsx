import { Briefcase, GraduationCap } from "lucide-react"
import { profile } from "../data/profile"
import Reveal from "./Reveal"

export default function Experience() {
  return (
    <section id="experiencia" className="border-t border-ink-200 bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="up">
          <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">
            Curriculum virtual
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
            Educación y experiencia.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-600">
            Formación en programación y trayectoria en proyectos académicos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal variant="left" delay={80}>
            <div className="mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-400">
              <GraduationCap size={16} />
              Educación
            </div>
            <ul className="space-y-6">
              {profile.education.map((item) => (
                <li
                  key={item.title}
                  className="relative border-l border-ink-300 pl-6 transition duration-300 hover:border-moss-400"
                >
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 bg-moss-500 transition group-hover:scale-110" />
                  <p className="font-display text-lg font-semibold text-ink-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">{item.place}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-400">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <div className="mb-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-400">
              <Briefcase size={16} />
              Experiencia
            </div>
            <ul className="space-y-6">
              {profile.experience.map((item) => (
                <li
                  key={item.title}
                  className="relative border-l border-ink-300 pl-6 transition duration-300 hover:border-moss-400"
                >
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 border-2 border-ink-950 bg-cream-100" />
                  <p className="font-display text-lg font-semibold text-ink-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-700">{item.place}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-ink-400">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
