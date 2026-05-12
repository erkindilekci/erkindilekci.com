import { useState } from "react";
import { BiLinkExternal, BiLogoGithub, BiRightArrowAlt } from "react-icons/bi";
import projects from "../../assets/data/projects.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

const projectColors = [
    { accent: "from-emerald-500 to-teal-500", dot: "bg-emerald-400", hover: "hover:border-emerald-500/30" },
    { accent: "from-blue-500 to-indigo-500",  dot: "bg-blue-400",    hover: "hover:border-blue-500/30" },
    { accent: "from-violet-500 to-purple-500", dot: "bg-violet-400", hover: "hover:border-violet-500/30" },
    { accent: "from-amber-500 to-orange-500",  dot: "bg-amber-400",  hover: "hover:border-amber-500/30" },
];

function ProjectCard({ project, colorIndex }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { accent, dot, hover } = projectColors[colorIndex % projectColors.length];

    return (
        <article
            id={project.id}
            className={`flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition ${hover} hover:shadow-lg hover:shadow-slate-900/50`}
        >
            <div className={`h-0.5 flex-none bg-gradient-to-r ${accent}`} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <Badge key={tag} tone="accent">{tag}</Badge>
                        ))}
                    </div>

                    {isExpanded && (
                        <div className="mt-5 border-t border-slate-800 pt-5">
                            <ul className="space-y-3 text-sm leading-6 text-slate-400">
                                {project.details.map(detail => (
                                    <li key={detail} className="flex gap-3">
                                        <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${dot}`} />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                            {project.caseStudyId && (
                                <a
                                    href={`#${project.caseStudyId}`}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                                >
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
                        onClick={() => setIsExpanded(curr => !curr)}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${accent} px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto`}
                    >
                        {isExpanded ? "Hide Details" : "View Details"}
                        <BiRightArrowAlt className="text-lg" />
                    </button>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/50 hover:text-emerald-400 sm:w-auto"
                        >
                            GitHub
                            <BiLogoGithub className="text-lg" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Featured Projects"
                    title="Selected analytics and automation work."
                    description="Projects chosen to show Python pipelines, Streamlit dashboards, forecasting, and business workflow automation."
                />

                <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} colorIndex={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
