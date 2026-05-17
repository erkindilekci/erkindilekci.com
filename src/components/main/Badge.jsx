export default function Badge({ children, tone = "neutral" }) {
    const toneClasses = {
        neutral:  "border-slate-700    bg-slate-800       text-slate-300",
        accent:   "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        blue:     "border-blue-500/30  bg-blue-500/10     text-blue-400",
        violet:   "border-violet-500/30 bg-violet-500/10  text-violet-400",
        amber:    "border-amber-500/30 bg-amber-500/10    text-amber-400",
        cyan:     "border-cyan-500/30  bg-cyan-500/10     text-cyan-400",
        role:     "border-slate-600    bg-slate-800/80    text-slate-300 font-mono text-[11px]",
    };

    return (
        <span
            className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium leading-none ${toneClasses[tone] ?? toneClasses.neutral}`}
        >
            {children}
        </span>
    );
}
