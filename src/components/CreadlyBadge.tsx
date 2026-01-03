import { Card, CardContent } from "@/components/ui/card";
import { certificationBadges } from "@/data/skills";
import { useState } from "react";


export default function CredlyBadge() {


    const [tooltip, setTooltip] = useState<{
        text: string;
        x: number;
        y: number;
    } | null>(null);

    return (
        <Card className="border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50/30">
            <CardContent className="pt-6 space-y-4">
                <h3 className="text-lg font-bold text-primary group-hover:text-purple-700 transition-colors duration-300">Certifications</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {certificationBadges.map((badge) => (
                        <a
                            href={badge.credlyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-transform"
                        >
                            <img
                                src={badge.imageLink}
                                alt={badge.name}
                                className="w-36 h-36 rounded-xl "
                                loading="lazy"
                                onMouseMove={(e) =>
                                setTooltip({
                                    text: badge.name,
                                    x: e.clientX,
                                    y: e.clientY,
                                })
                            }
                            onMouseLeave={() => setTooltip(null)}
                            />
                            {tooltip && (
                                <div
                                    className="pointer-events-none fixed z-50 rounded-md bg-black/80 px-3 py-1 text-xs text-white"
                                    style={{
                                        left: tooltip.x + 2,
                                        top: tooltip.y + 2,
                                    }}
                                >
                                    {tooltip.text}
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>

    );
}
