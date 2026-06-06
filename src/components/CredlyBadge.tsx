import { certificationBadges } from "@/data/skills";
import { useState } from "react";

export default function CredlyBadge() {
    const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

    return (
        <div className="rounded-xl border border-gray-100 bg-white p-6">
            <div className="flex flex-wrap gap-5">
                {certificationBadges.map((badge) => (
                    <a
                        key={badge.name}
                        href={badge.credlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        <img
                            src={badge.imageLink}
                            alt={badge.name}
                            className="w-16 h-16 rounded-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                            loading="lazy"
                            onMouseMove={(e) => setTooltip({
                                text: badge.name,
                                x: Math.min(e.clientX + 14, window.innerWidth - 220),
                                y: Math.min(e.clientY + 14, window.innerHeight - 48),
                            })}
                            onMouseLeave={() => setTooltip(null)}
                        />
                    </a>
                ))}
            </div>

            {tooltip && (
                <div
                    className="pointer-events-none fixed z-50 rounded-lg bg-gray-900 px-3 py-2 text-[11px] font-medium text-white shadow-xl max-w-[200px]"
                    style={{ left: tooltip.x, top: tooltip.y }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
}
