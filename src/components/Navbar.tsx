import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { navItems } from "../config/nav-items";
import type { ReactNode } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Navbar({ children }: { children: ReactNode }) {
    const activeSection = useScrollSpy();
    const currentYear = new Date().getFullYear();

    return (
        <SidebarProvider defaultOpen={true}>
            <Sidebar collapsible="icon" className="border-r border-gray-200 w-72">
                <SidebarHeader className="border-b border-gray-100 pb-0">
                    {/* Avatar/Image Section */}
                    <div className="flex flex-col items-center w-full gap-4 py-8">
                        <Avatar className="w-50 h-50 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <AvatarImage src="/kailash-adhikari.png" alt="Kailash" className="object-cover" />
                            <AvatarFallback className="text-6xl font-bold text-white bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500">K</AvatarFallback>
                        </Avatar>
                        <div className="text-center w-full">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Kailash
                            </h1>
                            <p className="text-sm font-medium text-purple-600 mt-0">Full-Stack Developer</p>
                            <div className="w-12 h-0.5 bg-primary mx-auto mt-1"></div>
                        </div>
                        {/* Social Icons */}
                        <div className="flex gap-3 justify-center mt-0">
                            <a
                                href="https://github.com/kailash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                                title="GitHub"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/kailash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-blue-700 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                                title="LinkedIn"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/kailash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-blue-500 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                                title="Twitter"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 11-5-1 .25-2.25.5-3 .5A5.5 5.5 0 0023 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent className="mt-6 px-2">
                    <SidebarMenu className="gap-3 flex flex-col items-end">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <SidebarMenuItem key={item.id} className="group">
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        className="transition-all duration-300 py-2 px-4 rounded-lg font-semibold text-base relative overflow-hidden group !bg-transparent !hover:bg-transparent"
                                        style={isActive ? { color: "hsl(270, 100%, 55.5%)" } : { color: "#374151" }}
                                        onMouseEnter={(e) => {
                                            const color = isActive ? "hsl(270, 100%, 70%)" : "hsl(270, 100%, 65%)";
                                            (e.currentTarget as HTMLElement).style.color = color;
                                        }}
                                        onMouseLeave={(e) => {
                                            const color = isActive ? "hsl(270, 100%, 55.5%)" : "#374151";
                                            (e.currentTarget as HTMLElement).style.color = color;
                                        }}
                                    >
                                        <a href={`#${item.id}`} className="flex items-center gap-3 relative justify-end">

                                            <span className="relative">
                                                {item.label}
                                            </span>
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <div className="border-t border-gray-200 pt-4">
                        <div className="text-center space-y-2">
                            <p className="text-xs font-light text-gray-700">
                                © {currentYear} Kailash Adhikari.
                            </p>
                            <p className="text-xs text-gray-600 font-light">
                                Built with <FavoriteIcon className="!w-3 !h-3 !text-red-500 inline" />
                            </p>
                            <div className="text-xs text-gray-600 space-y-1">
                                <p className="space-x-1 flex flex-wrap justify-center gap-1">
                                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">React</span>
                                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">TypeScript</span>
                                    <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">Vite</span>
                                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold">shadcn/ui</span>
                                    <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold">Co-pilot</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>

            {children}
        </SidebarProvider>
    );
}
