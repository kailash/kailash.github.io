import { useEffect, useState } from "react";
import { navItems } from "../config/nav-items";

const SECTION_IDS = navItems.map(item => item.id);

export function useScrollSpy(p0: string[]) {
    const [activeId, setActiveId] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
            }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return activeId;
}
