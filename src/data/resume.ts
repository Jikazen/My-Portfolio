import { MapPin, Calendar, Briefcase } from 'lucide-react';
import type { ResumeMetaItem, TimelineEntry } from '../types/portfolio';

export const education: TimelineEntry[] = [
{
  year: '2022 — Present',
  title: 'Bachelor of Science in Computer Science',
  place: 'University · CITE Department',
  detail:
  'BSCS Student specializing in design & digital media. Consistent academic standing.',
  badge: 'Active'
},
{
  year: '2018 — 2022',
  title: 'Senior High School — STEM',
  place: 'Academic Honors Graduate',
  detail:
  'Top performer with multiple inter-school creative competitions won.',
  badge: 'Graduated'
}];


export const experience: TimelineEntry[] = [
{
  year: '2026',
  title: 'Bantay Nanay Care App',
  place: 'Maternal Health · Capstone Project',
  detail:
  'A maternal app focused on pregnancy care — guiding expectant mothers through checkups, reminders and wellness tracking.',
  badge: 'Completed'
},
{
  year: '2024 — Present',
  title: 'Free lance Graphic Designer and Video Editor',
  place: 'Multiple Campus Departments',
  detail:
  'Designed shirts, posters and social assets for CITE, CAS & CBM events.',
  badge: 'Active'
},
{
  year: '2023 — 2024',
  title: 'UI/UX Designer (Org Projects)',
  place: 'Student Council & Clubs',
  detail:
  'Led visual design for digital campaigns and event identity systems.',
  badge: 'Completed'
},
{
  year: '2023',
  title: 'Video Editor',
  place: 'University Events Team',
  detail: 'Edited promotional reels, recap videos and motion graphic intros.',
  badge: 'Completed'
}];


export const highlights: string[] = [
'50+ design projects delivered across campus departments',
'Featured designer in 3 major campus-wide design campaigns',
'Proficient in Figma, Adobe Creative Suite, DaVinci Resolve',
'Open for freelance projects and creative collaborations'];


export const resumeMeta: ResumeMetaItem[] = [
{
  Icon: MapPin,
  label: 'Based in',
  value: 'Philippines'
},
{
  Icon: Calendar,
  label: 'Open for',
  value: 'Projects 2026'
},
{
  Icon: Briefcase,
  label: 'Focus',
  value: 'Design & Media'
}];