import { Mail, MapPin, GraduationCap, Calendar, User } from "lucide-react"
import { profile } from "../data/profile"

const items = [
  { icon: User, label: "Nombre", value: profile.name },
  { icon: Calendar, label: "Edad", value: `${profile.age} años` },
  { icon: MapPin, label: "Ubicación", value: profile.location },
  { icon: Mail, label: "Contacto", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: GraduationCap,
    label: "Formación",
    value: profile.currentlyStudying
      ? `En formación — ${profile.career}`
      : profile.career,
  },
  {
    icon: Calendar,
    label: "Experiencia",
    value: `${profile.yearsDeveloping} años desarrollando`,
  },
]

export default function GeneralData() {
  return (
    <section id="datos" className="border-t border-carbon-600/50 bg-carbon-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-carbon-400">Datos generales</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-carbon-50 md:text-4xl">
          Quién soy, en detalle.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-carbon-200">
          Información de contacto y contexto académico para conocerme mejor.
        </p>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-2xl border border-carbon-600/50 bg-carbon-800/30 p-5"
            >
              <dt className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-carbon-400">
                <Icon size={14} aria-hidden />
                {label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-carbon-50">
                {href ? (
                  <a href={href} className="transition hover:text-white">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
