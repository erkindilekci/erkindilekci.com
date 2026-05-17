import { BiDownload, BiFile } from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import { resumeUrl, targetRoles } from "../../assets/data/profile.js";

export default function Resume() {
    const [ref, inView] = useInView(0.1);

    return (
        <section id="resume" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div
                    ref={ref}
                    className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-center sm:p-10 md:p-14"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    {/* Background effects */}
                    <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
                    <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-blue-500/6 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-violet-500/6 blur-3xl" />

                    {/* Eyebrow */}
                    <span className="relative mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                        Resume
                    </span>

                    {/* Headline */}
                    <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
                        Download my data science resume.
                    </h2>

                    {/* Description */}
                    <p className="relative mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                        A concise overview targeting data analyst, junior data scientist, ML, BI, and data engineering roles — with experience, projects, and certifications.
                    </p>

                    {/* Target roles chips */}
                    <div className="relative mt-7 flex flex-wrap items-center justify-center gap-2">
                        {targetRoles.map(role => (
                            <span
                                key={role}
                                className="rounded-full border border-slate-700 bg-slate-800/70 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                            >
                                {role}
                            </span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={resumeUrl}
                            download
                            className="inline-flex items-center gap-2.5 rounded-lg bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 animate-glow-pulse"
                        >
                            Download Resume
                            <BiDownload className="text-lg" />
                        </a>
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-500/40 hover:text-emerald-400"
                        >
                            View Resume
                            <BiFile className="text-lg" />
                        </a>
                    </div>

                    {/* Availability note */}
                    <p className="relative mt-6 text-xs text-slate-600">
                        Open to internships, junior data science, analytics engineering, BI, and data engineering positions.
                    </p>
                </div>
            </div>
        </section>
    );
}
