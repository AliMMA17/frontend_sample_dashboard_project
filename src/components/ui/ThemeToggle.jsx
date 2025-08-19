'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const isDark = theme === 'dark';
return (
<button aria-label="Toggle theme"
onClick={() => setTheme(isDark ? 'light' : 'dark')}
className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-3 py-1.5 text-sm text-slate-600 hover:bg-white dark:border-white/10 dark:text-slate-300 dark:hover:bg-slate-900">
{isDark ? <Sun size={16} /> : <Moon size={16} />} {isDark ? 'Light' : 'Dark'}
</button>
);
}