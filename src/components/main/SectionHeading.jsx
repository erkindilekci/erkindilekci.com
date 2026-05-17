export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
    const centered = align !== "left";
    return (
        <div className={`mb-12 flex w-full max-w-3xl flex-col gap-3 ${centered ? "mx-auto items-center text-center" : "items-start text-left"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                <span className="h-px w-6 bg-emerald-500/50" />
                {eyebrow}
                <span className="h-px w-6 bg-emerald-500/50" />
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-1 text-base leading-7 text-slate-400 md:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
