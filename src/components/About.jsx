import { profile } from "../data/profile"

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-carbon-400">Sobre mí</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-carbon-50 md:text-4xl">
            {profile.role}
          </h2>
          <p className="mt-4 text-sm text-carbon-400">{profile.school}</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-carbon-400">Descripción</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon-200 md:text-base">
              {profile.intro}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-carbon-400">Metas</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon-200">{profile.goals}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-carbon-400">Aspiraciones</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon-200">
              {profile.aspirations}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-carbon-400">Capacidades</p>
            <p className="mt-2 text-sm leading-relaxed text-carbon-200">
              {profile.capabilities}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-carbon-600 px-4 py-1.5 text-xs text-carbon-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
