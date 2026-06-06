import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import CredlyBadge from "./CredlyBadge";
import { Layers, Server, Cloud, Wrench } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
    "Frontend":           Layers,
    "Backend":            Server,
    "Cloud & DevOps":     Cloud,
    "Architecture & Data": Wrench,
};

export default function Skills() {
    return (
        <section id="skills" className="w-full py-24 md:py-32 px-8 md:px-12 max-w-5xl mx-auto">
            <Reveal>
                <SectionHeading eyebrow="What I work with" title="Skills" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((cat) => {
                    const Icon = CATEGORY_ICONS[cat.category] ?? Layers;
                    return (
                        <Reveal key={cat.category}>
                            <div className="group rounded-xl border border-gray-100 bg-white p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900">{cat.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100 transition-colors duration-150"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal>
                <div className="mt-12">
                    <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                        Certifications
                    </p>
                    <CredlyBadge />
                </div>
            </Reveal>
        </section>
    );
}
