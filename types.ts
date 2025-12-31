import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  iframeSrc?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}