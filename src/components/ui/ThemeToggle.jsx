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
        // pill container
        'relative inline-flex items-center justify-between',
        'h-9 w-[72px] rounded-full px-2',
        // light pill bg vs dark pill bg (matches mock)
        'bg-slate-200/80 dark:bg-slate-800/80',
        // subtle border + shadow to “float” off the top bar
        'border border-slate-300/70 dark:border-white/10 shadow-sm',
        // focus
        'outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
        // smooth animation
        'transition-colors'
      ].join(' ')}
    >
      {/* moon icon (left) */}
      <Moon
        size={16}
        className={isDark ? 'text-slate-100' : 'text-slate-500'}
      />

      {/* sun icon (right) */}
      <Sun
        size={16}
        className={isDark ? 'text-slate-400' : 'text-slate-900'}
      />

      {/* sliding thumb/highlight */}
      <span
        aria-hidden="true"
        className={[
          'absolute top-1 left-1 h-7 w-7 rounded-full',
          // highlight color like the mock (light: white plate, dark: deep slate)
          'bg-white dark:bg-slate-900',
          'shadow-sm',
          // slide to right when light
          isDark ? 'translate-x-0' : 'translate-x-[34px]',
          'transition-transform'
        ].join(' ')}
      />
    </button>
  );
}