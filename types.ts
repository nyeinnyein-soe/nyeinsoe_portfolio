export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string[];
}