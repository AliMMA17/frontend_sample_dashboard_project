import { cn } from './utils';


export default function Badge({ label, tone = 'sky' }) {
const map = {
sky: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300',
violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300',
amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
rose: 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
slate: 'bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-300',
emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
};
return <span className={cn('px-2 py-1 rounded-full text-xs font-medium', map[tone])}>{label}</span>;
}