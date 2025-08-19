'use client';

import { Avatar } from '@/components/ui/Avatar';
import ProgressDonut from '@/components/charts/ProgressDonut';
import ActivityChart from '@/components/charts/ActivityChart';
import Schedule from '@/components/schedule/Schedule';

export default function RightPanel() {
  return (
    <div className="space-y-6">
      {/* User header */}
      <div className="flex items-center justify-end gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-slate-100">David Cameron</div>
          <div className="text-xs text-slate-300">cameron@gmail.com</div>
        </div>
        <div className="rounded-full ring-2 ring-white/20">
          <Avatar name="David Cameron" size={40} />
        </div>
      </div>

      {/* Promo banner */}
      <div
        className="rounded-2xl border p-5 text-white"
        style={{
          background: 'linear-gradient(90deg,#7c3aed 0%,#ec4899 100%)',
          borderColor: 'rgba(255,255,255,.15)',
        }}
      >
        <div className="opacity-90 text-sm/5">Unlock more information!</div>
        <div className="mt-1 text-xl font-semibold">Upgrade to PRO</div>
        <button className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur hover:bg-white/20">
          Upgrade Now
        </button>
      </div>

      {/* Charts row: Progress (smaller) | Activity (wider) */}
      <div className="grid grid-cols-[2fr_3fr] gap-6">
        {/* Outer card ONLY – no borders inside the chart components */}
        <section
          className="rounded-[22px] border p-4"
          style={{ background: 'var(--tile-bg)', borderColor: 'var(--tile-border)' }}
        >
          <h3 className="mb-3 text-sm font-semibold">Overall Progress</h3>
          <ProgressDonut value={61} size={160} stroke={14} />
        </section>

        <section
          className="rounded-[22px] border p-4"
          style={{ background: 'var(--tile-bg)', borderColor: 'var(--tile-border)' }}
        >
          <h3 className="mb-3 text-sm font-semibold">Activity</h3>
          <ActivityChart height={150} />
        </section>
      </div>

      {/* Schedule (keeps its single rounded card) */}
      <Schedule />
    </div>
  );
}