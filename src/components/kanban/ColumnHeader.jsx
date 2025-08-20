'use client';

import { Plus } from 'lucide-react';

export default function ColumnHeader({
  title,
  count = 0,
  tone = 'violet',
  onAdd,
}) {
  // tones set ONLY the background; text color is controlled separately below
  const toneBg = {
    violet: 'bg-violet-500/80 dark:bg-violet-400/90',
    pink:   'bg-pink-500/80   dark:bg-pink-400/90',
    indigo: 'bg-indigo-500/80 dark:bg-indigo-400/90',
  }[tone] ?? 'bg-violet-500/80 dark:bg-violet-400/90';

  return (
    <div className="w-full">
      <div
        className="
          flex min-w-0 w-full items-center justify-between
          rounded-[22px] h-12 md:h-14 px-5 md:px-6
          border shadow-sm
          text-slate-900 dark:text-slate-100
        "
        style={{ background: 'var(--tile-bg)', borderColor: 'var(--tile-border)' }}
      >
        {/* Title + count */}
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="truncate text-[13px] font-semibold tracking-wide uppercase"
            style={{ color: 'var(--text)' }}  // force correct light/dark title color
          >
            {title}
          </span>

          {/* Count pill: white text in light, near-black in dark (as in mock) */}
          <span
            className={[
              'inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2.5',
              'text-[12px] font-semibold',
              toneBg,
              'text-white dark:text-[#151133]', // <- this line is the key
            ].join(' ')}
          >
            {count}
          </span>
        </div>

        {/* + button (inside same chip) */}
        <button
          type="button"
          onClick={onAdd}
          aria-label={`Add to ${title}`}
          className="
            shrink-0 grid place-items-center
            h-9 w-9 rounded-full ring-1 ring-black/5 dark:ring-white/10
            transition-colors hover:opacity-90
          "
          style={{ background: 'var(--chip-bg)' }}
        >
          <Plus size={18} className="text-slate-700 dark:text-slate-200" />
        </button>
      </div>
    </div>
  );
}
