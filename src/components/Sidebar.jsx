'use client';

import { Grid, MessageSquare, Calendar, Settings, Bell } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside
      className="
        sticky top-0 z-30
        flex h-dvh w-16 shrink-0 flex-col justify-between
        bg-[var(--sidebar)] ring-1 ring-white/10
      "
    >
      {/* top avatar + nav */}
      <div className="flex flex-col items-center">
        {/* app avatar */}
        <div className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-fuchsia-500/20 text-white font-semibold">
          A
        </div>

        {/* nav */}
        <nav className="mt-6 flex flex-col items-center gap-6 text-slate-300">
          <button className="opacity-80 hover:opacity-100 transition-opacity" title="Board">
            <Grid size={20} />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity" title="Messages">
            <MessageSquare size={20} />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity" title="Calendar">
            <Calendar size={20} />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity" title="Settings">
            <Settings size={20} />
          </button>
        </nav>
      </div>

      {/* footer (NO THEME TOGGLE HERE) */}
      <div className="mb-4 flex flex-col items-center gap-6 text-slate-300">
        <button className="opacity-70 hover:opacity-100 transition-opacity" title="Notifications">
          <Bell size={20} />
        </button>

        {/* user bubble */}
        <div className="grid h-9 w-9 place-items-center rounded-full bg-black/30 ring-1 ring-white/10 text-white">
          N
        </div>
      </div>
    </aside>
  );
}