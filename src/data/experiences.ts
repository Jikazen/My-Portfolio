import { Camera, PenTool, Users, Video } from 'lucide-react';
import type { ExperienceFolder, ExperiencePhoto } from '../types/portfolio';

export type { ExperienceFolder, ExperiencePhoto };

/**
 * On-the-Job Training gallery.
 *
 * Photos are grouped into folders — Graphic Artist, Video Editor,
 * Video Shoot and Team Moments — so each body of work reads on its own.
 */

export const experienceIntro = {
  role: 'Graphic Artist & Video Editor',
  company: 'On-the-Job Training Journey at Infinity Hub Digital Marketing',
  period: '2026',
  summary:
  'My On-the-Job Training journey at Infinity Hub Digital Marketing helped me grow as a Graphic Artist and Video Editor by enhancing my skills in creating professional designs, promotional videos, visual storytelling, brand communication, and creative content production while developing my discipline, teamwork, adaptability, and understanding of how effective visuals connect with audiences.',
  highlights: [
  'Produced professional design and campaign materials',
  'Edited promotional videos and visual storytelling content',
  'Handled camera and lighting on video shoots',
  'Built discipline, teamwork and adaptability on a live team']

};

export const experienceFolders: ExperienceFolder[] = [
{
  id: 'graphic-artist',
  name: 'Graphic Artist',
  blurb: 'Campaign artwork, key visuals and brand collateral',
  Icon: PenTool,
  accent: {
    text: 'text-cyan-300',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    ring: 'group-hover:border-cyan-500/40',
    glow: '0 20px 50px -12px rgba(0,0,0,0.7), 0 0 28px rgba(6,182,212,0.18)'
  },
  photos: [
  {
    src: "/IMG_20260616_095315.jpg",
    caption: 'Laying out campaign artwork in Photoshop'
  },
  {
    src: "/IMG_20260713_150641.jpg",
    caption: 'Building a smart-marketing key visual'
  },
  {
    src: "/IMG_20260626_160824.jpg",
    caption: 'NCLEX review campaign artwork'
  },
  {
    src: "/IMG_20260703_173437.jpg",
    caption: 'Reviewing ID card layouts with the team'
  },
  {
    src: "/IMG_20260702_171912.jpg",
    caption: 'Art direction review with a teammate'
  },
  {
    src: "/215b6dee-5dc1-4c22-96f3-ef5fce8d8944.jpg",
    caption: 'Planning the content calendar with the design team'
  }]

},
{
  id: 'video-editor',
  name: 'Video Editor',
  blurb: 'Promotional reels, cuts and post-production polish',
  Icon: Video,
  accent: {
    text: 'text-violet-300',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    ring: 'group-hover:border-violet-500/40',
    glow: '0 20px 50px -12px rgba(0,0,0,0.7), 0 0 28px rgba(139,92,246,0.18)'
  },
  photos: [
  {
    src: "/IMG_20260624_155623.jpg",
    caption: 'Cutting a promotional reel in CapCut'
  },
  {
    src: "/IMG_20260716_180107.jpg",
    caption: 'Timeline work on a brand reel'
  },
  {
    src: "/IMG_20260720_175628.jpg",
    caption: 'Late-session edit pass'
  },
  {
    src: "/IMG_20260727_172930.jpg",
    caption: 'Refining assets at the editing desk'
  },
  {
    src: "/IMG_20260804_175907.jpg",
    caption: 'Color and caption polish before export'
  },
  {
    src: "/IMG_20260618_180248.jpg",
    caption: 'Trimming clips for a client reel'
  },
  {
    src: "/IMG_20260623_095321.jpg",
    caption: 'Website promo edit in progress'
  },
  {
    src: "/47285e7d-3c63-4622-b833-714ea0e13309.jpg",
    caption: 'Editing a talking-head reel in CapCut'
  },
  {
    src: "/f0fd04e6-7bd4-4cd9-9871-8cd52ec0ecb9.jpg",
    caption: 'Organizing footage and timeline cuts'
  },
  {
    src: "/af0bf367-6452-415c-a5d2-48d947ef9b69.jpg",
    caption: 'Cutting an educational reel'
  },
  {
    src: "/a4cbae3f-6aa2-4a2f-bb9c-a96677e452ee.jpg",
    caption: 'Editing a pre-production & strategy reel'
  },
  {
    src: "/4539a4c1-066e-41fe-85c0-cd442f3d206a.jpg",
    caption: 'Syncing clips and audio on the timeline'
  },
  {
    src: "/8507e439-c5ad-4541-a958-76db225ed764.jpg",
    caption: 'Layering captions and graphics in CapCut'
  },
  {
    src: "/5af958a2-91b7-4143-baa3-733dd1c3fd84.jpg",
    caption: 'Editing a product reel at the studio workstation'
  },
  {
    src: "/IMG_20260619_164034.jpg",
    caption: 'Cutting footage alongside the creative team'
  },
  {
    src: "/IMG_20260617_144545.jpg",
    caption: 'Deep-focus edit session'
  },
  {
    src: "/ca416f16-49da-4c38-87df-21f157c3c8fa.jpg",
    caption: 'Editing at the laptop station'
  },
  {
    src: "/24a75100-ee86-412d-9bdd-8c916ca3f387.jpg",
    caption: 'Building a reel timeline in CapCut'
  }]

},
{
  id: 'video-shoot',
  name: 'Video Shoot',
  blurb: 'On-set production — camera, lighting and crew work',
  Icon: Camera,
  accent: {
    text: 'text-blue-300',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    ring: 'group-hover:border-blue-500/40',
    glow: '0 20px 50px -12px rgba(0,0,0,0.7), 0 0 28px rgba(59,130,246,0.18)'
  },
  photos: [
  {
    src: "/73c1b93f-e7f8-4bfa-92bd-8a8b2c9bfad7.jpg",
    caption: 'Setting up softbox lighting on set'
  },
  {
    src: "/51716fd7-a554-4b40-93be-3f14ec2a739f.jpg",
    caption: 'Framing a shot on the tripod'
  },
  {
    src: "/46e36e3d-af65-4ecc-bd40-b65c8b8ebdd8.jpg",
    caption: 'Rigging the camera stand before a take'
  },
  {
    src: "/455ddddb-d23c-4a90-b55e-d2be3629bfc8.jpg",
    caption: 'Coordinating with the production crew'
  },
  {
    src: "/IMG_20260717_111017.jpg",
    caption: 'On location for a client video shoot'
  },
  {
    src: "/3fc66f03-7420-440f-9eff-83ff0303395b.jpg",
    caption: 'Operating the DJI Ronin gimbal on set'
  },
  {
    src: "/a5334a1c-bdee-4012-891a-1deaeca8d6cd.jpg",
    caption: 'Balancing the gimbal rig before a take'
  },
  {
    src: "/321a2b52-7236-466e-ae1f-0e89be59a3d5.jpg",
    caption: 'Behind the camera in the studio'
  },
  {
    src: "/76752f03-7863-42b9-8c1e-dd72eb97342a.jpg",
    caption: 'Rigging an LED panel with the crew'
  }]

},
{
  id: 'team-moments',
  name: 'Team Moments',
  blurb: 'Group pictures with the Infinity Hub family',
  Icon: Users,
  wide: true,
  accent: {
    text: 'text-indigo-300',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    ring: 'group-hover:border-indigo-500/40',
    glow: '0 20px 50px -12px rgba(0,0,0,0.7), 0 0 28px rgba(99,102,241,0.18)'
  },
  photos: [
  {
    src: "/471d99b1-991e-4f0f-9913-b4aa853ddc51.jpg",
    caption: 'Receiving OJT completion certificates with the team'
  },
  {
    src: "/2ca289e7-439c-4ae6-8ef8-bc0ff86731cb.jpg",
    caption: 'Group photo with the Infinity Hub team'
  }]

}];