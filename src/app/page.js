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

      {/* 65% / 35% from lg up; single column on small screens */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[65%_35%]">
        {/* Board (65%) */}
        <div className="px-6 pt-6 pb-10 board-background">
          <Topbar />
          <div className="mt-6 grid gap-6 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {boardColumns.map((col) => (
              <Column key={col.id} column={col} />
            ))}
          </div>
        </div>

        {/* Right rail (35%) */}
        <aside
          className="hidden lg:block p-6 xl:p-8"
          style={{ background: 'var(--rail)' }}
        >
          <RightPanel />
        </aside>
      </main>
    </div>
  );
}