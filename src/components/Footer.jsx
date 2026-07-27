import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="ink-panel border-t border-cream-200/10 py-10 text-cream-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 uppercase tracking-widest text-cream-300/80">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cream-50">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cream-50">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
