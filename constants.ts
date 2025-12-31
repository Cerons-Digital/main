import { Layout, Monitor, ShoppingBag, RefreshCw, BarChart, Smartphone } from 'lucide-react';
import { Service, NavItem, ProcessStep, Project } from './types';

export const PHONE_NUMBER = "+94783077490";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER.replace('+', '')}`;
export const EMAIL_ADDRESS = "ceronsdigital@gmail.com";
export const INSTAGRAM_LINK = "https://www.instagram.com/cerons_digital";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Website Design & Dev',
    description: 'Custom, high-performance websites tailored to your brand identity.',
    icon: Monitor,
  },
  {
    id: '2',
    title: 'Business Websites',
    description: 'Professional platforms that build trust and showcase your services.',
    icon: Layout,
  },
  {
    id: '3',
    title: 'Landing Pages',
    description: 'High-converting single pages designed specifically for marketing campaigns.',
    icon: BarChart,
  },
  {
    id: '4',
    title: 'Website Redesign',
    description: 'Modernize your outdated site to improve speed, aesthetics, and conversions.',
    icon: RefreshCw,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We dive deep into your business goals, target audience, and competitors.',
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'We create a modern UI and develop a responsive, fast-loading website.',
  },
  {
    number: '03',
    title: 'Review & Refine',
    description: 'We collaborate with you to tweak the details until it is perfect.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We go live and provide ongoing support to keep your business running smoothly.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Visa Agency',
    category: 'Business Website',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    iframeSrc: 'https://sontrala.netlify.app/',
  },
  {
    id: '2',
    title: 'Travel Agency',
    category: 'Travel services',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    iframeSrc: 'https://nomad-travelz.netlify.app/',
  },
  {
    id: '3',
    title: 'Restaurant',
    category: 'Food Service',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    iframeSrc: 'https://liua-luna.netlify.app',
  },
  {
    id: '4',
    title: 'Hotels',
    category: 'Hospitality Service',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    iframeSrc: 'https://website-hotel.github.io/laya/',
  },
  {
    id: '5',
    title: 'Gym',
    category: 'Fitness',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    iframeSrc: 'https://website-hotel.github.io/gym/',
  },
  {
    id: '6',
    title: 'Massage Clinics',
    category: 'Health services',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    iframeSrc: 'https://website-hotel.github.io/crystal-spa/',
  },
];