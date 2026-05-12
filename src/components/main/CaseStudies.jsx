import caseStudies from "../../assets/data/caseStudies.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

const studyColors = [
    { accent: "from-emerald-500 to-teal-500", stepBg: "bg-emerald-500", stepText: "text-slate-950", dotHighlight: "bg-emerald-400" },
    { accent: "from-blue-500 to-indigo-500",  stepBg: "bg-blue-500",    stepText: "text-white",     dotHighlight: "bg-blue-400" },
];

function CaseStudy({ study, index }) {
    const { accent, stepBg, stepText, dotHighlight } = studyColors[index % studyColors.length];

    const blocks = [
        { title: "Problem",                   content: study.problem,      list: null,            highlight: false },
        { title: "Data Sources",              content: null,               list: study.dataSources, highlight: false },
        { title: "Approach",                  content: null,               list: study.approach,    highlight: false },
        { title: "Outcome / Business Impact", content: null,               list: study.outcome,     highlight: true },
    ];

    return (
        <article id={study.id} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
            <div className={`h-0.5 bg-gradient-to-r ${accent}`} />
            <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-slate-100">{study.title}</h3>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="grid gap-6">
                        {blocks.map(block => (
                            <section key={block.title}>
                                <h4 className={`text-xs font-bold uppercase tracking-widest ${block.highlight ? dotHighlight.replace("bg-", "text-") : "text-slate-500"}`}>
                                    {block.title}
                                </h4>
                                {block.content && (
                                    <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">{block.content}</p>
                                )}
                                {block.list && (
                                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-400 md:text-base">
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

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Tools Used</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {study.tools.map(tool => (
                                <Badge key={tool} tone="accent">{tool}</Badge>
                            ))}
                        </div>

                        <div className="mt-8 rounded-lg border border-slate-800 bg-slate-950 p-5">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Architecture</h4>
                            <div className="mt-5 grid gap-3">
                                {study.architecture.map((step, i) => (
                                    <div key={step} className="flex items-center gap-3">
                                        <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-md ${stepBg} text-xs font-bold ${stepText}`}>
                                            {i + 1}
                                        </span>
                                        <span className="text-sm font-medium text-slate-300">{step}</span>
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
    return (
        <section id="case-studies" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Case Studies"
                    title="A closer look at two analytics builds."
                    description="Two concise examples showing the problem, data, approach, tools, and business impact behind the work."
                />

                <div className="flex flex-col gap-8">
                    {caseStudies.map((study, i) => (
                        <CaseStudy key={study.id} study={study} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
