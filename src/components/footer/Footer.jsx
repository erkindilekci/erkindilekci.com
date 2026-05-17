import { BiEnvelope, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { profile } from "../../assets/data/profile.js";

export default function Footer() {
    const links = [
        { label: "LinkedIn", href: profile.linkedin,          icon: BiLogoLinkedin },
        { label: "GitHub",   href: profile.github,            icon: BiLogoGithub   },
        { label: "Email",    href: `mailto:${profile.email}`, icon: BiEnvelope     },
    ];

    return (
        <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 sm:px-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center text-sm text-slate-500 md:flex-row md:justify-between md:text-left">
                <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p>
                        &copy; 2026 {profile.name}
                        <span className="ml-2 text-xs text-slate-700">· Data Science &amp; Analytics</span>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    {links.map(link => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-medium transition hover:text-emerald-400"
                            >
                                <Icon className="text-lg" />
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
