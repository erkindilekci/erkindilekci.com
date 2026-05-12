import { BiBarChart, BiBot, BiCog, BiData } from "react-icons/bi";
import SectionHeading from "./SectionHeading.jsx";

const pipeline = [
    { label: "Ingest",    desc: "ERP · API · Excel · SAP",       color: "text-slate-400" },
    { label: "Transform", desc: "Python · Pandas · SQL",          color: "text-blue-400" },
    { label: "Analyze",   desc: "KPIs · ML · Forecasting",        color: "text-violet-400" },
    { label: "Deliver",   desc: "Power BI · Streamlit · Reports", color: "text-emerald-400" },
];

const focusAreas = [
    {
        icon: BiData,
        title: "Data Analysis",
        description: "Python, Pandas, SQL — from raw ERP and API exports to clean, validated, analysis-ready datasets.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        icon: BiBarChart,
        title: "BI & Reporting",
        description: "Power BI dashboards, KPI reporting, and Streamlit apps that replace time-consuming manual workflows.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        icon: BiCog,
        title: "Automation",
        description: "End-to-end pipelines and packaged tools that eliminate repetitive manual data processing.",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },
    {
        icon: BiBot,
        title: "Forecasting & ML",
        description: "Regression models, feature engineering, and evaluation metrics for practical planning decisions.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
];

export default function About() {
    return (
        <section id="about" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="About"
                    title="Industrial engineering context, data-first execution."
                />

                {/* Data pipeline visual */}
                <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-0">
                    {pipeline.map((step, i) => (
                        <div key={step.label} className="flex items-center">
                            <div className="min-w-[100px] rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-center">
                                <p className={`text-xs font-bold uppercase tracking-wide ${step.color}`}>{step.label}</p>
                                <p className="mt-1 text-xs text-slate-500">{step.desc}</p>
                            </div>
                            {i < pipeline.length - 1 && (
                                <div className="hidden items-center sm:flex">
                                    <div className="h-px w-5 bg-gradient-to-r from-slate-700 to-emerald-500/40" />
                                    <span className="text-emerald-500/50 text-sm">›</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mb-10 grid gap-8 text-base leading-8 text-slate-400 md:grid-cols-2 md:text-lg">
                    <p>
                        I combine an Industrial Engineering background with Python, SQL, BI, and machine learning to turn operational problems into practical analytics products. My work sits close to business processes: supply chain, manufacturing, ERP workflows, reporting routines, and decision support.
                    </p>
                    <p>
                        I have worked with ERP, API, Excel, and SAP data sources to build Python pipelines, Streamlit apps, Power BI dashboards, and automation tools. I focus on clean data flows, usable KPI reporting, and technical solutions that reduce manual work for real teams.
                    </p>
                </div>

                <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                    {focusAreas.map(area => {
                        const Icon = area.icon;
                        return (
                            <div
                                key={area.title}
                                className={`rounded-xl border ${area.border} bg-slate-900 p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/50`}
                            >
                                <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${area.bg}`}>
                                    <Icon className={`text-xl ${area.color}`} />
                                </div>
                                <h3 className="font-semibold text-slate-100">{area.title}</h3>
                                <p className="mt-1.5 text-sm leading-6 text-slate-400">{area.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
