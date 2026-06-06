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
import { Github, Linkedin } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { navItems } from "../config/nav-items";
import type { ReactNode } from "react";

export default function Navbar({ children }: { children: ReactNode }) {
    const activeSection = useScrollSpy();
    const currentYear = new Date().getFullYear();

    return (
        <SidebarProvider
            defaultOpen={true}
            style={{ "--sidebar-width": "15rem" } as React.CSSProperties}
        >
            <Sidebar collapsible="icon" className="border-r border-gray-100 bg-white">
                <SidebarHeader className="px-4 pt-8 pb-6 border-b border-gray-100">
                    <div className="flex flex-col items-center gap-4">
                        {/* Avatar */}
                        <div className="relative">
                            <Avatar className="w-24 h-24 ring-4 ring-primary/10 ring-offset-2 ring-offset-white shadow-md">
                                <AvatarImage src="/kailash-adhikari.png" alt="Kailash Adhikari" className="object-cover" />
                                <AvatarFallback className="text-3xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-700">KA</AvatarFallback>
                            </Avatar>
                            {/* Online indicator */}
                            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
                        </div>

                        {/* Name & Title */}
                        <div className="text-center space-y-1 group-data-[collapsible=icon]:hidden">
                            <h2 className="text-base font-bold text-gray-900 tracking-tight">
                                Kailash Adhikari
                            </h2>
                            <p className="text-[11px] font-semibold text-primary tracking-widest uppercase">
                                Senior Software Engineer
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
                            <a
                                href="https://github.com/kailash"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                            >
                                <Github className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/kailashadhikari"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent className="py-4 px-3">
                    <SidebarMenu className="space-y-0.5">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        className="rounded-lg h-9 font-medium text-[13px] text-gray-500 hover:text-gray-900"
                                    >
                                        <a href={`#${item.id}`} className="flex items-center gap-2.5">
                                            <Icon className="w-[15px] h-[15px] shrink-0" />
                                            <span>{item.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter className="px-4 py-4 border-t border-gray-100">
                    <p className="text-[11px] text-center text-gray-400 group-data-[collapsible=icon]:hidden">
                        © {currentYear} Kailash Adhikari
                    </p>
                </SidebarFooter>
            </Sidebar>

            {children}
        </SidebarProvider>
    );
}
