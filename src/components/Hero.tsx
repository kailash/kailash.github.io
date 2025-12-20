import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section id="home" className="max-w-5xl py-24 px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-5xl font-bold">Hi, I'm YourName</h1>
                <p className="mt-4 text-gray-400">Software Engineer • Builder • Problem Solver</p>
            </motion.div>
        </section>
    );
}