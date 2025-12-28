interface TimelineCurveProps {
  itemCount: number;
}

export default function TimelineCurve({ itemCount }: TimelineCurveProps) {
  if (itemCount === 0) return null;

  // Create a path that curves left-right alternating
  // Using the page coordinates, not SVG viewBox
  let pathD = "M 0 0";
  
  for (let i = 0; i < itemCount; i++) {
    const yStart = i * 120; // spacing between items
    const yEnd = (i + 1) * 120;
    const yMid = yStart + 60;
    
    if (i % 2 === 0) {
      // Curve to the right
      pathD += ` C 80 ${yMid} 100 ${yMid} 80 ${yEnd}`;
    } else {
      // Curve to the left
      pathD += ` C -80 ${yMid} -100 ${yMid} -80 ${yEnd}`;
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox={`-150 0 300 ${itemCount * 120}`}
      className="absolute left-1/2 top-0 h-full pointer-events-none transform -translate-x-1/2"
      style={{ 
        width: "400px",
        maxWidth: "90vw",
        overflow: "visible"
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(270, 100%, 55.5%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(259, 89.5%, 58%)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke="url(#timelineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Dots on the curve */}
      {Array.from({ length: itemCount }).map((_, i) => {
        const y = i * 120;
        const x = i % 2 === 0 ? 80 : -80;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="7"
            fill="white"
            stroke="hsl(270, 100%, 55.5%)"
            strokeWidth="3"
            className="drop-shadow-lg"
          />
        );
      })}
    </svg>
  );
}
