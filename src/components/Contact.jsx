import { ExternalLink, Mail, Phone } from "lucide-react"
import GitHubIcon from "./GitHubIcon"
import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section id="contacto" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border border-ink-200 bg-cream-100 p-10 md:p-16">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-moss-500">
            Contacto y redes profesionales
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold leading-snug text-ink-950 md:text-5xl">
            Conectemos.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm text-ink-600">
            Correo, teléfono y perfiles en GitHub, LinkedIn y CompuTrabajo.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 border border-ink-950 bg-ink-950 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-cream-50 transition hover:bg-ink-800 sm:col-span-2"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:+502${profile.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-ink-300 bg-cream-50 px-6 py-3.5 text-xs uppercase tracking-wider text-ink-950 transition hover:border-moss-500 sm:col-span-2"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink-300 px-6 py-3.5 text-xs uppercase tracking-wider text-ink-950 transition hover:border-moss-500"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink-300 px-6 py-3.5 text-xs uppercase tracking-wider text-ink-950 transition hover:border-moss-500"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>
            <a
              href={profile.computrabajo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink-300 px-6 py-3.5 text-xs uppercase tracking-wider text-ink-950 transition hover:border-moss-500 sm:col-span-2"
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
