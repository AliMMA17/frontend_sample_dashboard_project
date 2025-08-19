'use client';

import { Plus } from 'lucide-react';

export default function ColumnHeader({
  title,
  count = 0,
  tone = 'violet',
  onAdd,
}) {
  const tones = {
    violet: 'bg-violet-500/25 text-violet-200',
    pink:   'bg-pink-500/25 text-pink-200',
    indigo: 'bg-indigo-500/25 text-indigo-200',
  };
  const badge = tones[tone] ?? tones.violet;

  return (
    // Full-width header; pill uses the *same* color system as cards
    <div className="w-full">
      <div
        className="
          flex min-w-0 w-full items-center justify-between
          rounded-[22px] h-12 md:h-14 px-5 md:px-6
          border shadow-sm
        "
        style={{
          background: 'var(--tile-bg)',      // same surface as TaskCard
          borderColor: 'var(--tile-border)', // subtle border like cards
        }}
      >
        {/* Title + count */}
        <div className="flex min-w-0 items-center gap-3">
          <span className="truncate text-[13px] font-semibold tracking-wide uppercase text-slate-100">
            {title}
          </span>
          <span className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2.5 text-[12px] font-semibold ${badge}`}>
            {count}
          </span>
        </div>

        {/* + button (inside the same pill) */}
        <button
          type="button"
          onClick={onAdd}
          aria-label={`Add to ${title}`}
          className="
            shrink-0 grid place-items-center
            h-9 w-9 rounded-full
            bg-white/[0.08] ring-1 ring-white/10
            hover:bg-white/[0.14] transition-colors
          "
        >
          <Plus size={18} className="text-slate-200" />
        </button>
      </div>
    </div>
  );
}