interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: "exp1",
        title: "Senior Developer",
        company: "Tech Company A",
        period: "2022 - Present",
        description: ".",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
        id: "exp2",
        title: "Full Stack Developer",
        company: "Tech Company B",
        period: "2020 - 2022",
        description: ".",
        skills: ["React", "Python", "PostgreSQL", "Docker"],
    },
    {
        id: "exp3",
        title: "Junior Developer",
        company: "Tech Company C",
        period: "2018 - 2020",
        description: ".",
        skills: ["JavaScript", "HTML/CSS", "Vue.js", "MySQL"],
    },
];