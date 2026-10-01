export interface Skill {
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface ChangelogEntry {
  dateRange: string;
  role: string;
  description: string;
}

export interface ToolkitItem {
  title: string;
  description: string;
}

export interface ToolkitCategory {
  category: string;
  items: ToolkitItem[];
}

export interface Project {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Article {
  slug: string;
  date: string;
  title: string;
  description: string;
  url: string;
}