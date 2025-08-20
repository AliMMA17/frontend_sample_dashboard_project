'use client';

import { useState } from 'react';
import TaskCard from './TaskCard';
import ColumnHeader from './ColumnHeader';
import NewTaskPopover from './NewTaskPopover';

export default function Column({ column, onCreate }) {
  const [open, setOpen] = useState(false);

  const tone =
    column.id === 'todo' ? 'violet' :
    column.id === 'inprogress' ? 'pink' :
    'indigo';

  return (
    <section className="w-full relative flex flex-col gap-4">
      <div className="relative">
        <ColumnHeader
          title={column.title}
          count={column.tasks?.length ?? column.count ?? 0}
          tone={tone}
          onAdd={() => setOpen(true)}
        />

        {/* anchored composer */}
        <NewTaskPopover
          open={open}
          onClose={() => setOpen(false)}
          onCreate={(payload) => {
            onCreate?.(column.id, payload);
            setOpen(false);
          }}
          columnTitle={column.title}
          anchorRight
        />
      </div>

      <div className="w-full flex flex-col gap-4">
        {(column.tasks ?? []).map((task) => (
          <div key={task.id} className="w-full">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </section>
  );
}
