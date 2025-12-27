import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "../config/nav-items";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    const activeSection = useScrollSpy();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Desktop Sidebar
    const desktopNavbar = (
        <nav className="hidden md:flex fixed left-0 top-0 h-screen w-96 bg-white z-50 flex-col items-end py-8 px-6 border-r border-gray-200 shadow-sm">
            {/* Avatar */}
            <div className="mb-12">
                <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-end gap-1 w-full">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <div key={item.id} className="relative">
                            <Button
                                asChild
                                variant="ghost"
                                className={`w-full justify-end gap-3 px-4 py-3 h-auto font-bold text-sm transition-all duration-300 ${
                                    isActive
                                        ? "text-purple-600"
                                        : "text-gray-700 hover:text-purple-600 hover:bg-transparent"
                                }`}
                                title={item.label}
                            >
                                <a href={`#${item.id}`} className="w-full flex items-center justify-end gap-3">
                                    <span>{item.label}</span>
                                    <IconComponent sx={{ fontSize: 22 }} />
                                </a>
                            </Button>
                            {isActive && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-transparent border-l-8 border-l-purple-600"></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );

    // Mobile Top Navbar with Sheet Menu
    const mobileNavbar = (
        <>
            <nav className="md:hidden flex sm:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 shadow-sm">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 text-xs">P</span>
                </div>

                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? (
                                <CloseIcon className="text-gray-600" />
                            ) : (
                                <MenuIcon className="text-gray-600" />
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="w-full border-b border-gray-100 p-0">
                        <div className="flex flex-col">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                const isActive = activeSection === item.id;
                                return (
                                    <Button
                                        key={item.id}
                                        asChild
                                        variant="ghost"
                                        className={`w-full justify-start gap-3 px-4 py-3 h-auto font-medium text-sm transition-all duration-300 rounded-none border-b border-gray-100 last:border-b-0 ${
                                            isActive
                                                ? "text-purple-600"
                                                : "text-gray-600 hover:text-purple-600 hover:bg-transparent"
                                        }`}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="w-full flex items-center gap-3"
                                        >
                                            <IconComponent sx={{ fontSize: 20 }} />
                                            <span>{item.label}</span>
                                        </a>
                                    </Button>
                                );
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );

    // Landscape Mobile Sidebar (icon only)
    const landscapeNavbar = (
        <nav className="hidden sm:flex md:hidden fixed left-0 top-0 h-screen w-20 bg-white z-50 flex-col items-center py-8 px-2 border-r border-gray-200 shadow-sm">
            <div className="mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">P</span>
                </div>
            </div>

            <div className="flex flex-col justify-end gap-2 w-full">
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <Button
                            key={item.id}
                            asChild
                            variant="ghost"
                            size="icon"
                            className={`h-10 w-10 transition-all duration-300 ${
                                isActive
                                    ? "text-purple-600"
                                    : "text-gray-600 hover:text-purple-400 hover:bg-transparent"
                            }`}
                            title={item.label}
                        >
                            <a href={`#${item.id}`} className="flex items-center justify-center">
                                <IconComponent sx={{ fontSize: 16 }} />
                            </a>
                        </Button>
                    );
                })}
            </div>
        </nav>
    );

    return (
        <>
            {desktopNavbar}
            {mobileNavbar}
            {landscapeNavbar}
        </>
    );
}
