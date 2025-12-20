import Reveal from "./Reveal";

const skillCategories = [
    {
        category: "Frontend",
        skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Python", "Java", "Spring Boot"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS", "Azure", "Docker", "GitHub Actions"]
    },
    {
        category: "Tools & Databases",
        skills: ["Git", "PostgreSQL", "MongoDB", "REST APIs"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat) => (
                    <Reveal key={cat.category}>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-lg font-bold text-purple-600 mb-4">{cat.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}; 