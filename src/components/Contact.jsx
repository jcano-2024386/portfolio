import { ExternalLink, Mail } from "lucide-react"
import GitHubIcon from "./GitHubIcon"
import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-carbon-600/50 bg-carbon-800/30 p-10 md:p-16">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-carbon-400">
            Contacto y redes profesionales
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold leading-snug text-carbon-50 md:text-5xl">
            Conectemos.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm text-carbon-200">
            Correo institucional y perfiles en GitHub, LinkedIn y CompuTrabajo — canales
            recomendados para oportunidades laborales.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-carbon-50 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-carbon-950 transition hover:bg-white sm:col-span-2"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-carbon-600 px-6 py-3.5 text-xs uppercase tracking-wider text-carbon-50 transition hover:border-carbon-400"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-carbon-600 px-6 py-3.5 text-xs uppercase tracking-wider text-carbon-50 transition hover:border-carbon-400"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>
            <a
              href={profile.computrabajo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-carbon-600 px-6 py-3.5 text-xs uppercase tracking-wider text-carbon-50 transition hover:border-carbon-400 sm:col-span-2"
            >
              <ExternalLink size={16} />
              CompuTrabajo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
