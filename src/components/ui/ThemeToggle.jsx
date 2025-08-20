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
        'relative inline-flex h-9 w-[92px] items-center rounded-full px-2',
        isDark
          ? 'bg-[#0b0f19]/90 border border-white/10'
          : 'bg-white border border-slate-200 shadow-sm',
        'outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
        'transition-colors'
      ].join(' ')}
    >
      {/* slimmer thumb (40px wide) */}
      <span
        aria-hidden="true"
        className={[
          'absolute top-1 left-1 h-7 w-[40px] rounded-full',
          isDark ? 'bg-violet-700/90' : 'bg-slate-100',
          'transition-transform duration-200',
          // move farther so spacing stays symmetric with the new width
          isDark ? 'translate-x-0' : 'translate-x-[48px]',
          'z-[1]'
        ].join(' ')}
      />

      {/* icons sit above the thumb so they’re always visible */}
      <Moon
        size={18}
        className={[
          'absolute left-3 top-1/2 -translate-y-1/2 z-[2]',
          isDark ? 'text-slate-100' : 'text-slate-400'
        ].join(' ')}
      />
      <Sun
        size={18}
        className={[
          'absolute right-3 top-1/2 -translate-y-1/2 z-[2]',
          isDark ? 'text-slate-400' : 'text-[#14153a]'
        ].join(' ')}
      />
    </button>
  );
}
