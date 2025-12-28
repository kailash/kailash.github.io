import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { experiences } from "../data/experience";
import { Badge } from "@/components/ui/badge";
import TimelineCurve from "./TimelineCurve";

export default function Experience() {
    return (
        <section id="experience" className="w-full h-screen flex flex-col max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Experience
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>
            </Reveal>

            {/* Timeline */}
            <div className="relative pt-8">
                {/* Snake-like zig-zag line - Desktop only */}
                <div className="hidden md:block">
                    <TimelineCurve itemCount={experiences.length} />
                </div>

                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-secondary"></div>

                {/* Experience items */}
                <div className="space-y-12 md:space-y-24 relative z-10">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <Reveal key={exp.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    className="relative"
                                >
                                    {/* Mobile Layout */}
                                    <div className="md:hidden flex gap-6">
                                        {/* Timeline dot */}
                                        <div className="flex flex-col items-center flex-shrink-0">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: false, margin: "-100px" }}
                                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-3 border-primary flex items-center justify-center shadow-md hover:shadow-lg hover:border-primary/80 transition-all duration-300 relative z-10"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                                viewport={{ once: false, margin: "-100px" }}
                                                className="space-y-3"
                                            >
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-sm sm:text-base text-primary font-semibold mt-1 block">
                                                        {exp.company}
                                                    </span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                    {exp.period}
                                                </p>
                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                    {exp.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {exp.skills.map((skill) => (
                                                        <Badge
                                                            key={skill}
                                                            variant="secondary"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Desktop Layout - Smooth Zig-Zag */}
                                    <div className="hidden md:block relative" style={{ minHeight: "120px" }}>
                                        {/* Content positioned based on isLeft */}
                                        {isLeft ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                                viewport={{ once: false, margin: "-100px" }}
                                                className="absolute right-0 top-0 w-1/2 flex justify-end pr-16 space-y-3"
                                            >
                                                <div className="w-full max-w-sm space-y-3">
                                                    <div className="text-right">
                                                        <h3 className="text-lg font-bold text-primary">
                                                            {exp.title}
                                                        </h3>
                                                        <span className="text-sm text-primary font-semibold mt-1 block">
                                                            {exp.company}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 font-medium flex justify-end items-center gap-2">
                                                        {exp.period}
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 justify-end">
                                                        {exp.skills.map((skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                                viewport={{ once: false, margin: "-100px" }}
                                                className="absolute left-0 top-0 w-1/2 flex justify-start pl-16 space-y-3"
                                            >
                                                <div className="w-full max-w-sm space-y-3">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-primary">
                                                            {exp.title}
                                                        </h3>
                                                        <span className="text-sm text-primary font-semibold mt-1 block">
                                                            {exp.company}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                        {exp.period}
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.skills.map((skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
