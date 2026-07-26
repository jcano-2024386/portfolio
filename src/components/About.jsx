import { profile } from "../data/profile"

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">Sobre mí</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-ink-950 md:text-4xl">
            {profile.role}
          </h2>
          <p className="mt-4 text-sm text-ink-600">{profile.school}</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-ink-400">Descripción</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800 md:text-base">
              {profile.intro}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-ink-400">Metas</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800">{profile.goals}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-ink-400">Aspiraciones</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800">
              {profile.aspirations}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-ink-400">Capacidades</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800">
              {profile.capabilities}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.tools.map((tool) => (
              <span
                key={tool}
                className="border border-ink-200 bg-cream-100 px-3 py-1.5 text-xs text-ink-800"
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
