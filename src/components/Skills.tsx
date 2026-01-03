import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";
import { skillCategories } from "@/data/skills";
import CredlyBadge from "./CreadlyBadge";

export default function Skills() {
    return (
        <section id="skills" className="w-full h-screen flex flex-col max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Skills</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat) => (
                    <Reveal key={cat.category}>
                        <Card className="border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50/30">
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-lg font-bold text-primary group-hover:text-purple-700 transition-colors duration-300">{cat.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="hover:bg-purple-200 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>
            <div className="grid md:grid-cols-1 gap-8 mt-10">
                <CredlyBadge />
            </div>
        </section>
    );
}