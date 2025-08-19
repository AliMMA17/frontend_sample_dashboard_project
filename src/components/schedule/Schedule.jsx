'use client';

import { UserPlus } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/Avatar';

// tiny avatar chip at the start of a task pill
function MiniAvatar({ name, bg = 'bg-slate-300' }) {
  const initials = name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold text-slate-900 ${bg}`}
      style={{ boxShadow: '0 0 0 3px rgba(255,255,255,.6)' }}
    >
      {initials}
    </div>
  );
}

const days = [
  { label: 'Mon', date: 20 },
  { label: 'Tue', date: 21 },
  { label: 'Wed', date: 22 },
];

const times = ['08:00', '09:00', '10:00', '11:00'];

// duration in hours controls pill width a bit
const tasks = [
  { day: 0, time: '08:00', title: 'Design System', color: 'bg-amber-500',  avatarName: 'Alex Brown',  duration: 2 },
  { day: 1, time: '09:00', title: 'Wireframes',    color: 'bg-pink-500',   avatarName: 'Maria Chen',  duration: 2 },
  { day: 2, time: '10:00', title: 'UX Research',   color: 'bg-indigo-500', avatarName: 'Sam Hill',    duration: 2 },
];

// convert duration (1..3) to percentage width of the day cell
const widthFromDuration = (d) => {
  if (d >= 3) return '90%';
  if (d === 2) return '72%';
  return '52%';
};

export default function Schedule() {
  // row height in px (kept in one place so layout is consistent)
  const ROW_H = 72;

  return (
    <div
      className="rounded-[22px] border p-4 md:p-5"
      style={{ background: 'var(--tile-bg)', borderColor: 'var(--tile-border)' }}
    >
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold">Schedule</h3>

        <div className="flex items-center gap-2">
          <AvatarGroup names={['David Cameron', 'Lina Ross', 'Max Turner']} />
          <button
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs
                       border-violet-300/60 text-violet-700 bg-violet-50
                       dark:border-white/20 dark:text-violet-200 dark:bg-transparent"
            title="Invite People"
          >
            <UserPlus size={14} />
            Invite People
          </button>
        </div>
      </div>

      {/* Grid: [time | d1 | d2 | d3] */}
      <div className="grid grid-cols-[72px_repeat(3,minmax(0,1fr))] gap-x-6">
        {/* Day headers (empty spacer for time col) */}
        <div />
        {days.map((d) => (
          <div key={d.label} className="pb-3">
            <div className="text-xs text-slate-500 dark:text-slate-300">{d.label}</div>
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{d.date}</div>
          </div>
        ))}

        {/* Rows */}
        {times.map((t, rowIdx) => (
          <Row key={t} t={t} rowIdx={rowIdx} rowHeight={ROW_H} />
        ))}
      </div>
    </div>
  );
}

function Row({ t, rowIdx, rowHeight }) {
  const dotted = rowIdx < times.length - 1 ? 'border-b border-dotted border-slate-300/70 dark:border-white/15' : '';

  return (
    <>
      {/* time column */}
      <div
        className={`pr-2 text-sm text-slate-500 dark:text-slate-400 ${dotted}`}
        style={{ height: rowHeight, lineHeight: `${rowHeight}px` }}
      >
        {t}
      </div>

      {/* Day cells */}
      {days.map((d, colIdx) => (
        <div
          key={`${t}-${d.label}`}
          className={`relative ${dotted} ${colIdx < days.length - 1 ? 'border-r border-slate-200/70 dark:border-white/10' : ''}`}
          style={{ height: rowHeight }}
        >
          {/* tasks that should render in this cell */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
            {tasks
              .filter((task) => task.day === colIdx && task.time === t)
              .map((task) => (
                <div key={task.title} className="flex items-center gap-3 pl-2">
                  {/* avatar chip sits just left of the pill */}
                  <MiniAvatar
                    name={task.avatarName}
                    bg={
                      task.color.includes('amber')
                        ? 'bg-amber-200'
                        : task.color.includes('pink')
                        ? 'bg-pink-200'
                        : 'bg-indigo-200'
                    }
                  />
                  {/* task pill */}
                  <div
                    className={`h-11 inline-flex items-center gap-2 rounded-full px-4 text-white shadow-sm ${task.color}`}
                    style={{ width: widthFromDuration(task.duration) }}
                  >
                    <span className="text-sm font-medium whitespace-nowrap">{task.title}</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] leading-none">Task 2</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] leading-none">2 Hours</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] leading-none">OB</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}