import { useState } from "react";
import { BiLinkExternal, BiRightArrowAlt } from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import projects from "../../assets/data/projects.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

/* Mini sparklines */
const sparklines = [
    "M2,20 L14,18 L26,22 L38,14 L50,16 L62,8 L74,10 L86,4",
    "M2,18 L12,14 L22,20 L32,10 L42,16 L52,6 L62,12 L72,4 L82,8",
    "M2,4 L16,8 L30,12 L44,16 L58,18 L72,20 L86,20",
    "M2,20 L22,20 L22,14 L42,14 L42,8 L62,8 L62,4 L82,4",
];

const projectColors = [
    { accent: "from-blue-500 to-indigo-500",   dot: "bg-blue-400",    hover: "hover:border-blue-500/40",    spark: "#3b82f6", bar: "bg-blue-500"   },
    { accent: "from-emerald-500 to-teal-500",  dot: "bg-emerald-400", hover: "hover:border-emerald-500/40", spark: "#10b981", bar: "bg-emerald-500" },
    { accent: "from-violet-500 to-purple-500", dot: "bg-violet-400",  hover: "hover:border-violet-500/40",  spark: "#8b5cf6", bar: "bg-violet-500"  },
    { accent: "from-amber-500 to-orange-500",  dot: "bg-amber-400",   hover: "hover:border-amber-500/40",   spark: "#f59e0b", bar: "bg-amber-500"   },
];

const roleBadgeTones = {
    "Data Analytics":    "accent",
    "KPI Automation":    "accent",
    "Data Engineering":  "blue",
    "Machine Learning":  "violet",
    "Data Science":      "violet",
    "Forecasting":       "violet",
    "BI":                "accent",
    "Automation":        "blue",
    "Supply Chain":      "cyan",
};

function Sparkline({ path, color, gradId }) {
    return (
        <svg viewBox="0 0 90 24" className="w-full" height={24} preserveAspectRatio="none">
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={path + ` L88,24 L2,24 Z`} fill={`url(#${gradId})`} />
            <path d={path} fill="none" stroke={color} strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ProjectCard({ project, colorIndex, animDelay }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [ref, inView] = useInView(0.08);
    const { accent, dot, hover, spark } = projectColors[colorIndex % projectColors.length];
    const sparkPath = sparklines[colorIndex % sparklines.length];
    const gradId = `sg${colorIndex}`;

    return (
        <article
            ref={ref}
            id={project.id}
            className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition duration-300 ${hover} hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/50`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(22px)",
                transition: `opacity 0.55s ease ${animDelay}s, transform 0.55s ease ${animDelay}s, border-color 0.25s, box-shadow 0.3s`,
            }}
        >
            {/* Gradient top bar */}
            <div className={`h-[3px] flex-none bg-gradient-to-r ${accent}`} />

            {/* Sparkline */}
            <div className="relative border-b border-slate-800/60 px-5 pb-3 pt-4">
                <Sparkline path={sparkPath} color={spark} gradId={gradId} />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex-1">
                    {/* Role relevance badges */}
                    {project.roleBadges && (
                        <div className="mb-3 flex flex-wrap gap-1.5">
                            {project.roleBadges.map(rb => (
                                <Badge key={rb} tone={roleBadgeTones[rb] ?? "neutral"}>{rb}</Badge>
                            ))}
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>

                    {/* Problem framing */}
                    {project.problem && (
                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-600">
                            Problem: <span className="normal-case text-slate-500">{project.problem}</span>
                        </p>
                    )}

                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="rounded border border-slate-700/60 bg-slate-800/60 px-2.5 py-1 font-mono text-xs text-slate-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                        <div className="mt-5 border-t border-slate-800 pt-5">
                            <ul className="flex flex-col gap-3 text-sm leading-6 text-slate-400">
                                {project.details.map(detail => (
                                    <li key={detail} className="flex gap-3">
                                        <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${dot}`} />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Business impact */}
                            {project.impact && (
                                <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-400">Business Impact</p>
                                    <p className="text-xs leading-6 text-slate-300">{project.impact}</p>
                                </div>
                            )}

                            {project.caseStudyId && (
                                <a href={`#${project.caseStudyId}`}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                                    Open case study
                                    <BiLinkExternal className="text-base" />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(c => !c)}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${accent} px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto`}
                    >
                        {isExpanded ? "Hide Details" : "View Details"}
                        <BiRightArrowAlt className={`text-lg transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="projects" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="Projects"
                        title="Data-driven systems, not demo apps."
                        description="Real analytics builds — each solving a concrete business or research problem with measurable outcomes."
                    />
                </div>

                <div className="grid gap-x-5 gap-y-8 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            colorIndex={i}
                            animDelay={i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
