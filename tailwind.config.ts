import type { Config } from "tailwindcss";


export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                accent: "#2563eb", // subtle Google-ish blue
                muted: "#6b7280",
                border: "#e5e7eb",
            },
        },
    },
    plugins: [],
} satisfies Config;