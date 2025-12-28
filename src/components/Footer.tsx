import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="w-full border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 mt-20">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-8">
                    <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-primary">
                            Kailash
                        </h3>
                        <p className="text-sm text-gray-600 font-light">Full-Stack Developer</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-6">
                        {navLinks.map((item) => (
                            <Button 
                                key={item.label}
                                asChild
                                variant="ghost"
                                className="text-gray-700 hover:text-primary transition-colors duration-300"
                            >
                                <a href={item.href}>
                                    {item.label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-center space-y-2">
                    <p className="text-sm font-light text-gray-700">
                        © {currentYear} Kailash. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 font-light">
                        Built with React • TypeScript • Tailwind CSS • shadcn/ui
                    </p>
                </div>
            </div>
        </footer>
    );
}