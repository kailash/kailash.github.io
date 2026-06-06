import type { Project } from './types';

// TODO: Update GitHub/demo URLs with real links. Add more projects.
export const projects: Project[] = [
    {
        title: "Authorization Platform",
        description: "Designed and implemented a Relationship-Based Access Control (ReBAC) system using OpenFGA and Kong API Gateway. Replaced a legacy ACL model, enabling fine-grained, graph-based permission evaluation across 15+ microservices with a dramatically reduced policy footprint.",
        stack: ["Java", "Spring Boot", "OpenFGA", "Kong"],
        // github: "https://github.com/kailash-adhikari/authz-platform", // TODO: add real URL
        year: "2023",
    },
    {
        title: "RAG Chatbot",
        description: "Built an internal documentation assistant using Retrieval-Augmented Generation. Integrated Ollama for local LLM inference and LangChain for the orchestration pipeline, enabling engineers to query internal wikis and runbooks in natural language with high accuracy.",
        stack: ["Python", "LangChain", "Ollama", "FAISS"],
        // github: "https://github.com/kailash-adhikari/rag-chatbot", // TODO: add real URL
        year: "2024",
    },
];
