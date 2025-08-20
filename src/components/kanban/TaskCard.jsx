'use client';
import { MoreHorizontal, MessageSquare, Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { AvatarGroup } from '@/components/ui/Avatar';

export default function TaskCard({ task }) {
  return (
    <div
      className="rounded-[22px] border p-4 transition-shadow hover:shadow-md"
      style={{
        background: 'var(--tile-bg)',     // light: white · dark: purple tile
        borderColor: 'var(--tile-border)' // subtle border both themes
      }}
    >
      {/* tags + menu */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {task.tags.map((t, i) => (
          <Badge key={i} label={t.label} tone={t.tone} />
        ))}

        <button
          className="ml-auto transition-opacity hover:opacity-80"
          style={{ color: 'var(--muted)' }}   // uses token, so dark in light, light in dark
          aria-label="More"
        >
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
      <h4
        className="mb-1 text-[15px] font-semibold"
        style={{ color: 'var(--text)' }}       // <- dark text in light mode
      >
        {task.title}
      </h4>

      <p
        className="mb-4 text-sm leading-relaxed"
        style={{ color: 'var(--muted)' }}       // secondary text token
      >
        {task.desc}
      </p>

      {/* footer */}
      <div
        className="flex items-center justify-between text-xs"
        style={{ color: 'var(--muted)' }}       // counts/icons follow muted token
      >
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
