export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: number; // percentage (e.g. 95)
  glowColor: string; // e.g. "rgba(212, 175, 55, 0.4)"
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  stats: { label: string; value: string }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  companyOrRole: string;
  description: string;
  tech?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
}
