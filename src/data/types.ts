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
  stack: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: ComponentType;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter';
  bgColor: string;
  hoverColor: string;
}
