import { Briefcase, GraduationCap, Trophy, Rocket, Users } from 'lucide-react';
import type { AchievementGroup } from '../types/portfolio';

const NEMSU = 'North Eastern Mindanao State University';
const CITE = 'NEMSU · College of Information Technology Education';

/**
 * Certificates, organized into themed groups (newest first inside each).
 * Add a scan to `images` to group several copies of the same award.
 */
export const achievementGroups: AchievementGroup[] = [
{
  id: 'internship',
  title: 'Internship',
  description: 'On-the-Job Training completed in the industry.',
  accent: 'violet',
  Icon: Briefcase,
  items: [
  {
    id: 'infinity-hub-ojt',
    title: 'Certificate of Completion — On-the-Job Trainee',
    detail:
    '324 hours · Multimedia projects, web development and digital content',
    issuer: 'Infinity Hub Digital Marketing Agency · Davao City',
    date: 'June 15 – August 7, 2026',
    images: ["/b9482bb6-822e-4994-ab31-5c8ca47ff75c.jpg"]


  }]

},
{
  id: 'academic',
  title: 'Academic Excellence',
  description: "Four consecutive semesters on the Dean's List.",
  accent: 'cyan',
  Icon: GraduationCap,
  items: [
  {
    id: 'deans-2025-2026-1',
    title: "Dean's Lister",
    detail: '1st Semester, A.Y. 2025–2026 · GPA 1.61429',
    issuer: CITE,
    date: 'March 25, 2026',
    images: ["/d17f856e-880e-4e0f-bc74-25d64688d4fc.jpg"]


  },
  {
    id: 'deans-2024-2025-2',
    title: "Dean's Lister",
    detail: '2nd Semester, A.Y. 2024–2025 · GPA 1.61',
    issuer: CITE,
    date: 'August 13, 2025',
    images: ["/0e4544c4-c32e-4289-b7b9-1f6c13d113f5.jpg"]


  },
  {
    id: 'deans-2024-2025-1',
    title: "Dean's Lister",
    detail: '1st Semester, A.Y. 2024–2025 · GPA 1.66087',
    issuer: CITE,
    date: 'February 17, 2025',
    images: ["/1f0aa2af-8af4-41c6-a406-050433a9426d.jpg"]


  },
  {
    id: 'deans-2023-2024-2',
    title: "Dean's Lister",
    detail: '2nd Semester, A.Y. 2023–2024 · GPA 1.66',
    issuer: CITE,
    date: 'August 20, 2024',
    images: ["/e297b5c0-d9c9-4920-aca6-c58350ab35c0.jpg"]


  }]

},
{
  id: 'competitions',
  title: 'Competitions',
  description: 'Wins earned in campus-wide tournaments.',
  accent: 'yellow',
  Icon: Trophy,
  items: [
  {
    id: 'mlbb-champion',
    title: 'Champion — Mobile Legends: Bang Bang',
    detail: 'CITE Day — Caravel: Unlocking Realms of Innovation',
    issuer: CITE,
    date: 'December 3, 2025',
    images: ["/9a368c05-1981-40e6-868b-1cafbeb42d85.jpg", "/3683a82e-f7a3-4fc4-a173-c171af6b47c2.jpg"]



  }]

},
{
  id: 'programs',
  title: 'Programs & Training',
  description: 'Startup and innovation programs with DOST Caraga.',
  accent: 'blue',
  Icon: Rocket,
  items: [
  {
    id: 'founders-forum',
    title: 'Founders Forum: Navigating the Startup Journey',
    detail: 'Certificate of Participation',
    issuer: `${NEMSU} · DOST Caraga`,
    date: 'August 29, 2026',
    images: ["/db98486a-1505-48a5-85eb-da930a82f76b.jpg"]


  },
  {
    id: 'ignite-incubate',
    title: 'Ignite and Incubate Startup Bootcamp',
    detail: 'Certificate of Completion · 3-day incubation bootcamp',
    issuer: `${NEMSU} · DOST`,
    date: 'December 17–19, 2025',
    images: ["/8460ca28-858b-4848-810d-5757df563fe9.jpg"]


  }]

},
{
  id: 'participation',
  title: 'Campus Participation',
  description: 'Events, sports and department activities.',
  accent: 'violet',
  Icon: Users,
  items: [
  {
    id: 'pathfit-volleyball',
    title: "Men's Volleyball Player",
    detail: 'PathFit Culmination Activity',
    issuer: NEMSU,
    date: 'May 28, 2025',
    images: ["/56c71feb-2f01-4e92-8245-d39957c3b2e9.jpg"]


  },
  {
    id: 'pathfit-4',
    title: 'PATHFIT 4 Culmination',
    detail: 'Certificate of Participation',
    issuer: CITE,
    date: 'May 28, 2025',
    images: ["/854b2a7f-5814-42a8-8704-34578694bd80.jpg"]


  },
  {
    id: 'cite-day-2024',
    title: 'CITE Day: Crescendo 2024',
    detail: 'Certificate of Participation',
    issuer: CITE,
    date: 'November 11, 2024',
    images: ["/a4d3d119-fae6-419a-9e4f-09ecfe4cad8a.jpg"]


  }]

}];


/** Headline numbers above the groups. */
export const achievementStats = [
{ value: '11', label: 'Certificates' },
{ value: '324', label: 'OJT Hours' },
{ value: '4×', label: "Dean's Lister" },
{ value: '1', label: 'Championship' }];