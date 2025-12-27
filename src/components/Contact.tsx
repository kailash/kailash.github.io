import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
            </Reveal>

            <Reveal>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    I'm always interested in hearing about new projects and opportunities. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>
            </Reveal>

            <Reveal>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 font-medium h-auto">
                        <a href="mailto:kailash@example.com">Send Email</a>
                    </Button>
                    <Button asChild variant="outline" className="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium h-auto">
                        <a href="https://www.linkedin.com/in/kailash" target="_blank" rel="noopener noreferrer">
                            Connect on LinkedIn
                        </a>
                    </Button>
                </div>
            </Reveal>
        </section>
    );
}