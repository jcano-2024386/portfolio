import { ArrowDown, Mail } from "lucide-react"
import GitHubIcon from "./GitHubIcon"
import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
        <p className="animate-fade-up mb-4 text-xs uppercase tracking-[0.3em] text-carbon-400">
          Bienvenida
        </p>
        <p
          className="animate-fade-up mb-8 max-w-lg text-sm text-carbon-200"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.welcome}
        </p>

        <p
          className="animate-fade-up mb-6 text-xs uppercase tracking-[0.3em] text-carbon-400"
          style={{ animationDelay: "0.08s" }}
        >
          {profile.school} · {profile.role}
        </p>

        <h1
          className="animate-fade-up hero-title text-carbon-50"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.name}
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-carbon-200 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.role}. {profile.tagline}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#proyectos"
            className="rounded-full bg-carbon-50 px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-carbon-950 transition hover:bg-white"
          >
            Ver proyectos
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-carbon-600 px-8 py-3.5 text-xs uppercase tracking-wider text-carbon-50 transition hover:border-carbon-400"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-carbon-600 px-8 py-3.5 text-xs uppercase tracking-wider text-carbon-50 transition hover:border-carbon-400"
          >
            <Mail size={16} />
            Contacto
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="animate-fade-up mt-24 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-carbon-400 transition hover:text-carbon-200"
          style={{ animationDelay: "0.5s" }}
        >
          Continuar
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
