import { LayoutTemplate, Video, PenTool } from 'lucide-react';
import type { Service } from '../types/portfolio';

/** Service offerings — numbered cards with deliverables and meta footer. */
export const services: Service[] = [
{
  id: '01',
  title: 'UI/UX Design',
  tagline: 'Web & mobile interfaces',
  description:
  'Crafting intuitive, user-centric interfaces with a focus on seamless experiences and modern aesthetics — from wireframe to polished prototype.',
  Icon: LayoutTemplate,
  accent: 'cyan',
  deliverables: [
  'Wireframes & user flows',
  'High-fidelity mockups',
  'Interactive prototypes',
  'Design system & handoff'],

  meta: [
  {
    label: 'Avg. timeline',
    value: '2–4 weeks'
  },
  {
    label: 'Tools',
    value: 'Figma · Adobe XD'
  }]

},
{
  id: '02',
  title: 'Graphic Design',
  tagline: 'Brand identity & visuals',
  description:
  'Creating compelling visual identities, marketing materials, and digital assets that effectively communicate your brand messaging across every touchpoint.',
  Icon: PenTool,
  accent: 'violet',
  deliverables: [
  'Logo & brand identity',
  'Posters & flyers',
  'Social media assets',
  'Apparel & merchandise'],

  meta: [
  {
    label: 'Avg. timeline',
    value: '1–2 weeks'
  },
  {
    label: 'Tools',
    value: 'Illustrator · Photoshop'
  }]

},
{
  id: '03',
  title: 'Video Editing',
  tagline: 'Motion & storytelling',
  description:
  'Producing engaging video content with professional pacing, color grading, and motion graphics to tell captivating stories that connect with audiences.',
  Icon: Video,
  accent: 'blue',
  deliverables: [
  'Edit & assembly',
  'Motion graphics & titles',
  'Color grading',
  'Sound design & mix'],

  meta: [
  {
    label: 'Avg. timeline',
    value: '1–3 weeks'
  },
  {
    label: 'Tools',
    value: 'Premiere · After Effects'
  }]

}];