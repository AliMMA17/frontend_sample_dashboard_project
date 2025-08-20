import Sidebar from '@/components/Sidebar';
import RightPanel from '@/components/RightPanel';
import Board from '@/components/board/Board';
import { boardColumns as seed } from '@/lib/data';

export default function Page() {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[65%_35%]">
        {/* Left: board feature (client container) */}
        <Board initialColumns={seed} />
        {/* Right rail */}
        <aside className="hidden lg:block p-6 xl:p-8" style={{ background: 'var(--rail)' }}>
          <RightPanel />
        </aside>
      </main>
    </div>
  );
}