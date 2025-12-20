import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { experiences } from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Experience
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                </div>
            </Reveal>

            {/* Timeline */}
            <div className="relative pt-4">
                {/* Vertical line - centered on desktop only */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-blue-600 transform -translate-x-1/2 shadow-lg"></div>

                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-blue-600 shadow-lg"></div>

                {/* Experience items */}
                <div className="space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => (
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
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-purple-600 flex items-center justify-center shadow-md hover:shadow-lg hover:border-purple-500 transition-all duration-300 relative z-10"
                                        >
                                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                            viewport={{ once: false, margin: "-100px" }}
                                            className="bg-white border border-gray-200 rounded-xl p-6 sm:p-7 hover:border-purple-400 hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-blue-50/30"
                                        >
                                            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                                {exp.title}
                                            </h3>
                                            <span className="text-sm sm:text-base text-purple-600 font-semibold mt-1 block">
                                                {exp.company}
                                            </span>
                                            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-3 mb-4 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                {exp.period}
                                            </p>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-200 hover:border-purple-400 transition-all duration-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Desktop Layout - Alternating */}
                                <div className="hidden md:flex gap-0 items-stretch">
                                    {/* Left side content (even items) */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="w-1/2 flex justify-end pr-12">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                                    viewport={{ once: false, margin: "-100px" }}
                                                    className="bg-white border border-gray-200 rounded-xl p-7 hover:border-purple-400 hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-blue-50/30 w-full max-w-sm text-right"
                                                >
                                                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-base text-purple-600 font-semibold mt-1 block">
                                                        {exp.company}
                                                    </span>
                                                    <p className="text-sm text-gray-500 font-medium mt-3 mb-4 flex justify-end items-center gap-2">
                                                        {exp.period}
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed mb-5">
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 justify-end">
                                                        {exp.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-200 hover:border-purple-400 transition-all duration-300"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Center dot */}
                                            <div className="w-auto flex items-center justify-center">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: false, margin: "-100px" }}
                                                    className="w-12 h-12 rounded-full bg-white border-4 border-purple-600 flex items-center justify-center shadow-md hover:shadow-lg hover:border-purple-500 transition-all duration-300 relative z-10 flex-shrink-0"
                                                >
                                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
                                                </motion.div>
                                            </div>

                                            {/* Right side empty */}
                                            <div className="w-1/2 pl-12"></div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Left side empty */}
                                            <div className="w-1/2 pr-12"></div>

                                            {/* Center dot */}
                                            <div className="w-auto flex items-center justify-center">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: false, margin: "-100px" }}
                                                    className="w-12 h-12 rounded-full bg-white border-4 border-purple-600 flex items-center justify-center shadow-md hover:shadow-lg hover:border-purple-500 transition-all duration-300 relative z-10 flex-shrink-0"
                                                >
                                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
                                                </motion.div>
                                            </div>

                                            {/* Right side content (odd items) */}
                                            <div className="w-1/2 flex justify-start pl-12">
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                                                    viewport={{ once: false, margin: "-100px" }}
                                                    className="bg-white border border-gray-200 rounded-xl p-7 hover:border-purple-400 hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-50/30 hover:to-blue-50/30 w-full max-w-sm"
                                                >
                                                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-base text-purple-600 font-semibold mt-1 block">
                                                        {exp.company}
                                                    </span>
                                                    <p className="text-sm text-gray-500 font-medium mt-3 mb-4 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                        {exp.period}
                                                    </p>
                                                    <p className="text-gray-600 text-base leading-relaxed mb-5">
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.skills.map((skill) => (
                                                            <span
                                                                key={skill}
                                                                className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-200 hover:border-purple-400 transition-all duration-300"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
