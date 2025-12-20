import Reveal from "./Reveal";
import { projects } from "../data/projects";


export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <Reveal key={p.title}>
                        <div className="border border-gray-200 hover:border-purple-500 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">{p.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.stack.split(", ").map((tech) => (
                                    <span 
                                        key={tech}
                                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <button className="mt-4 text-purple-600 font-medium text-sm hover:text-purple-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Project →
                            </button>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}