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

// Pretty tooltip
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
  highlightDay = 'Thur', // which day column to softly highlight
}) {
  // find the "next" day to bound the highlight column
  const idx = data.findIndex((d) => d.day === highlightDay);
  const nextLabel = data[Math.min(idx + 1, data.length - 1)]?.day;

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 8, bottom: 18, left: 8 }}
        >
          {/* defs for subtle highlight */}
          <defs>
            <linearGradient id="highlightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Soft column highlight (approx, without rounded ends) */}
          {idx >= 0 && (
            <ReferenceArea
              x1={data[idx].day}
              x2={nextLabel}
              fill="url(#highlightGrad)"
              fillOpacity={0.6}
              ifOverflow="extendDomain"
            />
          )}

          {/* Clean grid (just enough to read) */}
          <CartesianGrid
            strokeDasharray="3 6"
            vertical={true}
            horizontal={true}
            stroke="rgba(255,255,255,0.12)"
          />

          {/* Bottom day labels */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: 'rgba(255,255,255,0.85)', fontSize: 12 }}
          />
          {/* No visible Y axis */}
          <YAxis hide />

          <Tooltip
            cursor={{ stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }}
            content={<ActivityTooltip />}
          />

          {/* Purple line */}
          <Line
            type="monotone"
            dataKey="a"
            stroke="#a78bfa"
            strokeWidth={3}
            dot={{ r: 3, stroke: '#111827', strokeWidth: 2, fill: '#a78bfa' }}
            activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
          />
          {/* Orange line */}
          <Line
            type="monotone"
            dataKey="b"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={{ r: 3, stroke: '#111827', strokeWidth: 2, fill: '#f59e0b' }}
            activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
