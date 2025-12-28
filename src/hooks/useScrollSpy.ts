import { useEffect, useState } from "react";
import { navItems } from "../config/nav-items";

const SECTION_IDS = navItems.map(item => item.id);

export function useScrollSpy() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    // Simple scroll-based detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset from top

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if section is in view
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeId;
}
