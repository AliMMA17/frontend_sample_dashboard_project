'use client';
import ActivityChart from './charts/ActivityChart';
import ProgressDonut from './charts/ProgressDonut';
import Schedule from './schedule/Schedule';
import { Avatar } from './ui/Avatar';

export default function RightPanel() {
  return (
    <div className="space-y-6 max-w-[520px] mx-auto">
      {/* user header */}
      <div className="flex items-center justify-end gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-slate-100">David Cameron</div>
          <div className="text-xs text-slate-300">cameron@gmail.com</div>
        </div>
        <div className="ring-2 ring-white/20 rounded-full">
          <Avatar name="David Cameron" size={40} />
        </div>
      </div>

      {/* promo */}
      <div
        className="rounded-2xl border p-5 text-white"
        style={{
          background: 'linear-gradient(90deg,#7c3aed 0%,#ec4899 100%)',
          borderColor: 'rgba(255,255,255,.15)',
        }}
      >
        <div className="text-sm/5 opacity-90">Unlock more information!</div>
        <div className="mt-1 text-xl font-semibold">Upgrade to PRO</div>
        <button className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur hover:bg-white/20">
          Upgrade Now
        </button>
      </div>

      {/* charts side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressDonut value={61} compact />
        <ActivityChart compact />
      </div>

      {/* schedule (purple tile) */}
      <Schedule />
    </div>
  );
}