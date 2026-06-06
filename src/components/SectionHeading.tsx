interface SectionHeadingProps {
    eyebrow: string;
    title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
    return (
        <>
            <p className="text-[11px] font-semibold text-primary tracking-widest uppercase mb-3">
                {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
            <div className="w-10 h-0.5 bg-primary/60 rounded-full mt-3 mb-10" />
        </>
    );
}
