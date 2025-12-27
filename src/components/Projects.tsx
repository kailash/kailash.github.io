import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <Reveal key={p.title}>
                        <Card className="h-full border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors duration-300">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 mb-4 leading-relaxed">
                                    {p.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.stack.split(", ").map((tech) => (
                                        <Badge
                                            key={tech}
                                            className="bg-purple-100 text-purple-700 text-xs font-medium"
                                            variant="secondary"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <button className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors duration-300">
                                    View Project →
                                </button>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}