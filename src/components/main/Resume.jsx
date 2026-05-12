import { BiDownload } from "react-icons/bi";
import { resumeUrl } from "../../assets/data/profile.js";

export default function Resume() {
    return (
        <section id="resume" className="px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-center sm:p-8 md:p-10">
                    <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
                    <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

                    <span className="relative mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                        Resume
                    </span>
                    <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
                        Download my resume.
                    </h2>
                    <p className="relative mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
                        A concise overview of my experience, projects, technical skills, and certifications.
                    </p>
                    <a
                        href={resumeUrl}
                        download
                        className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto"
                    >
                        Download Resume
                        <BiDownload className="text-lg" />
                    </a>
                </div>
            </div>
        </section>
    );
}
