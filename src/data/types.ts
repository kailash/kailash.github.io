import type { ComponentType } from 'react';

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationBadge {
  name: string;
  imageLink: string;
  credlyLink: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  year?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  location?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}
