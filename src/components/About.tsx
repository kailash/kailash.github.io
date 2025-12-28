import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="w-full h-screen flex flex-col max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">About Me</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </Reveal>
            
            <Reveal>
                <div className="space-y-6 max-w-2xl">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                        I'm a passionate full-stack developer with experience in building scalable systems and clean user experiences.
                        I enjoy working across frontend, backend, and cloud infrastructure to create meaningful solutions.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                        When I'm not coding, you can find me exploring new technologies, contributing to open source, or helping others learn.
                        Let's build something amazing together!
                    </p>
                </div>
            </Reveal>
        </section>
    );
}