import { profile } from "../data/profile"
import Reveal from "./Reveal"

export default function Stats() {
  return (
    <section id="stats" className="border-y border-ink-200 bg-cream-100">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink-200 md:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            variant="up"
            delay={i * 90}
            className="px-6 py-12 text-center md:py-14"
          >
            <p className="font-display text-4xl font-bold text-ink-950 transition duration-500 md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-ink-600">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
