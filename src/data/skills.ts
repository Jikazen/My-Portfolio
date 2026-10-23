import { PenTool, Layout, Video, Wrench } from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

/** Technical proficiency cards — each with a radial level and animated bars. */
export const skillCategories: SkillCategory[] = [
{
  title: 'Graphic Design',
  subtitle: 'Visual identity & print',
  Icon: PenTool,
  accent: 'cyan',
  level: 90,
  skills: [
  {
    name: 'Branding & Identity',
    pct: 90
  },
  {
    name: 'Typography',
    pct: 80
  },
  {
    name: 'Poster, Flyer, Brochure & Banner Design',
    pct: 85
  },
  {
    name: 'T-Shirt Design',
    pct: 95
  }],

  tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva']
},
{
  title: 'UI/UX Design',
  subtitle: 'Web & mobile interfaces',
  Icon: Layout,
  accent: 'violet',
  level: 80,
  skills: [
  {
    name: 'Figma',
    pct: 80
  },
  {
    name: 'Wireframing',
    pct: 75
  },
  {
    name: 'Prototyping',
    pct: 85
  }],

  tools: ['Figma']
},
{
  title: 'Video Editing',
  subtitle: 'Motion & storytelling',
  Icon: Video,
  accent: 'blue',
  level: 86,
  skills: [
  {
    name: 'Cinematic Videos',
    pct: 90
  },
  {
    name: 'Promotional Videos',
    pct: 82
  },
  {
    name: 'Trailer Editing',
    pct: 84
  },
  {
    name: 'Color Grading',
    pct: 80
  }],

  tools: ['CapCut', 'Adobe Premiere Pro']
},
{
  title: 'Software & Tools',
  subtitle: 'Daily-driver toolkit',
  Icon: Wrench,
  accent: 'emerald',
  level: 88,
  skills: [
  {
    name: 'Adobe Photoshop',
    pct: 95
  },
  {
    name: 'Adobe Illustrator',
    pct: 85
  },
  {
    name: 'Canva',
    pct: 90
  },
  {
    name: 'Figma',
    pct: 85
  },
  {
    name: 'Adobe Premiere Pro',
    pct: 75
  },
  {
    name: 'CapCut',
    pct: 90
  }],

  tools: [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Canva',
  'Figma',
  'Adobe Premiere Pro',
  'CapCut']

}];