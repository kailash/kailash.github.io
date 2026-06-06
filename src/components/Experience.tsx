import { experiences } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
    return (
        <section id="experience" className="w-full py-24 md:py-32 px-8 md:px-12 max-w-5xl mx-auto">
            <Reveal>
                <SectionHeading eyebrow="Where I've worked" title="Experience" />
            </Reveal>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7rem] top-2 bottom-2 w-px bg-gray-100 hidden sm:block" />

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <Reveal key={exp.id}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 group">
                                {/* Left: date + company */}
                                <div className="sm:w-28 shrink-0 sm:pr-4 sm:text-right space-y-0.5">
                                    <p className="text-[11px] font-semibold text-gray-400 tracking-wide">
                                        {exp.period}
                                    </p>
                                    <p className="text-[11px] text-gray-400 hidden sm:block">
                                        {exp.company}
                                    </p>
                                </div>

                                {/* Dot */}
                                <div className="hidden sm:flex items-start justify-center w-10 shrink-0 relative z-10 pt-0.5">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300" />
                                </div>

                                {/* Right: content */}
                                <div className="flex-1 min-w-0 pb-2">
                                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                        <h3 className="text-[0.95rem] font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                                            {exp.role}
                                        </h3>
                                        {/* Company chip — visible on mobile, hidden on desktop (shown in left col) */}
                                        <span className="sm:hidden text-xs text-gray-400">{exp.company}</span>
                                    </div>

                                    {exp.location && (
                                        <p className="text-[11px] text-gray-400 mb-2">{exp.location}</p>
                                    )}

                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-50 text-gray-500 border border-gray-100"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
