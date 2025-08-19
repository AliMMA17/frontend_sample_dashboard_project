'use client';

import { Bell, Filter, Search, ChevronRight, SlidersHorizontal } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Topbar() {
  return (
    <header className="mb-6">
      {/* Row 1: Search (left)  •  Theme + Bell (right) */}
      <div className="flex items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full max-w-xl">
          <input
            placeholder="Search here"
            className="w-full h-11 rounded-full border px-11 text-sm
                       border-slate-300/60 bg-white/90 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-violet-400
                       dark:border-white/10 dark:bg-slate-900/70"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="h-6 w-px bg-slate-300/60 dark:bg-white/10" aria-hidden />

          <button
            aria-label="Notifications"
            className="relative grid place-items-center rounded-xl border p-2.5
                       border-slate-300/70 bg-white hover:bg-slate-50
                       dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Bell size={18} className="text-slate-600 dark:text-slate-300" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
          </button>
        </div>
      </div>

      {/* Row 2: Breadcrumb + Title */}
      <div className="mt-5">
        <div className="mb-1 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Project</span>
          <ChevronRight size={16} />
          <span>Mobile App</span>
          <ChevronRight size={16} />
          <span className="font-medium text-slate-900 dark:text-slate-200">Board</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Mobile App</h1>
      </div>

      {/* Row 3: Tabs (left)  •  Filter/Sort (right) */}
      <div className="mt-4 flex items-center justify-between">
        {/* Tabs */}
        <nav className="flex items-center gap-6 text-sm">
          {['Overview', 'Boards', 'Timeline', 'Activities', 'Files'].map((t, i) => (
            <button
              key={t}
              className={
                i === 1
                  ? 'text-violet-600 dark:text-violet-300 font-medium underline decoration-2 underline-offset-8'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Filter / Sort */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                       border-slate-300/70 bg-white hover:bg-slate-50
                       dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Filter size={16} /> Filter
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                       border-slate-300/70 bg-white hover:bg-slate-50
                       dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <SlidersHorizontal size={16} /> Sort
          </button>
        </div>
      </div>
    </header>
  );
}