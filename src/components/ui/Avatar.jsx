import { useMemo } from 'react';


export function Avatar({ name, size = 24 }) {
const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
const hue = useMemo(() => {
let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360; return h;
}, [name]);
return (
<div title={name} style={{ width: size, height: size, background: `hsl(${hue} 70% 45%)` }}
className="rounded-full grid place-items-center text-[10px] font-semibold text-white shadow">{initials}</div>
);
}


export function AvatarGroup({ names = [] }) {
return (
<div className="flex -space-x-2">
{names.map((n) => (
<div key={n} className="ring-2 ring-white/70 dark:ring-slate-900 rounded-full">
<Avatar name={n} />
</div>
))}
</div>
);
}