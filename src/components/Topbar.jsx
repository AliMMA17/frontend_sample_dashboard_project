'use client';
import { Filter, Search, ChevronRight, Bell } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Topbar() {
  return (
    <header className="mb-4">
      <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
        <span>Project</span>
        <ChevronRight size={16} />
        <span>Mobile App</span>
        <ChevronRight size={16} />
        <span className="font-medium text-slate-900 dark:text-slate-200">Board</span>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Mobile App</h1>

        <div className="flex items-center gap-2">
          <div className="relative w-72 hidden md:block">
            <input
              placeholder="Search here"
              className="w-full rounded-full border border-slate-200/70 bg-white/80 px-11 py-2.5 text-sm
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400
                         dark:border-white/10 dark:bg-slate-900/70"
            />
            <Search className="absolute left-4 top-2.5 text-slate-400" size={18} />
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800">
            <Filter size={16} /> Filter
          </button>

          <ThemeToggle />

          <button
            aria-label="Notifications"
            className="relative grid place-items-center rounded-xl border border-slate-200/70 bg-white p-2.5
                       hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <Bell size={18} className="text-slate-600 dark:text-slate-300" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm">
        {['Overview','Boards','Timeline','Activities','Files'].map((t,i)=> (
          <button key={t}
            className={i===1
              ? 'text-violet-600 dark:text-violet-300 font-medium underline decoration-2 underline-offset-8'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-200'}>
            {t}
          </button>
        ))}
      </div>
    </header>
  );
}