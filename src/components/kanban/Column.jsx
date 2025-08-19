'use client';
import { Plus } from 'lucide-react';
import TaskCard from './TaskCard';


export default function Column({ column }) {
return (
<section className="space-y-3">
<div className="card p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold tracking-wide">{column.title.toUpperCase()}</h3>
<span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{column.count}</span>
</div>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-2.5 py-1.5 text-xs hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800">
<Plus size={14} />
</button>
</div>
<div className="space-y-3">
{column.tasks.map((t) => (<TaskCard key={t.id} task={t} />))}
</div>
</section>
);
}