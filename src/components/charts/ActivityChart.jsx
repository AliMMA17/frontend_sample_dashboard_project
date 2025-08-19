'use client';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { d: 'Tue', a: 30, b: 50 },
  { d: 'Wed', a: 54, b: 42 },
  { d: 'Thur', a: 48, b: 61 },
  { d: 'Fri', a: 80, b: 40 },
  { d: 'Sat', a: 52, b: 56 },
];

export default function ActivityChart({ compact = false }) {
  const H = compact ? 210 : 240;

  return (
    <div
      className="rounded-2xl border p-4"
      style={{ background: 'var(--card)', borderColor: 'rgba(2,6,23,.08)' }}
    >
      <h3 className="mb-3 text-sm font-semibold">Activity</h3>
      <div style={{ height: H - 64 /* header/padding allowance */ }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
            <XAxis dataKey="d" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip cursor={{ opacity: 0.15 }} />
            <Area type="monotone" dataKey="a" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.18} />
            <Area type="monotone" dataKey="b" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.18} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}