import { profile } from "../data/profile"

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-200 bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">Habilidades</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-snug text-ink-950 md:text-4xl">
            Tecnologías y nivel.
          </h2>
          <p className="mt-3 text-sm text-ink-600">
            Representación visual del dominio técnico (porcentaje estimado de práctica).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {profile.skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-ink-200 bg-cream-100/80 p-5"
            >
              <div className="mb-3 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold text-ink-950">
                    {skill.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-ink-400">
                    {skill.level}
                  </p>
                </div>
                <span className="font-display text-2xl font-semibold tabular-nums text-ink-950">
                  {skill.percent}%
                </span>
              </div>
              <div
                className="h-2 overflow-hidden bg-ink-200"
                role="progressbar"
                aria-valuenow={skill.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name}: ${skill.percent}%`}
              >
                <div
                  className="h-full bg-gradient-to-r from-moss-500 to-signal transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
