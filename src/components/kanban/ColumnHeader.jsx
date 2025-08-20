'use client';

import { Plus } from 'lucide-react';

export default function ColumnHeader({
  title,
  count = 0,
  tone = 'violet',
  onAdd,
}) {
  const tones = {
    violet: 'bg-violet-500/20 text-violet-700 dark:text-violet-200',
    pink:   'bg-pink-500/20   text-pink-700   dark:text-pink-200',
    indigo: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-200',
  };
  const badge = tones[tone] ?? tones.violet;

  return (
    <div className="w-full">
      <div
        className="
          flex min-w-0 w-full items-center justify-between
          rounded-[22px] h-12 md:h-14 px-5 md:px-6
          border shadow-sm
          text-slate-900 dark:text-slate-100
        "
        style={{
          background: 'var(--tile-bg)',
          borderColor: 'var(--tile-border)',
        }}
      >
        {/* Title + count */}
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="truncate text-[13px] font-semibold tracking-wide uppercase"
            style={{ color: 'var(--text)' }}
          >
            {title}
          </span>

          <span
            className={`
              inline-flex h-6 min-w-6 items-center justify-center
              rounded-full px-2.5 text-[12px] font-semibold ${badge}
            `}
            /* keep count readable in both themes */
            style={{ color: '#fff' }}
          >
            {count}
          </span>
        </div>

        {/* + button (icon color follows theme text token) */}
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
          {/* Force icon color via CSS variable so it's dark in light mode */}
          <Plus size={18} style={{ color: 'var(--text)' }} />
        </button>
      </div>
    </div>
  );
}
