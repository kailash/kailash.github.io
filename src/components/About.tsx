import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12 border-t border-gray-200">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            </Reveal>
            
            <Reveal>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    I'm a passionate full-stack developer with experience in building scalable systems and clean user experiences.
                    I enjoy working across frontend, backend, and cloud infrastructure to create meaningful solutions.
                </p>
            </Reveal>

            <Reveal>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open source, or helping others learn.
                    Let's build something amazing together!
                </p>
            </Reveal>
        </section>
    );
}