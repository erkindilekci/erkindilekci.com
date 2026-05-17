import { useInView } from "../../hooks/useInView.js";
import experience from "../../assets/data/experience.js";
import SectionHeading from "./SectionHeading.jsx";

const commitHashes = ["a3f9e21", "b7c4d18", "c2e8f05", "d6a1b93"];

export default function Experience() {
    const [headingRef, headingInView] = useInView(0.1);
    const [terminalRef, terminalInView] = useInView(0.08);

    return (
        <section id="experience" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div
                    ref={headingRef}
                    style={{
                        opacity: headingInView ? 1 : 0,
                        transform: headingInView ? "translateY(0)" : "translateY(16px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                >
                    <SectionHeading
                        eyebrow="Experience"
                        title="Data & analytics work across operations and IT."
                        description="A concise timeline of roles where data engineering, reporting automation, and analytics meet real business contexts."
                    />
                </div>

                {/* Git-log terminal */}
                <div
                    ref={terminalRef}
                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 font-mono shadow-2xl"
                    style={{
                        opacity: terminalInView ? 1 : 0,
                        transform: terminalInView ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                    }}
                >
                    {/* Title bar */}
                    <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-5 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-3 text-xs text-slate-500">
                            <span className="text-emerald-500">erkin</span>
                            <span className="text-slate-600">@</span>
                            <span className="text-blue-400">portfolio</span>
                            <span className="text-slate-600">:</span>
                            <span className="text-violet-400">~/career</span>
                            <span className="text-slate-400"> $ git log --oneline --decorate</span>
                        </span>
                    </div>

                    {/* Commit log */}
                    <div className="divide-y divide-slate-800/40 px-4 sm:px-6">
                        {experience.map((item, i) => (
                            <div key={`${item.role}-${item.company}`} className="py-5 sm:py-6">
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                                    <span className="text-sm font-bold tracking-wide text-amber-400">
                                        {commitHashes[i % commitHashes.length]}
                                    </span>
                                    {i === 0 && (
                                        <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                                            HEAD → main
                                        </span>
                                    )}
                                    <span className="text-sm font-semibold text-slate-100">{item.role}</span>
                                    <span className="text-sm text-blue-400">@ {item.company}</span>
                                    <span className="ml-auto text-xs text-slate-600">{item.period}</span>
                                </div>

                                <div className="mt-3 flex flex-col gap-1.5 border-l-2 border-slate-800 pl-4">
                                    {item.bullets.map(bullet => (
                                        <div key={bullet} className="flex gap-2.5 text-xs leading-6">
                                            <span className="flex-none font-bold text-emerald-400">+</span>
                                            <span className="text-slate-400">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Blinking prompt */}
                    <div className="border-t border-slate-800 px-4 py-3 sm:px-6">
                        <span className="text-xs text-slate-500">
                            <span className="text-emerald-500">erkin</span>
                            <span className="text-slate-600">@</span>
                            <span className="text-blue-400">portfolio</span>
                            <span className="text-slate-600">:</span>
                            <span className="text-violet-400">~/career</span>
                            <span className="text-slate-400"> $ </span>
                            <span className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-emerald-400 animate-blink" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
