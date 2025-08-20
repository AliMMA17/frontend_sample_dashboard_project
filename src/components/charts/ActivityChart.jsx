'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
} from 'recharts';

// Demo series
const data = [
  { day: 'Mon', a: 52, b: 34 },
  { day: 'Tue', a: 61, b: 46 },
  { day: 'Wed', a: 58, b: 38 },
  { day: 'Thur', a: 82, b: 31 }, // highlighted column
  { day: 'Fri', a: 66, b: 57 },
  { day: 'Sat', a: 74, b: 49 },
];

function ActivityTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const p1 = payload.find((p) => p.dataKey === 'a');
  const p2 = payload.find((p) => p.dataKey === 'b');

  return (
    <div className="rounded-xl border bg-black/70 px-3 py-2 text-xs text-white shadow-lg backdrop-blur-md">
      <div className="mb-1 font-medium">{label}</div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: '#a78bfa' }} />
          <span>{p1?.value}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: '#f59e0b' }} />
          <span>{p2?.value}</span>
        </div>
      </div>
    </div>
  );
}

export default function ActivityChart({
  height = 180,
  highlightDay = 'Thur',
}) {
  const idx = data.findIndex((d) => d.day === highlightDay);
  const nextLabel = data[Math.min(idx + 1, data.length - 1)]?.day;

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 18, left: 8 }}>
          {/* theme-aware highlight */}
          <defs>
            <linearGradient id="highlightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {idx >= 0 && (
            <ReferenceArea
              x1={data[idx].day}
              x2={nextLabel}
              fill="url(#highlightGrad)"
              fillOpacity={0.6}
              ifOverflow="extendDomain"
            />
          )}

          {/* Grid + axes colors from CSS variables */}
          <CartesianGrid
            strokeDasharray="3 6"
            vertical
            horizontal
            // light: rgba(15,16,35,.12), dark: rgba(255,255,255,.12)
            stroke="var(--chart-grid, rgba(15,16,35,.12))"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            // light: var(--text) (dark ink), dark: var(--text) (light ink)
            tick={{ fill: 'var(--text)', opacity: 0.85, fontSize: 12 }}
          />
          <YAxis hide />

          <Tooltip
            cursor={{
              // light: rgba(15,16,35,.25), dark: rgba(255,255,255,.25)
              stroke: 'var(--chart-cursor, rgba(15,16,35,.25))',
              strokeWidth: 1,
            }}
            content={<ActivityTooltip />}
          />

          {/* Purple series */}
          <Line
            type="monotone"
            dataKey="a"
            stroke="#a78bfa"
            strokeWidth={3}
            // outline matches tile surface in both themes
            dot={{ r: 3, stroke: 'var(--tile-bg)', strokeWidth: 2, fill: '#a78bfa' }}
            activeDot={{ r: 5, stroke: 'var(--tile-bg)', strokeWidth: 2 }}
          />
          {/* Orange series */}
          <Line
            type="monotone"
            dataKey="b"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={{ r: 3, stroke: 'var(--tile-bg)', strokeWidth: 2, fill: '#f59e0b' }}
            activeDot={{ r: 5, stroke: 'var(--tile-bg)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
