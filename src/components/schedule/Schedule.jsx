'use client';

import { UserPlus } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/Avatar';
import ScheduleItem from './ScheduleItem';

const days = [
  { label: 'Mon', date: 20 },
  { label: 'Tue', date: 21 },
  { label: 'Wed', date: 22 },
];
const times = ['08:00', '09:00', '10:00', '11:00'];

const tasks = [
  {
    id: 't1',
    day: 0,
    time: '08:00',
    title: 'Design System',
    avatar: { initials: 'AB' },
    duration: 2,
    chipGradient: 'from-amber-400 to-amber-500',
    chips: ['Task 2', 'Hours 08'],
  },
  {
    id: 't2',
    day: 1,
    time: '09:00',
    title: 'Wireframes',
    avatar: { initials: 'MC' },
    duration: 2,
    chipGradient: 'from-pink-400 to-pink-500',
    chips: ['Task 2', 'Hours 08'],
  },
  {
    id: 't3',
    day: 2,
    time: '10:00',
    title: 'UX Research',
    avatar: { initials: 'SH' },
    duration: 2,
    chipGradient: 'from-indigo-400 to-indigo-500',
    chips: ['Task 2', 'Hours 08'],
  },
];

// compact pill width mapping
const widthFromDuration = (d) => (d >= 3 ? '82%' : d === 2 ? '76%' : '68%');

export default function Schedule() {
  const ROW_H = 92;

  return (
    <div
      className="rounded-[22px] border p-4 md:p-5 overflow-hidden"
      style={{ background: 'var(--tile-bg)', borderColor: 'var(--tile-border)' }}
    >
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
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

      {/* Grid: time | day1 | day2 | day3 */}
      <div className="relative grid grid-cols-[80px_repeat(3,minmax(0,1fr))] gap-x-6">
        {/* day headers */}
        <div />
        {days.map((d) => (
          <div key={d.label} className="pb-4">
            <div className="text-xs text-slate-400">{d.label}</div>
            <div className="text-sm font-medium">{d.date}</div>
          </div>
        ))}

        {/* rows */}
        {times.map((t, rowIdx) => (
          <Row key={t} t={t} rowIdx={rowIdx} rowHeight={ROW_H} />
        ))}
      </div>
    </div>
  );
}

function Row({ t, rowIdx, rowHeight }) {
  const dotted =
    rowIdx < times.length - 1 ? 'border-b border-dotted border-white/15' : '';

  return (
    <>
      {/* time column */}
      <div
        className={`pr-2 text-sm text-slate-400 ${dotted}`}
        style={{ height: rowHeight, lineHeight: `${rowHeight}px` }}
      >
        {t}
      </div>

      {/* three day columns */}
      {days.map((d, colIdx) => (
        <div
          key={`${t}-${d.label}`}
          className={`relative ${dotted} ${
            colIdx < days.length - 1 ? 'border-r border-white/10' : ''
          }`}
          style={{ height: rowHeight }}
        >
          {tasks
            .filter((task) => task.day === colIdx && task.time === t)
            .map((task) => (
              <div key={task.id} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-2">
                <ScheduleItem
                  title={task.title}
                  avatar={task.avatar}
                  chips={task.chips}
                  chipGradient={task.chipGradient}
                  width={widthFromDuration(task.duration)}
                />
              </div>
            ))}
        </div>
      ))}
    </>
  );
}