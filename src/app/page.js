'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Column from '@/components/kanban/Column';
import RightPanel from '@/components/RightPanel';
import { boardColumns } from '@/lib/data';

export default function Page() {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />

      {/* wider right bar */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_560px]">
        {/* Board */}
        <div className="px-6 pt-6 pb-10 board-background">
          <Topbar />
          <div className="mt-6 grid gap-6 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {boardColumns.map((col) => (
              <Column key={col.id} column={col} />
            ))}
          </div>
        </div>

        {/* Right rail with CSS var background */}
        <aside className="hidden lg:block p-6 xl:p-8" style={{ background: 'var(--rail)' }}>
          <RightPanel />
        </aside>
      </main>
    </div>
  );
}