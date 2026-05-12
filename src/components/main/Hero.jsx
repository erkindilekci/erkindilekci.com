import { useEffect, useState } from "react";
import { BiDownload, BiEnvelope, BiRightArrowAlt } from "react-icons/bi";
import { heroStats, profile, resumeUrl } from "../../assets/data/profile.js";

const terminalLines = [
    { type: "cmd",  text: "$ python pipeline.run(--env prod)" },
    { type: "ok",   text: "✓  Sources: REST API · Excel · SAP" },
    { type: "ok",   text: "✓  142,847 records (0 validation errors)" },
    { type: "ok",   text: "✓  Clean → Join → Validate → Transform" },
    { type: "ok",   text: "✓  23 KPI metrics computed" },
    { type: "ok",   text: "✓  Streamlit dashboard live → 6 stakeholders" },
    { type: "bar",  text: "   Automation  ████████████████████  90%" },
    { type: "stat", text: "   MAE 0.034   RMSE 0.051   R² 0.87" },
];

const barHeights = [42, 58, 65, 74, 52, 88, 70, 63, 79, 85, 91, 88];

function TerminalCard() {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        if (visible >= terminalLines.length) return;
        const t = setTimeout(() => setVisible(v => v + 1), 420);
        return () => clearTimeout(t);
    }, [visible]);

    return (
        <div
            className="mx-auto w-full max-w-xl rounded-xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden animate-slide-in-right lg:max-w-none"
            style={{ animationDelay: "0.3s" }}
        >
            {/* Titlebar */}
            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-slate-400">erkin@analytics:~/pipeline</span>
            </div>

            {/* Terminal body */}
            <div className="min-h-[200px] space-y-1.5 px-5 pb-3 pt-5 font-mono text-sm">
                {terminalLines.slice(0, visible).map((line, i) => (
                    <div key={i} style={{ animation: "terminal-line 0.3s ease-out both" }}>
                        {line.type === "cmd"  && <span className="text-emerald-400">{line.text}</span>}
                        {line.type === "ok"   && <span className="text-slate-300">{line.text}</span>}
                        {line.type === "bar"  && <span className="text-blue-400">{line.text}</span>}
                        {line.type === "stat" && <span className="text-violet-400">{line.text}</span>}
                    </div>
                ))}
                {visible < terminalLines.length && (
                    <span className="animate-blink text-emerald-400">█</span>
                )}
            </div>

            {/* Animated chart */}
            <div className="border-t border-slate-800 px-5 pb-5 pt-4">
                <p className="mb-3 font-mono text-xs text-slate-500">ETL → Analysis → BI → Business Impact</p>
                <div className="flex h-16 items-end gap-1">
                    {barHeights.map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                                height: `${h}%`,
                                background: "linear-gradient(to top, #059669, #34d399)",
                                transformOrigin: "bottom",
                                animation: `bar-rise 0.8s ${200 + i * 60}ms ease-out both`,
                            }}
                        />
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Python", "SQL", "Power BI", "Scikit-learn", "Streamlit"].map(skill => (
                        <span
                            key={skill}
                            className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 md:pb-28 md:pt-28">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-3xl" />
                <div className="grid-pattern absolute inset-0" />
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                {/* Left */}
                <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start animate-fade-in">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 flex-none rounded-full bg-emerald-400 animate-pulse" />
                            Data Analyst · BI Developer · Analytics Engineer
                        </span>
                    </div>

                    <h1
                        className="mx-auto mt-5 max-w-3xl text-[2.75rem] font-bold leading-[1.1] tracking-tight md:text-6xl lg:mx-0 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-gradient-emerald">{profile.name}</span>
                    </h1>

                    <p
                        className="mx-auto mt-5 max-w-2xl text-xl font-medium leading-8 text-slate-300 lg:mx-0 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {profile.role}
                    </p>
                    <p
                        className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0 animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {profile.summary}
                    </p>

                    {/* Stats */}
                    <div
                        className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-10 border-y border-slate-800 py-5 lg:mx-0 lg:justify-start animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {heroStats.map(stat => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                                <p className="mt-0.5 text-xs font-medium text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div
                        className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start animate-fade-in-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <a
                            href="#projects"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400 sm:w-auto"
                        >
                            View Projects
                            <BiRightArrowAlt className="text-lg" />
                        </a>
                        <a
                            href={resumeUrl}
                            download
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-500/50 hover:text-emerald-400 sm:w-auto"
                        >
                            Download Resume
                            <BiDownload className="text-lg" />
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-400 transition hover:text-emerald-400 sm:w-auto"
                        >
                            Contact Me
                            <BiEnvelope className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Right: Terminal */}
                <TerminalCard />
            </div>
        </section>
    );
}
