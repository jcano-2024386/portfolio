import { profile } from "../data/profile"

export default function Stats() {
  return (
    <section id="stats" className="border-y border-carbon-600/50 bg-carbon-900">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-carbon-600/50 md:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="px-6 py-12 text-center md:py-16">
            <p className="font-display text-4xl font-bold text-carbon-50 md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-carbon-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
