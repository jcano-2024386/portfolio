const TONES = {
  violet: "from-[#5B5CF6]/40 to-[#A855F7]/20",
  teal: "from-teal-500/40 to-cyan-600/20",
  blue: "from-blue-500/40 to-indigo-600/20",
  cyan: "from-cyan-400/40 to-blue-600/20",
  amber: "from-amber-500/40 to-orange-600/20",
  rose: "from-rose-500/40 to-pink-600/20",
  emerald: "from-emerald-500/40 to-green-700/20",
  slate: "from-slate-400/30 to-slate-700/20",
  indigo: "from-indigo-500/40 to-violet-700/20",
}

/**
 * Captura de proyecto (rúbrica).
 * Prioriza `image` real; si no hay, usa mock visual.
 */
export default function ScreenshotMock({ label, tone = "violet", title, image }) {
  const gradient = TONES[tone] ?? TONES.violet

  if (image) {
    return (
      <div className="overflow-hidden rounded-xl border border-carbon-600/60 bg-carbon-900">
        <div className="relative aspect-[16/10] bg-carbon-950">
          <img
            src={image}
            alt={title ? `${title} — ${label}` : label}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="border-t border-carbon-600/50 px-3 py-2.5">
          <p className="text-[10px] uppercase tracking-widest text-carbon-400">{label}</p>
          {title && <p className="mt-0.5 text-xs font-medium text-carbon-50">{title}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-carbon-600/60 bg-carbon-900">
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} p-4`}>
        <div className="absolute inset-3 rounded-lg border border-white/10 bg-carbon-950/70 p-3 shadow-inner backdrop-blur-sm">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-[40%] rounded bg-white/20" />
            <div className="h-2 w-[80%] rounded bg-white/10" />
            <div className="h-2 w-[60%] rounded bg-white/10" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-white/10" />
              <div className="h-10 rounded bg-white/15" />
              <div className="h-10 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-carbon-600/50 px-3 py-2.5">
        <p className="text-[10px] uppercase tracking-widest text-carbon-400">{label}</p>
        {title && <p className="mt-0.5 text-xs font-medium text-carbon-50">{title}</p>}
      </div>
    </div>
  )
}
