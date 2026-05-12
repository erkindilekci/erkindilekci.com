import { BiLinkExternal } from "react-icons/bi";
import certifications from "../../assets/data/certifications.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Certifications() {
    return (
        <section id="certifications" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-20">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Certifications"
                    title="Selected academic and software foundations."
                    description="A compact selection of certificates that support my technical foundation."
                />

                <div className="grid gap-x-4 gap-y-6 md:grid-cols-3">
                    {certifications.map(certification => (
                        <a
                            key={`${certification.name}-${certification.issuer}`}
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-slate-900/50"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-slate-100 transition group-hover:text-emerald-400">{certification.name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">{certification.issuer}</p>
                                </div>
                                <BiLinkExternal className="mt-1 flex-none text-xl text-slate-600 transition group-hover:text-emerald-400" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
