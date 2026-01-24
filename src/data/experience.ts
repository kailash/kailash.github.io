interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: "exp1",
        role: "Senior Developer",
        company: "Tech Company A",
        period: "2022 - Present",
        description: "Led development of scalable applications using modern tech stack. Mentored junior developers and contributed to architectural decisions.",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
        id: "exp2",
        role: "Full Stack Developer",
        company: "Tech Company B",
        period: "2020 - 2022",
        description: "Built end-to-end features for web applications. Implemented backend APIs and optimized database queries for performance.",
        skills: ["React", "Python", "PostgreSQL", "Docker"],
    },
    {
        id: "exp3",
        role: "Junior Developer",
        company: "Tech Company C",
        period: "2018 - 2020",
        description: "Started career learning full-stack development. Worked on frontend features and assisted with backend integration.",
        skills: ["JavaScript", "HTML/CSS", "Vue.js", "MySQL"],
    },
];