import { BiBarChart, BiBot, BiCog, BiData } from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import CountUp from "./CountUp.jsx";
import SectionHeading from "./SectionHeading.jsx";

const impactStats = [
    { end: 90, suffix: "%", label: "Reporting automated",   color: "text-emerald-400", glow: "shadow-emerald-500/10" },
    { end: 6,  suffix: "",  label: "Stakeholders served",   color: "text-blue-400",    glow: "shadow-blue-500/10"    },
    { end: 4,  suffix: "+", label: "Analytics tools built", color: "text-violet-400",  glow: "shadow-violet-500/10"  },
];

const pipeline = [
    { label: "Ingest",    desc: "ERP · API · Excel · SAP",        color: "text-slate-400",   dot: "bg-slate-500"    },
    { label: "Transform", desc: "Python · Pandas · SQL",           color: "text-blue-400",    dot: "bg-blue-500"     },
    { label: "Analyze",   desc: "KPIs · ML · Forecasting",         color: "text-violet-400",  dot: "bg-violet-500"   },
    { label: "Deliver",   desc: "Power BI · Streamlit · Reports",  color: "text-emerald-400", dot: "bg-emerald-500"  },
];

const focusAreas = [
    {
        icon: BiData,
        title: "Data Analysis",
        description: "Python, Pandas, SQL — from raw ERP and API exports to clean, validated, analysis-ready datasets.",
        color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20",
    },
    {
        icon: BiBarChart,
        title: "BI & Reporting",
        description: "Power BI dashboards, KPI reporting, and Streamlit apps that replace time-consuming manual workflows.",
        color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20",
    },
    {
        icon: BiCog,
        title: "Automation",
        description: "End-to-end pipelines and packaged tools that eliminate repetitive manual data processing permanently.",
        color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20",
    },
    {
        icon: BiBot,
        title: "Forecasting & ML",
        description: "Regression models, feature engineering, and evaluation metrics for practical planning decisions.",
        color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20",
    },
];

function AnimBlock({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView(0.1);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

export default function About() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="about" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="About"
                        title="Industrial engineering context, data-first execution."
                    />
                </div>

                {/* Impact stats */}
                <AnimBlock delay={0.05}>
                    <div className="mb-12 grid grid-cols-3 divide-x divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
                        {impactStats.map(s => (
                            <div key={s.label} className="px-6 py-8 text-center">
                                <p className={`text-4xl font-black tabular-nums md:text-5xl ${s.color}`}>
                                    <CountUp end={s.end} suffix={s.suffix} duration={1800} />
                                </p>
                                <p className="mt-2 text-xs font-medium text-slate-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimBlock>

                {/* Data pipeline visualization */}
                <AnimBlock delay={0.1} className="mb-12">
                    <div className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
                        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                            Typical Data Workflow
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
                            {pipeline.map((step, i) => (
                                <div key={step.label} className="flex items-center">
                                    <div className="group min-w-[110px] rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-center transition hover:border-slate-700">
                                        <div className={`mx-auto mb-1.5 h-1.5 w-1.5 rounded-full ${step.dot}`} />
                                        <p className={`text-xs font-bold uppercase tracking-wide ${step.color}`}>{step.label}</p>
                                        <p className="mt-1 text-xs text-slate-600">{step.desc}</p>
                                    </div>
                                    {i < pipeline.length - 1 && (
                                        <div className="hidden items-center sm:flex">
                                            <div className="h-px w-5 bg-gradient-to-r from-slate-700 to-emerald-500/40" />
                                            <span className="text-sm text-emerald-500/50">›</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimBlock>

                {/* Bio text */}
                <AnimBlock delay={0.15} className="mb-10 grid gap-8 text-base leading-8 text-slate-400 md:grid-cols-2 md:text-lg">
                    <p>
                        I combine an Industrial Engineering background with Python, SQL, BI, and machine learning to turn operational problems into practical analytics products. My work sits close to business processes: supply chain, manufacturing, ERP workflows, reporting routines, and decision support.
                    </p>
                    <p>
                        I have worked with ERP, API, Excel, and SAP data sources to build Python pipelines, Streamlit apps, Power BI dashboards, and automation tools. I focus on clean data flows, usable KPI reporting, and technical solutions that reduce manual work for real teams.
                    </p>
                </AnimBlock>

                {/* Focus area cards */}
                <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                    {focusAreas.map((area, i) => {
                        const Icon = area.icon;
                        return (
                            <AnimBlock key={area.title} delay={i * 0.08}>
                                <div
                                    className={`h-full rounded-xl border ${area.border} bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/50`}
                                >
                                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${area.bg}`}>
                                        <Icon className={`text-xl ${area.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-slate-100">{area.title}</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-slate-400">{area.description}</p>
                                </div>
                            </AnimBlock>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
