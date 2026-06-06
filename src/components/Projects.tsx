import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 md:py-32 px-8 md:px-12 max-w-5xl mx-auto">
            <Reveal>
                <SectionHeading eyebrow="What I've built" title="Projects" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p) => (
                    <Reveal key={p.title}>
                        <div className="group relative flex flex-col h-full rounded-xl border border-gray-100 bg-white p-6 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-300">
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary/70 to-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Header */}
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 leading-snug">
                                    {p.title}
                                </h3>
                                {p.year && (
                                    <span className="shrink-0 text-[10px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 rounded-md px-2 py-0.5 mt-0.5">
                                        {p.year}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">
                                {p.description}
                            </p>

                            {/* Stack */}
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {p.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-50 text-gray-500 border border-gray-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-50">
                                {p.github ? (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-800 transition-colors duration-200"
                                    >
                                        <Github className="w-3.5 h-3.5" /> GitHub
                                    </a>
                                ) : null}
                                {p.demo ? (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                    </a>
                                ) : null}
                                {!p.github && !p.demo && (
                                    <span className="text-[11px] text-gray-300 italic">Private / internal project</span>
                                )}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
