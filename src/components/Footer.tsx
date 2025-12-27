export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 sm:py-12 mt-5">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-8">
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900">Kailash</h3>
                        <p className="text-sm text-gray-600">Full-Stack Developer</p>
                    </div>
                    
                    <div className="flex gap-6">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-sm text-gray-600">
                        © {currentYear} Kailash. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}