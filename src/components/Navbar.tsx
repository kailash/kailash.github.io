import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "../config/nav-items";

export default function Navbar() {
    const activeSection = useScrollSpy(navItems.map(item => item.id));
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar - Fixed on left */}
            <nav className="hidden md:flex fixed left-0 top-0 h-screen w-96 bg-white z-50 flex-col items-end py-8 px-6 border-r border-gray-300 shadow-sm">
                {/* Image Placeholder */}
                <div className="mb-12">
                    <div className="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Photo</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-end gap-1 w-full">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className="relative">
                                <a
                                    href={`#${item.id}`}
                                    className={`flex items-center justify-end gap-3 px-4 py-3 font-bold text-sm transition-all duration-300 ${activeSection === item.id
                                            ? "text-purple-600"
                                            : "text-gray-700 hover:text-purple-600"
                                        }`}
                                    title={item.label}
                                >
                                    <span>{item.label}</span>
                                    <IconComponent sx={{ fontSize: 22 }} />
                                </a>
                                {activeSection === item.id && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Navbar - Top fixed (vertical only) */}
            <nav className="md:hidden flex sm:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-300 z-50 flex items-center justify-between px-4 shadow-sm">
                {/* Logo/Photo on mobile */}
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 text-xs">P</span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <CloseIcon className="text-gray-600" />
                    ) : (
                        <MenuIcon className="text-gray-600" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu Dropdown (vertical only) */}
            {isMobileMenuOpen && (
                <div className="md:hidden sm:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-100 z-40 flex flex-col">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 font-medium text-sm transition-all duration-300 border-b border-gray-100 last:border-b-0 ${activeSection === item.id
                                        ? "text-purple-600"
                                        : "text-gray-600 hover:text-purple-600"
                                    }`}
                            >
                                <IconComponent sx={{ fontSize: 20 }} />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </div>
            )}

            {/* Landscape Mobile Navbar - Fixed on left */}
            <nav className="hidden sm:flex md:hidden fixed left-0 top-0 h-screen w-20 bg-white z-50 flex-col items-center py-8 px-2 border-r border-gray-300 shadow-sm">
                {/* Image Placeholder */}
                <div className="mb-6">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">P</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-end gap-2 w-full">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`flex items-center justify-center p-2 rounded-lg font-medium text-xs transition-all duration-300 ${activeSection === item.id
                                        ? "text-purple-600"
                                        : "text-gray-600 hover:text-purple-400"
                                    }`}
                                title={item.label}
                            >
                                <IconComponent sx={{ fontSize: 16 }} />
                            </a>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
