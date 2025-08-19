'use client';

/**
 * One pill: avatar + title + right lozenge inside a single rounded rectangle.
 * - No absolute for the lozenge (uses flex so it never overlaps the title)
 * - Always dark outer pill (matches the design in both themes)
 * - Min width so the title can't collapse to zero
 */
export default function ScheduleItem({
  title,
  width = '76%',                       // % inside the day column
  avatar = { initials: 'AB', src: '' }, // { src?: string, initials?: string }
  chips = ['Task 2', 'Hours 08'],
  chipGradient = 'from-amber-400 to-amber-500', // tailwind gradient classes
  className = '',
}) {
  return (
    <div
      className={['relative mx-auto max-w-full', className].join(' ')}
      style={{ width: typeof width === 'number' ? `${width}%` : width }}
    >
      {/* OUTER PILL */}
      <div
        className="
          relative flex items-center gap-3 rounded-full
          bg-[#1C1C21] text-white
          px-5 py-2 h-12
          shadow-lg shadow-black/30 ring-1 ring-white/10
          min-w-[260px] md:min-w-[320px]
        "
      >
        {/* Avatar bubble (slightly overlaps the left edge) */}
        <div className="-ml-6 shrink-0 h-9 w-9 overflow-hidden rounded-full ring-4 ring-black/40 bg-slate-200 text-slate-900 grid place-items-center text-xs font-semibold">
          {avatar?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar.src} alt="" className="h-full w-full object-cover" />
          ) : (
            <span>{avatar?.initials ?? ''}</span>
          )}
        </div>

        {/* Title */}
        <span className="min-w-0 flex-1 truncate text-sm font-semibold">
          {title}
        </span>

        {/* RIGHT LOZENGE (inside the pill, not absolute) */}
        <div
          className={`ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2 h-9
                      text-slate-900 bg-gradient-to-r ${chipGradient} shadow`}
        >
          {chips.map((c, i) => (
            <span
              key={i}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] leading-none"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}