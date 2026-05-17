import {
    BiBarChart,
    BiBot,
    BiCog,
    BiData,
    BiGitBranch,
    BiLineChart,
} from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import SectionHeading from "./SectionHeading.jsx";

const capabilities = [
    {
        icon: BiBot,
        title: "Predictive Models",
        description: "End-to-end ML pipelines: feature engineering, regression forecasting, time-series analysis, and MAE/RMSE evaluation using scikit-learn.",
        tools: ["scikit-learn", "Python", "Feature Eng."],
        color: "violet",
    },
    {
        icon: BiBarChart,
        title: "BI Dashboards",
        description: "Power BI reports with DAX measures and Power Query transformations that replace manual Excel pivot workflows for stakeholder reporting.",
        tools: ["Power BI", "DAX", "Power Query"],
        color: "emerald",
    },
    {
        icon: BiGitBranch,
        title: "ETL Pipelines",
        description: "Python-based transformation pipelines that parse, validate, and consolidate ERP, REST API, SAP, and Excel data into analysis-ready datasets.",
        tools: ["Python", "SQL", "REST APIs"],
        color: "blue",
    },
    {
        icon: BiCog,
        title: "Reporting Automation",
        description: "Automated reporting pipelines packaged as standalone executables — eliminating repetitive manual data processing for operations and planning teams.",
        tools: ["Streamlit", "Python", "SAP/ERP"],
        color: "amber",
    },
    {
        icon: BiLineChart,
        title: "Decision Support Tools",
        description: "Streamlit dashboards and KPI monitoring apps that surface logistics, supply chain, and production performance insights for non-technical users.",
        tools: ["Streamlit", "Pandas", "REST APIs"],
        color: "cyan",
    },
    {
        icon: BiData,
        title: "Operations Analytics",
        description: "Supply chain analytics, inventory depletion forecasting, OEE tracking, MRP analysis, and production KPI monitoring for manufacturing and logistics.",
        tools: ["SQL", "Power BI", "Excel"],
        color: "slate",
    },
];

const colorMap = {
    violet: {
        icon: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        hover: "hover:border-violet-500/40",
        bar: "bg-violet-500",
    },
    emerald: {
        icon: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        hover: "hover:border-emerald-500/40",
        bar: "bg-emerald-500",
    },
    blue: {
        icon: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        hover: "hover:border-blue-500/40",
        bar: "bg-blue-500",
    },
    amber: {
        icon: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        hover: "hover:border-amber-500/40",
        bar: "bg-amber-500",
    },
    cyan: {
        icon: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        hover: "hover:border-cyan-500/40",
        bar: "bg-cyan-500",
    },
    slate: {
        icon: "text-slate-400",
        bg: "bg-slate-700/50",
        border: "border-slate-700",
        hover: "hover:border-slate-600",
        bar: "bg-slate-500",
    },
};

function CapabilityCard({ cap, index }) {
    const [ref, inView] = useInView(0.1);
    const Icon = cap.icon;
    const c = colorMap[cap.color];

    return (
        <article
            ref={ref}
            className={`group relative overflow-hidden rounded-xl border ${c.border} bg-slate-900 p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/60 ${c.hover}`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(22px)",
                transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
            }}
        >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.bar} opacity-60 group-hover:opacity-100 transition-opacity`} />

            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`text-2xl ${c.icon}`} />
            </div>

            <h3 className="mb-2 text-base font-bold text-slate-100">{cap.title}</h3>
            <p className="text-sm leading-6 text-slate-400">{cap.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
                {cap.tools.map(t => (
                    <span
                        key={t}
                        className="rounded border border-slate-700/60 bg-slate-800/60 px-2 py-0.5 font-mono text-xs text-slate-500"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default function WhatIBuild() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="capabilities" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="Capabilities"
                        title="What I build with data."
                        description="Six types of analytics products I design, build, and deliver — combining engineering depth, analytical rigor, and business context."
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((cap, i) => (
                        <CapabilityCard key={cap.title} cap={cap} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
