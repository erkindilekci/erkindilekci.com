import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMap } from "react-icons/bi";
import { useInView } from "../../hooks/useInView.js";
import { profile } from "../../assets/data/profile.js";
import SectionHeading from "./SectionHeading.jsx";

const contactItems = [
    {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: BiEnvelope,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20 hover:border-emerald-500/40",
    },
    {
        label: "LinkedIn",
        value: profile.linkedinLabel,
        href: profile.linkedin,
        icon: BiLogoLinkedin,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20 hover:border-blue-500/40",
    },
    {
        label: "GitHub",
        value: profile.githubLabel,
        href: profile.github,
        icon: BiLogoGithub,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20 hover:border-violet-500/40",
    },
    {
        label: "Location",
        value: profile.location,
        icon: BiMap,
        color: "text-slate-400",
        bg: "bg-slate-700/50",
        border: "border-slate-700 hover:border-slate-600",
    },
];

export default function Contact() {
    const [headingRef, headingInView] = useInView(0.1);
    const [bannerRef, bannerInView] = useInView(0.1);

    return (
        <section id="contact" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
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
                        eyebrow="Contact"
                        title="Let's talk data."
                        description="Open to internships, junior data roles, and data-driven engineering opportunities. The fastest way to reach me is email or LinkedIn."
                    />
                </div>

                {/* Open-to-work banner */}
                <div
                    ref={bannerRef}
                    className="mb-10 overflow-hidden rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6"
                    style={{
                        opacity: bannerInView ? 1 : 0,
                        transform: bannerInView ? "translateY(0)" : "translateY(16px)",
                        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                    }}
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-500/15">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                            </span>
                        </div>
                        <div>
                            <p className="font-semibold text-emerald-400">Open to opportunities</p>
                            <p className="mt-1.5 text-sm leading-6 text-slate-400">
                                I&apos;m actively looking for internship and junior positions in{" "}
                                <span className="font-medium text-slate-200">Data Analytics</span>,{" "}
                                <span className="font-medium text-slate-200">Data Science</span>,{" "}
                                <span className="font-medium text-slate-200">BI Engineering</span>, and{" "}
                                <span className="font-medium text-slate-200">Data Engineering</span>. Particularly interested in companies working with operational, supply chain, manufacturing, or logistics data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact links */}
                <div className="grid gap-4 md:grid-cols-2">
                    {contactItems.map((item, i) => {
                        const Icon = item.icon;
                        const content = (
                            <ContactCard item={item} Icon={Icon} index={i} />
                        );
                        return item.href ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={item.label}>{content}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ContactCard({ item, Icon, index }) {
    const [ref, inView] = useInView(0.1);
    return (
        <div
            ref={ref}
            className={`flex h-full items-start gap-4 rounded-xl border ${item.border} bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/50`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
            }}
        >
            <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${item.bg}`}>
                <Icon className={`text-xl ${item.color}`} />
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                <p className="mt-1 break-all text-base font-medium text-slate-100">{item.value}</p>
            </div>
        </div>
    );
}
