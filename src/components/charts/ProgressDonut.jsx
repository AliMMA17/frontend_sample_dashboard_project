'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ProgressDonut({ value = 61, size = 160, stroke = 14 }) {
  const radius = (size - stroke) / 2;
  const C = 2 * Math.PI * radius;
  const dash = (value / 100) * C;

  // ---- theme resolve happens only after mount ----
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && ((theme === 'system' ? resolvedTheme : theme) === 'dark');

  // stable IDs for gradients
  const rid = useId();
  const idTrackLight = `${rid}-grad-track-light`;
  const idTrackDark  = `${rid}-grad-track-dark`;
  const idProg       = `${rid}-grad-prog`;

  // Server render: placeholder box to avoid mismatches
  if (!mounted) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-white/5 dark:bg-white/5"
        aria-hidden
      />
    );
  }

  return (
    <div className="grid place-items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          className="-rotate-90"
        >
          <defs>
            {/* track gradients */}
            <linearGradient id={idTrackLight} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#f2f2f6" />
              <stop offset="100%" stopColor="#e9e9f2" />
            </linearGradient>
            <linearGradient id={idTrackDark} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="rgba(239,68,68,0.25)" />
              <stop offset="100%" stopColor="#2a1f5a" />
            </linearGradient>

            {/* progress gradient (red/orange) */}
            <linearGradient id={idProg} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"  stopColor="#ff6a6a" />
              <stop offset="100%" stopColor="#ff4d4d" />
            </linearGradient>
          </defs>

          {/* TRACK */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${isDark ? idTrackDark : idTrackLight})`}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
          />

          {/* PROGRESS */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${idProg})`}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${C - dash}`}
          />
        </svg>

        {/* center label */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="text-xl font-extrabold">{value}%</span>
        </div>
      </div>
    </div>
  );
}