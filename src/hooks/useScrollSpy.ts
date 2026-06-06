import { useEffect, useState, useCallback } from "react";
import { navItems } from "../config/nav-items";

const SECTION_IDS = navItems.map(item => item.id);
const SCROLL_OFFSET = 100;

function detectActiveSection(): string {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;
    for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
            const { offsetTop, offsetHeight } = el;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                return id;
            }
        }
    }
    return "home";
}

export function useScrollSpy() {
    const [activeId, setActiveId] = useState(detectActiveSection);

    const handleScroll = useCallback(() => {
        setActiveId(detectActiveSection());
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return activeId;
}
