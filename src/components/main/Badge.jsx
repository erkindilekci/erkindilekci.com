export default function Badge({ children, tone = "neutral" }) {
    const toneClasses = {
        neutral: "border-slate-700 bg-slate-800 text-slate-300",
        accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    };

    return (
        <span
            className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium leading-none ${toneClasses[tone] ?? toneClasses.neutral}`}
        >
            {children}
        </span>
    );
}
