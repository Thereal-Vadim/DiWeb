export type ViewState = 'HOME' | 'PROJECTS' | 'ABOUT';

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  widthClass: string; // Tailwind class for grid span
}

export interface ClientCategory {
  title: string;
  clients: string[];
}
