import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section id="home" className="w-full max-w-5xl mx-auto py-20 sm:py-24 px-6 sm:px-8 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Hi, I'm Kailash
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600">
                    Full-Stack Developer • Problem Solver • Tech Enthusiast
                </p>
                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-medium">
                        View My Work
                    </button>
                    <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">
                        Get in Touch
                    </button>
                </div>
            </motion.div>
        </section>
    );
}