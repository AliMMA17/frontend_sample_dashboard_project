'use client';

import TaskCard from './TaskCard';
import ColumnHeader from './ColumnHeader';

export default function Column({ column }) {
  const tone =
    column.id === 'todo' ? 'violet' :
    column.id === 'inprogress' ? 'pink' :
    'indigo';

  return (
    // min-w-0 lets children expand to the full grid cell width
    <section className="min-w-0 w-full flex flex-col gap-4">
      <ColumnHeader
        title={column.title}
        count={column.tasks?.length ?? column.count ?? 0}
        tone={tone}
        onAdd={() => {}}
      />

      <div className="min-w-0 w-full flex flex-col gap-4">
        {(column.tasks ?? []).map((task) => (
          <div key={task.id} className="w-full">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </section>
  );
}
