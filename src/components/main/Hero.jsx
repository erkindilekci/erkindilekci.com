import { useEffect, useState } from "react";
import { BiDownload, BiEnvelope, BiRightArrowAlt } from "react-icons/bi";
import { heroStats, profile, resumeUrl } from "../../assets/data/profile.js";
import CountUp from "./CountUp.jsx";
import NeuralCanvas from "./NeuralCanvas.jsx";

/* ── Typewriter ── */
const ROLES = [
    "Data Analyst",
    "Junior Data Scientist",
    "ML Engineer",
    "BI Developer",
    "Data Engineer",
    "Analytics Engineer",
];

function useTypewriter(words) {
    const [text, setText] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const word = words[wordIdx % words.length];
        if (isPaused) {
            const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000);
            return () => clearTimeout(t);
        }
        if (!isDeleting) {
            if (text.length < word.length) {
                const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
                return () => clearTimeout(t);
            }
            const t = setTimeout(() => setIsPaused(true), 0);
            return () => clearTimeout(t);
        }
        if (text.length > 0) {
            const t = setTimeout(() => setText(text.slice(0, -1)), 42);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => {
            setIsDeleting(false);
            setWordIdx(i => (i + 1) % words.length);
        }, 0);
        return () => clearTimeout(t);
    }, [text, isDeleting, isPaused, wordIdx, words]);

    return text;
}

/* ── Chart geometry ── */
const chartRaw = [28, 42, 35, 57, 48, 65, 72, 70, 82, 85, 88, 93];
const CW = 360, CH = 116, CP = 6;
const cMin = Math.min(...chartRaw), cMax = Math.max(...chartRaw);
const chartPts = chartRaw.map((v, i) => [
    CP + (i / (chartRaw.length - 1)) * (CW - 2 * CP),
    CH - CP - ((v - cMin) / (cMax - cMin)) * (CH - 2 * CP),
]);
const chartLine = chartPts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
const chartArea = chartLine + ` L${(CW - CP).toFixed(1)},${CH} L${CP},${CH} Z`;

/* ── Hero stat configs ── */
const heroStatConfigs = heroStats.map(s => {
    const m = s.value.match(/^(\d+)(.*)$/);
    return { num: m ? +m[1] : 0, suffix: m ? m[2] : "", label: s.label };
});

/* ── Dashboard metrics ── */
const dashMetrics = [
    { label: "Records processed", value: "142,847", color: "text-slate-300"  },
    { label: "KPIs computed",     value: "23",      color: "text-blue-400"   },
    { label: "Automation rate",   value: "90%",     color: "text-emerald-400" },
    { label: "Forecast MAE",      value: "0.034",   color: "text-violet-400" },
    { label: "Stakeholders",      value: "6",       color: "text-sky-400"    },
];

/* ── Tech stack marquee tags ── */
const STACK_TAGS = [
    "Python", "Pandas", "SQL", "Power BI", "Scikit-learn", "Streamlit",
    "NumPy", "DAX", "Forecasting", "ETL Pipelines", "ERP Analytics",
    "Power Query", "Feature Engineering", "Regression Models", "KPI Dashboards",
    "Microsoft Fabric", "REST APIs", "Supply Chain Analytics",
];

function AnalyticsDashboard() {
    const last = chartPts[chartPts.length - 1];
    return (
        <div
            className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/90 shadow-2xl shadow-emerald-500/5 lg:max-w-none animate-slide-in-right"
            style={{ animationDelay: "0.35s" }}
        >
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-5 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500">analytics_dashboard.py</span>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    LIVE
                </span>
            </div>

            {/* Line chart */}
            <div className="px-5 pt-4">
                <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-500">pipeline_perf · 12mo</span>
                    <span className="font-mono text-xs font-semibold text-emerald-400">↑ +23.4%</span>
                </div>
                <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full" height={CH}>
                    <defs>
                        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%"   stopColor="#10b981" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0"    />
                        </linearGradient>
                        <filter id="gl">
                            <feGaussianBlur stdDeviation="2.5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {[29, 58, 87].map(y => (
                        <line key={y} x1={CP} y1={y} x2={CW - CP} y2={y}
                            stroke="rgba(148,163,184,0.07)" strokeWidth="1" />
                    ))}
                    <path d={chartArea} fill="url(#cg)"
                        style={{ animation: "fade-in 0.8s 2.7s ease-out both", opacity: 0 }} />
                    <path d={chartLine} fill="none"
                        stroke="#10b981" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        filter="url(#gl)"
                        className="animate-draw-line" />
                    <circle cx={last[0]} cy={last[1]} r="10"
                        fill="#10b981" fillOpacity="0.12"
                        style={{ animation: "fade-in 0.4s 2.9s ease-out both", opacity: 0 }} />
                    <circle cx={last[0]} cy={last[1]} r="4"
                        fill="#020617" stroke="#10b981" strokeWidth="2.5"
                        style={{ animation: "fade-in 0.4s 2.9s ease-out both", opacity: 0 }} />
                </svg>
            </div>

            {/* Metrics table */}
            <div className="border-t border-slate-800 px-5 pb-5 pt-4">
                <div className="flex flex-col gap-2.5">
                    {dashMetrics.map(m => (
                        <div key={m.label} className="flex items-center justify-between gap-4">
                            <span className="font-mono text-xs text-slate-500">{m.label}</span>
                            <span className={`font-mono text-xs font-semibold tabular-nums ${m.color}`}>{m.value}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Python", "SQL", "Power BI", "Scikit-learn", "Streamlit"].map(s => (
                        <span key={s}
                            className="rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 font-mono text-xs text-slate-400">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    const typewriterText = useTypewriter(ROLES);

    return (
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6">

            {/* Neural canvas background */}
            <NeuralCanvas />

            {/* Color blobs + grid */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-48 -top-48 h-[650px] w-[650px] rounded-full bg-emerald-500/[0.08] blur-[120px] animate-blob" />
                <div className="absolute -right-48 top-1/4 h-[550px] w-[550px] rounded-full bg-blue-500/[0.07] blur-[120px] animate-blob"
                    style={{ animationDelay: "4s", animationDuration: "14s" }} />
                <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[120px] animate-blob"
                    style={{ animationDelay: "8s", animationDuration: "17s" }} />
                <div className="grid-pattern absolute inset-0 opacity-40" />
            </div>

            <div className="mx-auto w-full max-w-6xl">
                {/* Two-column hero */}
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                    {/* ── Left ── */}
                    <div className="text-center lg:text-left">

                        {/* Available badge */}
                        <div className="flex justify-center lg:justify-start animate-fade-in">
                            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400">
                                <span className="relative flex h-2 w-2 flex-none">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                </span>
                                Available for data science & analytics roles
                            </span>
                        </div>

                        {/* Name */}
                        <h1
                            className="mx-auto mt-5 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-[4rem] lg:mx-0 animate-fade-in-up"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-gradient-emerald">{profile.name}</span>
                        </h1>

                        {/* Typewriter role */}
                        <p
                            className="mx-auto mt-5 max-w-2xl text-xl font-medium leading-8 text-slate-300 lg:mx-0 animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <span className="text-gradient-emerald font-bold">{typewriterText}</span>
                            <span className="ml-0.5 inline-block h-6 w-0.5 translate-y-0.5 bg-emerald-400 animate-blink" />
                        </p>

                        {/* Summary */}
                        <p
                            className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 md:text-lg lg:mx-0 animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            {profile.summary}
                        </p>

                        {/* Stats */}
                        <div
                            className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-10 border-y border-slate-800 py-6 lg:mx-0 lg:justify-start animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            {heroStatConfigs.map((stat, i) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-3xl font-black tabular-nums text-emerald-400">
                                        <CountUp end={stat.num} suffix={stat.suffix} duration={1600 + i * 150} />
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div
                            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start animate-fade-in-up"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <a href="#projects"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400 sm:w-auto">
                                View Projects
                                <BiRightArrowAlt className="text-lg" />
                            </a>
                            <a href={resumeUrl} download
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-500/50 hover:text-emerald-400 sm:w-auto">
                                Download Resume
                                <BiDownload className="text-lg" />
                            </a>
                            <a href={`mailto:${profile.email}`}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-slate-400 transition hover:text-emerald-400 sm:w-auto">
                                Contact Me
                                <BiEnvelope className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* ── Right: Dashboard ── */}
                    <AnalyticsDashboard />
                </div>

                {/* ── Full-width tech stack marquee ── */}
                <div
                    className="mt-14 border-t border-slate-800/60 pt-8 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                >
                    <p className="mb-4 text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                        Core Stack &amp; Domains
                    </p>
                    <div className="relative overflow-hidden">
                        {/* Fade edges */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                        {/* Marquee track */}
                        <div className="flex gap-3 animate-marquee w-max">
                            {[...STACK_TAGS, ...STACK_TAGS].map((tag, i) => (
                                <span
                                    key={i}
                                    className="whitespace-nowrap rounded-full border border-slate-700/60 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
