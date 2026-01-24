export default function HeroBackground() {
    return (
        <svg
            width="100%"
            height="280"
            viewBox="0 0 1400 280"
            preserveAspectRatio="xMidYMid slice"
            style={{ display: "block" }}
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
                </linearGradient>
            </defs>

            <rect width="1400" height="280" fill="#F9FAFB" />

            <circle cx="100" cy="50" r="60" fill="url(#grad1)" opacity="0.7" />
            <circle cx="1300" cy="80" r="50" fill="url(#grad2)" opacity="0.7" />
            <rect
                x="500"
                y="50"
                width="120"
                height="120"
                fill="url(#grad1)"
                opacity="0.5"
                rx="15"
                transform="rotate(25 560 110)"
            />
            <polygon
                points="1100,150 1180,200 1020,200"
                fill="url(#grad2)"
                opacity="0.6"
            />
            <circle cx="150" cy="220" r="40" fill="url(#grad1)" opacity="0.4" />

            <line
                x1="50"
                y1="140"
                x2="300"
                y2="140"
                stroke="#9333EA"
                strokeWidth="4"
                opacity="0.3"
            />
            <line
                x1="1000"
                y1="200"
                x2="1350"
                y2="200"
                stroke="#2563EB"
                strokeWidth="4"
                opacity="0.3"
            />

            <circle cx="1350" cy="40" r="8" fill="#A855F7" opacity="0.8" />
            <circle cx="20" cy="240" r="8" fill="#2563EB" opacity="0.8" />
            <circle cx="700" cy="260" r="6" fill="#EC4899" opacity="0.6" />
        </svg>
    );
}
