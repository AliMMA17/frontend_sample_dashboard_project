'use client';
import { MoreHorizontal, MessageSquare, Eye } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { AvatarGroup } from '@/components/ui/Avatar';

export default function TaskCard({ task }) {
  return (
    <div
      className="
        rounded-2xl 
        bg-[#1E1B3A]    /* <-- purple-ish background like the design */
        p-4 
        hover:shadow-lg 
        transition-shadow
        border 
        border-[#2A2550]  /* subtle darker purple border */
      "
    >
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {task.tags.map((t, i) => (
          <Badge key={i} label={t.label} tone={t.tone} />
        ))}
        <button className="ml-auto text-slate-400 hover:text-slate-200">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {task.image ? (
        <div className="mb-3 overflow-hidden rounded-xl">
          <img
            src={task.image}
            alt="preview"
            className="w-full h-36 object-cover"
          />
        </div>
      ) : null}

      <h4 className="text-sm font-semibold mb-1 text-white">
        {task.title}
      </h4>
      <p className="text-sm leading-relaxed text-slate-300 mb-4">
        {task.desc}
      </p>

      <div className="flex items-center justify-between text-xs text-slate-400">
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