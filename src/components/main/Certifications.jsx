import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import certifications from "../../assets/data/certifications.js";
import SectionHeading from "./SectionHeading.jsx";

const certIcons = ["🎓", "⚙️", "🔁"];

export default function Certifications() {
    const [headingRef, headingInView] = useInView(0.1);

    return (
        <section id="certifications" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-20">
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
                        eyebrow="Certifications"
                        title="CS & algorithmic foundations."
                        description="Completed specializations in algorithms, software engineering, and development processes — forming the technical foundation for rigorous data work."
                    />
                </div>

                <div className="grid gap-x-5 gap-y-5 md:grid-cols-3">
                    {certifications.map((cert, i) => (
                        <CertCard key={`${cert.name}-${cert.issuer}`} cert={cert} icon={certIcons[i]} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertCard({ cert, icon, index }) {
    const [ref, inView] = useInView(0.1);
    return (
        <a
            ref={ref}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-slate-900/50"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, border-color 0.25s, box-shadow 0.3s`,
            }}
        >
            <div className="mb-3 text-2xl">{icon}</div>
            <div className="flex flex-1 items-start justify-between gap-4">
                <div>
                    <h3 className="font-semibold text-slate-100 transition group-hover:text-emerald-400">
                        {cert.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">{cert.issuer}</p>
                    {cert.relevance && (
                        <p className="mt-3 text-xs leading-5 text-slate-600 italic">{cert.relevance}</p>
                    )}
                </div>
                <BiLinkExternal className="mt-1 flex-none text-lg text-slate-600 transition group-hover:text-emerald-400" />
            </div>
        </a>
    );
}
