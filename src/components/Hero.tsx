import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const { scrollY } = useScroll();

    // Parallax effects
    const svgY = useTransform(scrollY, [0, 300], [0, 40]);
    const textY = useTransform(scrollY, [0, 300], [0, 80]);
    const textOpacity = useTransform(scrollY, [0, 200], [1, 0.85]);

    return (
        <section id="home" className="w-full bg-white overflow-hidden">
            {/* SVG Background */}
            <motion.div
                style={{ y: svgY }}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <svg
                    width="100%"
                    height="280"
                    viewBox="0 0 1400 280"
                    preserveAspectRatio="xMidYMid slice"
                    style={{ display: "block" }}
                >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>

                    <rect width="1400" height="280" fill="#F9FAFB" />

                    <circle cx="100" cy="50" r="60" fill="url(#grad1)" opacity="0.7" />
                    <circle cx="1300" cy="80" r="50" fill="url(#grad2)" opacity="0.7" />
                    <rect
                        x="500"
                        y="50"
                        width="120"
                        height="120"
                        fill="url(#grad1)"
                        opacity="0.5"
                        rx="15"
                        transform="rotate(25 560 110)"
                    />
                    <polygon
                        points="1100,150 1180,200 1020,200"
                        fill="url(#grad2)"
                        opacity="0.6"
                    />
                    <circle cx="150" cy="220" r="40" fill="url(#grad1)" opacity="0.4" />

                    <line
                        x1="50"
                        y1="140"
                        x2="300"
                        y2="140"
                        stroke="#9333EA"
                        strokeWidth="4"
                        opacity="0.3"
                    />
                    <line
                        x1="1000"
                        y1="200"
                        x2="1350"
                        y2="200"
                        stroke="#2563EB"
                        strokeWidth="4"
                        opacity="0.3"
                    />

                    <circle cx="1350" cy="40" r="8" fill="#A855F7" opacity="0.8" />
                    <circle cx="20" cy="240" r="8" fill="#2563EB" opacity="0.8" />
                    <circle cx="700" cy="260" r="6" fill="#EC4899" opacity="0.6" />
                </svg>
            </motion.div>

            {/* Hero Text */}
            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Hi, I&apos;m Kailash
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-600">
                    Full-Stack Developer • Problem Solver • Tech Enthusiast
                </p>

                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                    <Button className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 font-medium h-auto">
                        View My Work
                    </Button>
                    <Button variant="outline" className="px-6 py-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 font-medium h-auto">
                        Get in Touch
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
