import { BiBuilding, BiCalendar } from "react-icons/bi";
import experience from "../../assets/data/experience.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
    return (
        <section id="experience" className="px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Experience"
                    title="Hands-on analytics work across operations and IT."
                    description="A concise timeline of roles where data, automation, reporting, and production context meet."
                />

                <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute bottom-0 left-4 top-4 hidden w-px bg-gradient-to-b from-emerald-500/60 via-blue-500/30 to-transparent sm:block" />

                    <div className="flex flex-col gap-8">
                        {experience.map((item) => (
                            <div key={`${item.role}-${item.company}`} className="relative flex gap-6 sm:gap-8">
                                {/* Timeline dot */}
                                <div className="hidden flex-none flex-col items-center sm:flex">
                                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-500/40 bg-slate-900">
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                </div>

                                {/* Card */}
                                <article className="flex-1 -mt-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition hover:border-emerald-500/30 hover:shadow-lg hover:shadow-slate-900/50">
                                    <div className="h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500/50" />
                                    <div className="p-5 sm:p-6">
                                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
                                                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                                                    <BiBuilding className="text-base" />
                                                    {item.company}
                                                </p>
                                            </div>
                                            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                                                <BiCalendar className="text-sm" />
                                                {item.period}
                                            </span>
                                        </div>
                                        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-400">
                                            {item.bullets.map(bullet => (
                                                <li key={bullet} className="flex gap-3">
                                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
