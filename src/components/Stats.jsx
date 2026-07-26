import { profile } from "../data/profile"

export default function Stats() {
  return (
    <section id="stats" className="border-y border-ink-200 bg-cream-100">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink-200 md:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="px-6 py-12 text-center md:py-14">
            <p className="font-display text-4xl font-bold text-ink-950 md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-ink-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
