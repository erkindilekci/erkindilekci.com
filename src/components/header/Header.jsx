import { BiDownload } from "react-icons/bi";
import { navItems, profile, resumeUrl } from "../../assets/data/profile.js";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 px-4 backdrop-blur-md md:px-5">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
                {/* Brand */}
                <a
                    href="#hero"
                    className="flex min-w-0 items-center gap-2.5 truncate text-sm font-semibold text-slate-100 transition hover:text-emerald-400 md:text-base"
                >
                    <span className="relative flex h-2.5 w-2.5 flex-none">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    {profile.name}
                    <span className="hidden font-mono text-xs font-normal text-slate-600 md:inline">
                        · Data Science &amp; Analytics
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-slate-400 transition hover:text-emerald-400"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Resume CTA */}
                <a
                    href={resumeUrl}
                    download
                    className="inline-flex flex-none items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-500/50 hover:text-emerald-400"
                >
                    Resume
                    <BiDownload className="text-lg" />
                </a>
            </div>

            {/* Mobile nav */}
            <nav
                className="no-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto border-t border-slate-800/50 py-2 lg:hidden"
                aria-label="Mobile navigation"
            >
                {navItems.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-emerald-400"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
