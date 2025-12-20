export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 sm:py-12 px-6 sm:px-8 md:px-12 mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Kailash</h3>
                        <p className="text-sm text-gray-600">Full-Stack Developer</p>
                    </div>
                    
                    <div className="flex gap-6">
                        <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">About</a>
                        <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Projects</a>
                        <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Contact</a>
                    </div>
                </div>
                
                <div className="border-t border-gray-300 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-600">
                        © {currentYear} Kailash. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}