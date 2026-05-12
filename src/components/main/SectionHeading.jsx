export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
    const alignmentClasses = align === "left"
        ? "items-start text-left"
        : "items-center text-center";
    const positionClasses = align === "left" ? "" : "mx-auto";

    return (
        <div className={`mb-10 flex w-full max-w-3xl flex-col ${positionClasses} ${alignmentClasses}`}>
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                {eyebrow}
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
