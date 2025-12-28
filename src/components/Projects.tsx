import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="w-full h-screen flex flex-col max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Projects</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <Reveal key={p.title}>
                        <Card className="h-full border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50/30">
                            <CardContent className="p-6 flex flex-col h-full space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                                        {p.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {p.stack.split(", ").map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <Button 
                                    variant="ghost" 
                                    className="w-fit p-0 h-auto text-primary hover:text-purple-700 font-semibold transition-colors duration-300"
                                >
                                    View Project →
                                </Button>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}