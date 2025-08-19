'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (theme === 'system' ? resolvedTheme : theme) === 'dark';
  const handleToggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      type="button"
      onClick={handleToggle}
      role="switch"
      aria-checked={!isDark}
      title={isDark ? 'Switch to light' : 'Switch to dark'}
      className={[
        'relative inline-flex items-center justify-between h-9 w-[76px] rounded-full px-2',
        'bg-slate-200/80 dark:bg-slate-800/80',
        'border border-[color:var(--input-border)] dark:border-white/10 shadow-sm',
        'outline-none focus-visible:ring-2 focus-visible:ring-violet-400 transition-colors'
      ].join(' ')}
    >
      <Moon size={16} className={isDark ? 'text-slate-100' : 'text-slate-500'} />
      <Sun size={16} className={isDark ? 'text-slate-400' : 'text-slate-900'} />
      <span
        aria-hidden="true"
        className={[
          'absolute top-1 left-1 h-7 w-7 rounded-full shadow-sm',
          'bg-white dark:bg-slate-900',
          isDark ? 'translate-x-0' : 'translate-x-[36px]',
          'transition-transform'
        ].join(' ')}
      />
    </button>
  );
}
