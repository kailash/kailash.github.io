import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "Full‑Stack", label: "Specialisation" },
    { value: "Cloud & AI", label: "Focus Areas" },
];

export default function Hero() {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 400], [0, 60]);
    const textOpacity = useTransform(scrollY, [0, 400], [1, 0.9]);

    return (
        <section id="home" className="w-full min-h-screen bg-white overflow-hidden flex items-center justify-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-2xl mx-auto px-8 relative z-10"
            >
                {/* Eyebrow label */}
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary text-[11px] font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-8">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Senior Software Engineer
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-[4.25rem] font-bold text-gray-950 leading-[1.08] tracking-tight">
                    Kailash Adhikari
                </h1>

                {/* Bio */}
                <p className="mt-6 text-[1.05rem] text-gray-500 font-light leading-relaxed max-w-lg mx-auto">
                    12+ years designing and delivering scalable systems — from cloud
                    infrastructure to full‑stack products.
                </p>

                {/* Stats */}
                <div className="mt-10 flex items-center justify-center gap-0 divide-x divide-gray-200">
                    {stats.map(({ label, value }) => (
                        <div key={label} className="px-6 first:pl-0 last:pr-0 text-center">
                            <p className="text-[1.6rem] font-black text-gray-900 leading-none tracking-tight">{value}</p>
                            <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-1.5">{label}</p>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-10 flex items-center gap-3 justify-center flex-wrap">
                    <Button asChild size="lg" className="h-11 px-7 font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        <a href="#projects" className="flex items-center gap-2">
                            View My Work <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-11 px-7 font-semibold border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                        <a href="#contact" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Get in Touch
                        </a>
                    </Button>
                    {/* TODO: drop resume.pdf into public/ to enable */}
                    <Button asChild size="lg" variant="ghost" className="h-11 px-6 text-gray-400 hover:text-gray-700 font-medium">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
