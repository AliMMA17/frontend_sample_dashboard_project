'use client';

import { useId, useMemo } from 'react';
import { useTheme } from 'next-themes';

export default function ProgressDonut({
  value = 61,     // 0..100
  size = 180,     // px
  stroke = 16,    // ring thickness
}) {
  const { resolvedTheme } = useTheme();
  const id = useId();

  const r = (size - stroke) / 2;              // radius
  const c = 2 * Math.PI * r;                  // circumference
  const dashOffset = c * (1 - value / 100);   // remaining arc
  const center = size / 2;

  // angle end-point for the rounded cap dot (SVG is -90° start due to rotate)
  const theta = (value / 100) * 2 * Math.PI - Math.PI / 2;

  // arc end coordinates for the dot (a little outside to sit centered on the stroke)
  const dotR = stroke * 0.45;
  const dotX = center + r * Math.cos(theta);
  const dotY = center + r * Math.sin(theta);

  // gradient ids
  const gradProgress = `${id}-grad-progress`;
  const gradTrackDark = `${id}-grad-track-dark`;
  const gradTrackLight = `${id}-grad-track-light`;

  // pick track gradient by theme
  const trackStroke = resolvedTheme === 'dark'
    ? `url(#${gradTrackDark})`
    : `url(#${gradTrackLight})`;

  // “mask” for the rounded cap dot visibility when value is 0
  const showDot = value > 0.001;

  // for SSR/hydration safety compute once when props change
  const defs = useMemo(() => (
    <defs>
      {/* Progress gradient – make it punchy so it reads clearly */}
      <linearGradient
        id={gradProgress}
        x1="0" y1="0" x2={size} y2={size}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%"   stopColor="#FF5A6A" />
        <stop offset="55%"  stopColor="#FF6A55" />
        <stop offset="100%" stopColor="#FF8247" />
      </linearGradient>

      {/* Track gradient (DARK) – soft purple sweep */}
      <linearGradient
        id={gradTrackDark}
        x1="0" y1="0" x2={size} y2={size}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%"   stopColor="rgba(174, 143, 255, .30)" />
        <stop offset="35%"  stopColor="rgba(126, 96, 255, .22)" />
        <stop offset="100%" stopColor="rgba(82, 63, 160, .34)" />
      </linearGradient>

      {/* Track gradient (LIGHT) – subtle gray sweep */}
      <linearGradient
        id={gradTrackLight}
        x1="0" y1="0" x2={size} y2={size}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%"   stopColor="rgba(0,0,0,.06)" />
        <stop offset="100%" stopColor="rgba(0,0,0,.12)" />
      </linearGradient>
    </defs>
  ), [gradProgress, gradTrackDark, gradTrackLight, size]);

  return (
    <div className="grid place-items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          {defs}

          {/* Track (full ring under) */}
          <circle
            cx={center}
            cy={center}
            r={r}
            stroke={trackStroke}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
          />

          {/* Progress ring */}
          <circle
            cx={center}
            cy={center}
            r={r}
            stroke={`url(#${gradProgress})`}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {/* Rounded end-cap dot (placed on top so it looks perfectly round) */}
        {showDot && (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="-rotate-90 absolute inset-0"
            aria-hidden
          >
            <circle
              cx={dotX}
              cy={dotY}
              r={dotR}
              fill="#FF8247"     // end color of the gradient
            />
          </svg>
        )}

        {/* Center label */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="text-2xl font-bold">{value}%</span>
        </div>
      </div>
    </div>
  );
}