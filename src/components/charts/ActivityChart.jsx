'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { d: 'Mon', a: 30, b: 50 },
  { d: 'Tue', a: 54, b: 42 },
  { d: 'Wed', a: 48, b: 61 },
  { d: 'Thur', a: 80, b: 40 },
  { d: 'Fri', a: 52, b: 56 },
  { d: 'Sat', a: 60, b: 52 },
];

export default function ActivityChart({ height = 150 }) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ left: 0, right: 0, top: 6, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
          <XAxis dataKey="d" tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip cursor={{ opacity: 0.15 }} />
          <Area
            type="monotone"
            dataKey="a"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="b"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}