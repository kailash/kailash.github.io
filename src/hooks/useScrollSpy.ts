import { useEffect, useState, useCallback } from "react";
import { navItems } from "../config/nav-items";

const SECTION_IDS = navItems.map(item => item.id);
const SCROLL_OFFSET = 100; // Offset from top for section detection

export function useScrollSpy() {
  // Initialize with synchronous detection to avoid flash
  const [activeId, setActiveId] = useState(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;
    for (const id of SECTION_IDS) {
      const element = document.getElementById(id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          return id;
        }
      }
    }
    return "home";
  });

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;

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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeId;
}
