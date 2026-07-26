const TONES = {
  violet: "from-ink-700 to-ink-900",
  teal: "from-moss-500/80 to-ink-900",
  blue: "from-ink-600 to-ink-900",
  cyan: "from-moss-400/70 to-ink-800",
  amber: "from-signal/70 to-ink-900",
  rose: "from-ink-700 to-ink-950",
  emerald: "from-moss-500 to-ink-900",
  slate: "from-ink-600 to-ink-900",
  indigo: "from-ink-700 to-ink-950",
  moss: "from-moss-500 to-ink-900",
  cream: "from-cream-200 to-ink-800",
  ink: "from-ink-800 to-ink-950",
}

export default function ScreenshotMock({ label, tone = "moss", title, image }) {
  const gradient = TONES[tone] ?? TONES.moss

  if (image) {
    return (
      <div className="overflow-hidden border border-ink-200 bg-cream-100">
        <div className="relative aspect-[16/10] bg-ink-950">
          <img
            src={image}
            alt={title ? `${title} — ${label}` : label}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="border-t border-ink-200 px-3 py-2.5">
          <p className="text-[10px] uppercase tracking-widest text-ink-400">{label}</p>
          {title && <p className="mt-0.5 text-xs font-medium text-ink-950">{title}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden border border-ink-200 bg-cream-100">
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} p-4`}>
        <div className="absolute inset-3 border border-cream-50/15 bg-ink-950/75 p-3">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 bg-cream-200/70" />
            <span className="h-2 w-2 bg-signal/70" />
            <span className="h-2 w-2 bg-moss-400/70" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-[40%] bg-cream-50/25" />
            <div className="h-2 w-[80%] bg-cream-50/15" />
            <div className="h-2 w-[60%] bg-cream-50/15" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-10 bg-cream-50/10" />
              <div className="h-10 bg-cream-50/15" />
              <div className="h-10 bg-cream-50/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-200 px-3 py-2.5">
        <p className="text-[10px] uppercase tracking-widest text-ink-400">{label}</p>
        {title && <p className="mt-0.5 text-xs font-medium text-ink-950">{title}</p>}
      </div>
    </div>
  )
}
