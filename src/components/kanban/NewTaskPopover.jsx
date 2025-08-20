'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function NewTaskPopover({
  open,
  onClose,
  onCreate,
  columnTitle = '',
  anchorRight = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    const onClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onClose?.();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const title = (fd.get('title') || '').toString().trim();
    if (!title) return;

    const desc = (fd.get('desc') || '').toString().trim();
    const labels = (fd.get('labels') || '')
      .toString()
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 4); // keep it small like the mock

    const image = (fd.get('image') || '').toString().trim() || undefined;

    onCreate?.({
      title,
      desc,
      image,
      // convert simple labels to your Badge data shape
      tags: labels.map((l) => ({ label: l, tone: 'slate' })),
      people: [], // no assignees from the quick composer
      comments: 0,
      views: 0,
    });
  };

  return (
    <div
      ref={ref}
      className={[
        'absolute z-40 mt-2 w-[320px] rounded-2xl p-3',
        'shadow-xl ring-1',
      ].join(' ')}
      style={{
        background: 'var(--tile-bg)',
        borderColor: 'var(--tile-border)',
        right: anchorRight ? 0 : 'auto',
      }}
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold">
          New task <span className="opacity-60">in</span> {columnTitle}
        </div>
        <button
          onClick={onClose}
          className="grid h-8 w-8 place-items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="mb-1 block text-xs opacity-70">Title *</label>
          <input
            name="title"
            required
            placeholder="e.g. Design brief"
            className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            style={{
              background: 'var(--input-bg)',
              borderColor: 'var(--input-border)',
            }}
          />
        </div>

        <div>
          <label className="mb-1 block text-xs opacity-70">Description</label>
          <textarea
            name="desc"
            rows={3}
            placeholder="Optional details…"
            className="w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            style={{
              background: 'var(--input-bg)',
              borderColor: 'var(--input-border)',
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs opacity-70">
              Labels (comma)
            </label>
            <input
              name="labels"
              placeholder="High, Mobile"
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              style={{
                background: 'var(--input-bg)',
                borderColor: 'var(--input-border)',
              }}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs opacity-70">Image URL</label>
            <input
              name="image"
              placeholder="https://…"
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              style={{
                background: 'var(--input-bg)',
                borderColor: 'var(--input-border)',
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}
