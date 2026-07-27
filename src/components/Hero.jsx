import { ArrowDown, Mail } from "lucide-react"
import GitHubIcon from "./GitHubIcon"
import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section id="inicio" className="ink-panel relative min-h-screen overflow-hidden pt-28 text-cream-50">
      <div className="grid-bg absolute inset-0 opacity-30 mix-blend-soft-light" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />
      <div className="float-slow absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-moss-500/15 blur-3xl" />
      <div
        className="float-slow absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
        <p className="animate-fade-up mb-3 text-[10px] uppercase tracking-[0.35em] text-moss-400">
          // bienvenida · portafolio_dev
        </p>
        <p
          className="animate-fade-up mb-8 max-w-lg text-sm text-cream-200"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.welcome}
        </p>

        <p
          className="animate-fade-up mb-5 text-[10px] uppercase tracking-[0.3em] text-cream-300/70"
          style={{ animationDelay: "0.08s" }}
        >
          {profile.school} · {profile.role}
        </p>

        <h1
          className="animate-fade-up hero-title text-cream-50"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.shortName}
        </h1>
        <div className="hero-line mt-4 h-px w-40 bg-gradient-to-r from-moss-400 to-transparent" />
        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-cream-200 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#proyectos"
            className="border border-cream-50 bg-cream-50 px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-ink-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cream-100"
          >
            Ver proyectos
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-cream-200/30 px-8 py-3.5 text-xs uppercase tracking-wider text-cream-50 transition duration-300 hover:-translate-y-0.5 hover:border-moss-400 hover:text-moss-400"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-cream-200/30 px-8 py-3.5 text-xs uppercase tracking-wider text-cream-50 transition duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signal"
          >
            <Mail size={16} />
            Contacto
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="animate-fade-up mt-24 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cream-300/70 transition hover:text-cream-50"
          style={{ animationDelay: "0.5s" }}
        >
          Continuar
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
