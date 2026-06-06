import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-24 md:py-32 px-8 md:px-12 max-w-5xl mx-auto">
            <Reveal>
                <SectionHeading eyebrow="Let's talk" title="Get In Touch" />
            </Reveal>

            <Reveal>
                <div className="max-w-xl space-y-8">
                    <p className="text-base text-gray-500 leading-relaxed font-light">
                        Open to discussing engineering leadership roles, technical consulting,
                        and interesting system design challenges. I typically respond within
                        48 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="h-11 px-7 font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        >
                            {/* TODO: Replace with a professional email if preferred */}
                            <a href="mailto:adhikari.kailash88@gmail.com" className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> Send Email
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-11 px-7 font-semibold border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                        >
                            <a
                                href="https://in.linkedin.com/in/kailashadhikari"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
