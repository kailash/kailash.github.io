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
import { useScrollSpy } from "../hooks/useScrollSpy";


export default function Navbar() {
    const activeSection = useScrollSpy();

    const navLinks = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <SidebarProvider defaultOpen={true}>
            <Sidebar collapsible="icon" className="border-r">
                <SidebarHeader className="border-b">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Kailash
                        </h1>
                        <p className="text-xs text-gray-600">Full-Stack Developer</p>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarMenu>
                        {navLinks.map((item) => (
                            <SidebarMenuItem key={item.id}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={activeSection === item.id}
                                    className={`transition-all duration-300 ${
                                        activeSection === item.id
                                            ? "bg-purple-100 text-purple-600"
                                            : "hover:bg-purple-50"
                                    }`}
                                >
                                    <a href={`#${item.id}`}>{item.label}</a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter className="border-t">
                    <p className="text-xs text-gray-500 text-center">© 2024 Kailash</p>
                </SidebarFooter>
            </Sidebar>

            {/* Main content wrapper */}
            <div className="flex-1"></div>
        </SidebarProvider>
    );
}
