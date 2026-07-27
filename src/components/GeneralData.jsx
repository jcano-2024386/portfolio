import { Mail, MapPin, GraduationCap, Calendar, User, Phone } from "lucide-react"
import { profile } from "../data/profile"
import Reveal from "./Reveal"

const items = [
  { icon: User, label: "Nombre", value: profile.name },
  { icon: Calendar, label: "Edad", value: `${profile.age} años (${profile.birthYear})` },
  { icon: MapPin, label: "Ubicación", value: profile.location },
  { icon: Mail, label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Teléfono", value: profile.phone, href: `tel:+502${profile.phone}` },
  {
    icon: GraduationCap,
    label: "Formación",
    value: profile.currentlyStudying
      ? `En formación — ${profile.career}`
      : profile.career,
  },
]

export default function GeneralData() {
  return (
    <section id="datos" className="border-t border-ink-200 bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="up">
          <p className="text-[10px] uppercase tracking-[0.35em] text-moss-500">Datos generales</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
            Quién soy, en detalle.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-600">
            Información de contacto y contexto académico.
          </p>
        </Reveal>

        <dl className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} variant="up" delay={i * 70}>
              <div className="border border-ink-200 bg-cream-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-moss-400">
                <dt className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-400">
                  <Icon size={14} aria-hidden />
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink-950">
                  {href ? (
                    <a href={href} className="transition hover:text-moss-500">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
