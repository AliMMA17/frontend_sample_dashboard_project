'use client';
import { AvatarGroup } from '@/components/ui/Avatar';


const rows = [
{ time: '08:00', title: 'Design System', color: 'bg-amber-500' },
{ time: '09:00', title: 'Wireframes', color: 'bg-pink-500' },
{ time: '10:00', title: 'UX Research', color: 'bg-indigo-500' }
];


export default function Schedule() {
return (
<div className="card p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold">Schedule</h3>
<AvatarGroup names={["David Cameron","Lina R.","Max T."]} />
</div>
<div className="grid grid-cols-4 text-xs text-slate-500 dark:text-slate-400 mb-2">
<div></div><div>Mon 20</div><div>Tue 21</div><div>Wed 22</div>
</div>
<div className="space-y-3">
{rows.map((r) => (
<div key={r.time} className="grid grid-cols-4 items-center gap-3">
<div className="text-sm text-slate-500 dark:text-slate-400">{r.time}</div>
<div className="col-span-3">
<div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-white ${r.color}`}>
<span className="font-medium">{r.title}</span>
<span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px]">Task 2</span>
<span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px]">2 Hours</span>
<span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px]">OB</span>
</div>
</div>
</div>
))}
</div>
</div>
);
}