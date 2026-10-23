import { Instagram, Facebook, Github, Mail, Phone, MapPin } from 'lucide-react';
import { TikTokIcon } from '../components/ui/TikTokIcon';
import type { ContactDetail, SocialLink } from '../types/portfolio';

/**
 * Single source of truth for identity, contact details and hosted assets.
 * Update values here and they propagate across navbar, footer, resume, contact.
 */
export const SITE = {
  name: "J'karl Vince C. Meniano",
  firstName: "J'karl",
  role:
  'Graphic Designer · UI/UX Designer · Video Editor · Web & App Developer',
  tagline: 'Creative Designer & Visual Storyteller',
  email: 'jkarlvincemeniano@gmail.com',
  phone: '+639452216287',
  location: 'Philippines',
  description:
  'Specializing in UI/UX design, graphic design, video editing, and web & app development to create visually compelling experiences that connect, inspire, and engage audiences.'
} as const;

/** Hosted image assets (CDN URLs). */
export const ASSETS = {
  logo: "/JC_LOGO.png",
  aboutPhoto: "/Untitled_design.png",

  resumeAvatar: "/2x2.png",

  footerAvatar: "/2x2-1.png",

  resumeFile: "/Personal_Resume1.png",

  resumeFileName: 'Jkarl-Vince-C-Meniano-Resume.png'
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
{
  Icon: Instagram,
  href: 'https://www.instagram.com/jikaru_10/',
  label: 'Instagram'
},
{
  Icon: Facebook,
  href: 'https://www.facebook.com/JCGRAPHIXANDCUTS/',
  label: 'Facebook'
},
{
  Icon: TikTokIcon,
  href: 'https://www.tiktok.com/@jikaru10',
  label: 'TikTok'
},
{
  Icon: Github,
  href: 'https://github.com/Jikazen',
  label: 'GitHub'
}];


export const CONTACT_DETAILS: ContactDetail[] = [
{
  Icon: Mail,
  label: 'Email',
  value: SITE.email,
  href: `mailto:${SITE.email}`
},
{
  Icon: Phone,
  label: 'Phone',
  value: SITE.phone,
  href: `tel:${SITE.phone}`
},
{
  Icon: MapPin,
  label: 'Location',
  value: SITE.location,
  href: '#'
}];