import { useInView } from "../../hooks/useInView.js";
import caseStudies from "../../assets/data/caseStudies.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

const studyColors = [
    { accent: "from-blue-500 to-indigo-500",  stepBg: "bg-blue-500",    stepText: "text-white",     dotHighlight: "bg-blue-400",    outcomeDot: "text-blue-400"    },
    { accent: "from-violet-500 to-purple-500", stepBg: "bg-violet-500",  stepText: "text-white",     dotHighlight: "bg-violet-400",  outcomeDot: "text-violet-400"  },
];

function CaseStudy({ study, index }) {
    const [ref, inView] = useInView(0.06);
    const { accent, stepBg, stepText, dotHighlight, outcomeDot } = studyColors[index % studyColors.length];

    const blocks = [
        { title: "Problem",     content: study.problem,       list: null,              highlight: false },
        { title: "Data Sources", content: null,               list: study.dataSources, highlight: false },
        { title: "Approach",    content: null,                list: study.approach,    highlight: false },
        { title: "Impact",      content: null,                list: study.outcome,     highlight: true  },
    ];

    return (
        <article
            ref={ref}
            id={study.id}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`,
            }}
        >
            <div className={`h-0.5 bg-gradient-to-r ${accent}`} />
            <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-slate-100">{study.title}</h3>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Left: content blocks */}
                    <div className="grid gap-6">
                        {blocks.map(block => (
                            <section key={block.title}>
                                <h4 className={`text-xs font-bold uppercase tracking-widest ${block.highlight ? outcomeDot : "text-slate-500"}`}>
                                    {block.title}
                                </h4>
                                {block.content && (
                                    <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">{block.content}</p>
                                )}
                                {block.list && (
                                    <ul className="mt-2 flex flex-col gap-2 text-sm leading-6 text-slate-400 md:text-base">
                                        {block.list.map(item => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${block.highlight ? dotHighlight : "bg-slate-600"}`} />
                                                <span className={block.highlight ? "font-medium text-slate-200" : ""}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Right: tools + architecture */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Tools Used</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {study.tools.map(tool => (
                                <Badge key={tool} tone="accent">{tool}</Badge>
                            ))}
                        </div>

                        <div className="mt-8 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
                            <div className="border-b border-slate-800 px-4 py-2.5">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Pipeline</h4>
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                                {study.architecture.map((step, i) => (
                                    <div key={step} className="flex items-center gap-3">
                                        <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-md ${stepBg} text-xs font-bold ${stepText}`}>
                                            {i + 1}
                                        </span>
                                        {i < study.architecture.length - 1 ? (
                                            <div className="flex flex-1 items-center gap-2">
                                                <span className="text-sm font-medium text-slate-300">{step}</span>
                                                <div className="flex-1 border-t border-dashed border-slate-800" />
                                                <span className="text-xs text-slate-700">→</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm font-medium text-slate-300">{step}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function CaseStudies() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="case-studies" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="Case Studies"
                        title="A closer look at two analytics builds."
                        description="Problem → data → approach → outcome. Two detailed walkthroughs showing how data becomes a decision-support system."
                    />
                </div>

                <div className="flex flex-col gap-8">
                    {caseStudies.map((study, i) => (
                        <CaseStudy key={study.id} study={study} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
