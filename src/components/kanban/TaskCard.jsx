'use client';
import { MoreHorizontal, MessageSquare, Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { AvatarGroup } from '@/components/ui/Avatar';

export default function TaskCard({ task }) {
  return (
    <div
      className="rounded-[22px] border p-4 transition-shadow hover:shadow-md"
      style={{
        background: 'var(--tile-bg)',     // <- white in light, purple tile in dark
        borderColor: 'var(--tile-border)' // <- subtle light/dark border
      }}
    >
      {/* tags + menu */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {task.tags.map((t, i) => (
          <Badge key={i} label={t.label} tone={t.tone} />
        ))}
        <button className="ml-auto text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* image */}
      {task.image ? (
        <div className="mb-3 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
          <img src={task.image} alt="preview" className="h-36 w-full object-cover" />
        </div>
      ) : null}

      {/* title + desc */}
      <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
        {task.title}
      </h4>
      <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {task.desc}
      </p>

      {/* footer */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <AvatarGroup names={task.people} />
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <MessageSquare size={16} /> {task.comments}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye size={16} /> {task.views}
          </span>
        </div>
      </div>
    </div>
  );
}