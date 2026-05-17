import {
    BiBarChart,
    BiBot,
    BiCog,
    BiData,
    BiWrench,
} from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import skills from "../../assets/data/skills.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

const categoryConfig = {
    "Data Science & ML": {
        Icon: BiBot,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        accent: "from-violet-500 to-purple-400",
        hover: "hover:border-violet-500/40",
        span: "md:col-span-2",
        label: "Predictive modeling · evaluation · time-series",
        glow: "hover:shadow-violet-500/5",
    },
    "Analytics & BI": {
        Icon: BiBarChart,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        accent: "from-emerald-500 to-teal-400",
        hover: "hover:border-emerald-500/40",
        span: "md:col-span-1",
        label: "Dashboards · KPI reporting · visualization",
        glow: "hover:shadow-emerald-500/5",
    },
    "Data Engineering": {
        Icon: BiData,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        accent: "from-blue-500 to-cyan-400",
        hover: "hover:border-blue-500/40",
        span: "md:col-span-1",
        label: "ETL pipelines · data modeling · SQL",
        glow: "hover:shadow-blue-500/5",
    },
    "AI & Automation": {
        Icon: BiCog,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        accent: "from-amber-500 to-orange-400",
        hover: "hover:border-amber-500/40",
        span: "md:col-span-2",
        label: "Workflow automation · reporting automation · low-code",
        glow: "hover:shadow-amber-500/5",
    },
    "Domain Knowledge": {
        Icon: BiWrench,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        accent: "from-cyan-500 to-sky-400",
        hover: "hover:border-cyan-500/40",
        span: "md:col-span-3",
        label: "Supply chain · logistics · manufacturing · Industrial Engineering",
        glow: "hover:shadow-cyan-500/5",
    },
};

function SkillCard({ category, config, index }) {
    const [ref, inView] = useInView(0.08);
    const { Icon, color, bg, accent, hover, span, label, glow } = config;
    const isWide = span === "md:col-span-2" || span === "md:col-span-3";

    return (
        <article
            ref={ref}
            className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${hover} ${glow} ${span}`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s, box-shadow 0.3s, border-color 0.25s`,
            }}
        >
            {/* Gradient top bar */}
            <div className={`h-[3px] bg-gradient-to-r ${accent}`} />

            {/* Large decorative number */}
            <span
                className="pointer-events-none absolute -right-2 -top-5 select-none font-black leading-none text-white/[0.025]"
                style={{ fontSize: "7rem" }}
            >
                {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative p-5 sm:p-6">
                <div className="mb-1 flex items-center gap-3">
                    <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${bg} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`text-xl ${color}`} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                            {category.category}
                        </h3>
                        <p className="text-xs text-slate-600">{label}</p>
                    </div>
                    <span className="ml-auto rounded-full border border-slate-700 bg-slate-800/60 px-2 py-0.5 font-mono text-xs text-slate-500">
                        {category.items.length}
                    </span>
                </div>

                <div className={`mt-4 flex flex-wrap gap-2 ${isWide ? "sm:gap-2.5" : ""}`}>
                    {category.items.map(skill => (
                        <Badge key={skill}>{skill}</Badge>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Skills() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="skills" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="Technical Skills"
                        title="A practical data science stack."
                        description="Grouped by the workflows I use most: ML modeling, analytics & BI, data engineering, automation, and domain-specific expertise."
                    />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {skills.map((category, i) => {
                        const config = categoryConfig[category.category] ?? categoryConfig["Domain Knowledge"];
                        return (
                            <SkillCard
                                key={category.category}
                                category={category}
                                config={config}
                                index={i}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
