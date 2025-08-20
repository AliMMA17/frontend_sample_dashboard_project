'use client';

import { useState } from 'react';
import Topbar from '@/components/Topbar';
import Column from '@/components/kanban/Column';

export default function Board({ initialColumns }) {
  const [columns, setColumns] = useState(initialColumns);

  const handleCreate = (columnId, payload) => {
    setColumns(prev =>
      prev.map(col => {
        if (col.id !== columnId) return col;
        const newTask = { id: `t_${Date.now()}`, ...payload };
        return {
          ...col,
          tasks: [newTask, ...(col.tasks ?? [])],
          count: (col.tasks?.length ?? 0) + 1, // keep header badge in sync
        };
      })
    );
  };

  return (
    <div className="px-6 pt-6 pb-10 board-background">
      <Topbar />
      <div className="mt-6 grid gap-6 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {columns.map(col => (
          <Column key={col.id} column={col} onCreate={handleCreate} />
        ))}
      </div>
    </div>
  );
}
