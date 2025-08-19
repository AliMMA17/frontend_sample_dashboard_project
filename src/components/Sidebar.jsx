'use client';
import { LayoutGrid, MessageSquare, Calendar, Settings, Bell } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';


export default function Sidebar() {
const items = [
{ icon: LayoutGrid, label: 'Boards' },
{ icon: MessageSquare, label: 'Messages' },
{ icon: Calendar, label: 'Calendar' },
{ icon: Settings, label: 'Settings' },
{ icon: Bell, label: 'Alerts' },
];


return (
<aside className="hidden md:flex md:w-[80px] lg:w-[88px] flex-col items-center gap-6 border-r border-slate-200/70 bg-white/80 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/60">
<div className="mt-1 mb-2 grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold">A</div>
<nav className="flex-1 grid gap-3">
{items.map(({ icon: Icon, label }) => (
<button key={label} title={label}
className="grid place-items-center rounded-xl p-3 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900">
<Icon size={22} />
</button>
))}
</nav>
<ThemeToggle />
</aside>
);
}