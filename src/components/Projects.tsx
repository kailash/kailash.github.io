import { projects } from "../data/projects";


export default function Projects() {
    return (
        <section id="projects" className="max-w-5xl py-24 px-12">
            <h2 className="text-3xl font-bold mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <div key={p.title} className="border border-white/10 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.description}</p>
                        <div className="mt-4 text-sm text-accent">{p.stack}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}