import type { ExperienceItem } from './types';

// TODO: Replace placeholder company names and locations with real data
export const experiences: ExperienceItem[] = [
    {
        id: "exp1",
        role: "Senior Software Engineer",
        company: "Tech Company A", // TODO: real company name
        location: "Remote",        // TODO: city or Remote
        period: "2022 - Present",
        description: "Led development of scalable applications using modern tech stack. Mentored junior developers and contributed to architectural decisions.",
        skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
        id: "exp2",
        role: "Full Stack Developer",
        company: "Tech Company B", // TODO: real company name
        location: "Remote",
        period: "2020 - 2022",
        description: "Built end-to-end features for web applications. Implemented backend APIs and optimized database queries for performance.",
        skills: ["React", "Python", "PostgreSQL", "Docker"],
    },
    {
        id: "exp3",
        role: "Software Engineer",
        company: "Tech Company C", // TODO: real company name
        location: "On-site",
        period: "2018 - 2020",
        description: "Developed full-stack features across a large-scale web platform. Contributed to frontend architecture and assisted with backend integration.",
        skills: ["JavaScript", "HTML/CSS", "Vue.js", "MySQL"],
    },
    {
        id: "exp4",
        role: "Frontend Developer",
        company: "Tech Company D", // TODO: real company name
        location: "On-site",
        period: "2016 - 2018",
        description: "Developed responsive user interfaces and improved web application performance. Collaborated with design and backend teams to deliver quality features.",
        skills: ["React", "JavaScript", "CSS", "Webpack"],
    },
    {
        id: "exp5",
        role: "Junior Developer",
        company: "Tech Company E", // TODO: real company name
        location: "On-site",
        period: "2014 - 2016",
        description: "Worked on web development projects and learned industry best practices. Implemented bug fixes and new features under senior developer guidance.",
        skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
];
