'use client';
import { RadialBarChart, RadialBar } from 'recharts';

export default function ProgressDonut({ value = 61, compact = false }) {
  const data = [{ name: 'done', value }];
  const W = compact ? 240 : 280;
  const H = compact ? 210 : 240;
  const inner = compact ? 78 : 92;
  const outer = compact ? 96 : 110;
  const bar = compact ? 14 : 16;

  return (
    <div
      className="rounded-2xl border p-4"
      style={{ background: 'var(--card)', borderColor: 'rgba(2,6,23,.08)' }}
    >
      <h3 className="mb-3 text-sm font-semibold">Overall Progress</h3>
      <div className="grid place-items-center">
        <RadialBarChart
          width={W}
          height={H}
          innerRadius={inner}
          outerRadius={outer}
          barSize={bar}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={10}
            fill="#f43f5e"
            background
          />
        </RadialBarChart>
        <div
          className="text-3xl font-bold"
          style={{ marginTop: compact ? '-92px' : '-106px' }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}