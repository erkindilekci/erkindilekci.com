import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMap } from "react-icons/bi";
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
    return (
        <section id="contact" className="border-t border-slate-800 px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Contact"
                    title="Open to data analyst, BI, and junior data science roles."
                    description="The fastest way to reach me is email or LinkedIn."
                />

                <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
                    {contactItems.map(item => {
                        const Icon = item.icon;
                        const content = (
                            <div className={`flex h-full items-start gap-4 rounded-xl border ${item.border} bg-slate-900 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/50`}>
                                <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${item.bg}`}>
                                    <Icon className={`text-xl ${item.color}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                                    <p className="mt-1 break-words text-base font-medium text-slate-100">{item.value}</p>
                                </div>
                            </div>
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
