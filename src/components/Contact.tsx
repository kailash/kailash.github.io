import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section id="contact" className="w-full h-screen flex flex-col max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Get In Touch</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </Reveal>

            <Reveal>
                <div className="space-y-8">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-light">
                        I'm always interested in hearing about new projects and opportunities. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="px-8 py-3 h-auto font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <a href="mailto:your.email@example.com">Send Email</a>
                        </Button>
                        <Button asChild variant="outline" className="px-8 py-3 h-auto font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <a href="https://www.linkedin.com/in/kailash" target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </a>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}