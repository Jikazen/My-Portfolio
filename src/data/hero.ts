import { Sparkles, Palette, Layout, Video, Code2 } from 'lucide-react';
import type { HeroRole, HeroSlide } from '../types/portfolio';

/** Discipline chips shown under the hero tagline. */
export const heroRoles: HeroRole[] = [
{
  Icon: Palette,
  label: 'Graphic Design'
},
{
  Icon: Layout,
  label: 'UI/UX Design'
},
{
  Icon: Video,
  label: 'Video Editing'
},
{
  Icon: Code2,
  label: 'Web & App Development'
}];


/** Auto-advancing hero slideshow — one slide per work category. */
export const heroSlides: HeroSlide[] = [
{
  title: 'Apparel & T-Shirt Design',
  subtitle: 'CITE · CAS · CBM Department designs',
  from: '#06b6d4',
  to: '#3b82f6',
  Icon: Palette
},
{
  title: 'UI/UX Mobile Concepts',
  subtitle: 'Clean, modern interface design',
  from: '#8b5cf6',
  to: '#ec4899',
  Icon: Layout
},
{
  title: 'Poster & Social Media',
  subtitle: 'Bold visual storytelling',
  from: '#3b82f6',
  to: '#06b6d4',
  Icon: Sparkles
},
{
  title: 'Video Editing & Motion',
  subtitle: 'Cinematic edits & motion graphics',
  from: '#8b5cf6',
  to: '#3b82f6',
  Icon: Video
}];