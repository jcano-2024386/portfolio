import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="border-t border-carbon-600/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-carbon-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 uppercase tracking-widest">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-carbon-50">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-carbon-50">
            LinkedIn
          </a>
          <a
            href={profile.computrabajo}
            target="_blank"
            rel="noreferrer"
            className="hover:text-carbon-50"
          >
            CompuTrabajo
          </a>
        </div>
      </div>
    </footer>
  )
}
