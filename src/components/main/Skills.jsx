import { BiBarChart, BiBot, BiCog, BiData, BiWrench } from "react-icons/bi";
import skills from "../../assets/data/skills.js";
import Badge from "./Badge.jsx";
import SectionHeading from "./SectionHeading.jsx";

const categoryConfig = {
    "Data Analysis": {
        Icon: BiData,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        accent: "from-blue-500 to-cyan-400",
        border: "hover:border-blue-500/30",
    },
    "Databases & BI": {
        Icon: BiBarChart,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        accent: "from-emerald-500 to-teal-400",
        border: "hover:border-emerald-500/30",
    },
    "Machine Learning": {
        Icon: BiBot,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        accent: "from-violet-500 to-purple-400",
        border: "hover:border-violet-500/30",
    },
    "Data Engineering / Automation": {
        Icon: BiCog,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        accent: "from-amber-500 to-orange-400",
        border: "hover:border-amber-500/30",
    },
    "Tools": {
        Icon: BiWrench,
        color: "text-slate-400",
        bg: "bg-slate-700/50",
        accent: "from-slate-600 to-slate-500",
        border: "hover:border-slate-600",
    },
};

export default function Skills() {
    return (
        <section id="skills" className="px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Skills"
                    title="A practical stack for analytics, BI, and automation."
                    description="Grouped by the workflows I use most: analysis, databases, machine learning, data engineering, and business tools."
                />

                <div className="grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
                    {skills.map(category => {
                        const config = categoryConfig[category.category] ?? categoryConfig["Tools"];
                        const { Icon, color, bg, accent, border } = config;
                        return (
                            <article
                                key={category.category}
                                className={`overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/50 ${border}`}
                            >
                                <div className={`h-0.5 bg-gradient-to-r ${accent}`} />
                                <div className="p-5 sm:p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg ${bg}`}>
                                            <Icon className={`text-xl ${color}`} />
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-100">{category.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map(skill => (
                                            <Badge key={skill}>{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
