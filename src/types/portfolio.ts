import type { LucideIcon } from 'lucide-react';

/** Accent colors used across the neon card system. */
export type AccentKey = 'cyan' | 'violet' | 'blue' | 'emerald' | 'yellow';

/** A single Tailwind/CSS token bundle for one accent color. */
export type AccentTokens = {
  text: string;
  iconText?: string;
  border: string;
  bg: string;
  fromTo?: string;
  barFromTo?: string;
  glow: string;
  rgb: string;
};

// ── Navigation ──
export type NavLink = {
  name: string;
  href: string;
};

// ── Hero ──
export type HeroRole = {
  Icon: LucideIcon;
  label: string;
};

export type HeroSlide = {
  title: string;
  subtitle: string;
  from: string;
  to: string;
  Icon: LucideIcon;
};

// ── Skills ──
export type Skill = {
  name: string;
  pct: number;
};

export type SkillCategory = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  accent: Extract<AccentKey, 'cyan' | 'violet' | 'blue' | 'emerald'>;
  level: number;
  skills: Skill[];
  tools: string[];
};

/** A tool / software logo in the Technical Proficiency marquee. */
export type Tool = {
  name: string;
  icon: string;
  /** Logos that are dark-on-transparent need a light tile behind them. */
  needsLightTile?: boolean;
};

// ── Experiences (OJT gallery) ──
export type ExperiencePhoto = {
  src: string;
  caption: string;
};

export type ExperienceFolder = {
  id: string;
  name: string;
  blurb: string;
  Icon: LucideIcon;
  /** Show photos larger, two per row (used for group pictures). */
  wide?: boolean;
  /** Static Tailwind tokens — never build these strings dynamically. */
  accent: {
    text: string;
    border: string;
    bg: string;
    ring: string;
    glow: string;
  };
  photos: ExperiencePhoto[];
};

// ── Projects ──
export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  /** Every size/variant of the same design, shown together as one project. */
  gallery?: string[];
  description: string;
  technologies: string[];
};

// ── Achievements ──
export type AchievementAccent = Extract<
  AccentKey,
  'cyan' | 'violet' | 'blue' | 'yellow'>;


/** One certificate (or a set of copies of the same award). */
export type Achievement = {
  id: string;
  title: string;
  /** Short line describing what it was awarded for. */
  detail: string;
  issuer: string;
  date: string;
  /** Every scan of this award — shown together as one card. */
  images: string[];
};

/** A themed group of certificates, rendered as its own block. */
export type AchievementGroup = {
  id: string;
  title: string;
  description: string;
  accent: AchievementAccent;
  Icon: LucideIcon;
  items: Achievement[];
};

/** The certificate currently open in the Achievements lightbox. */
export type ActiveCertificate = {
  item: Achievement;
  accent: AchievementAccent;
};

// ── Services ──
export type MetaItem = {
  label: string;
  value: string;
};

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  accent: Extract<AccentKey, 'cyan' | 'violet' | 'blue'>;
  deliverables: string[];
  meta: MetaItem[];
};

// ── Resume ──
export type TimelineEntry = {
  year: string;
  title: string;
  place: string;
  detail: string;
  badge: string;
};

export type ResumeMetaItem = {
  Icon: LucideIcon;
  label: string;
  value: string;
};

// ── Contact / social ──
export type SocialLink = {
  Icon: LucideIcon | ((props: {size?: number;}) => JSX.Element);
  href: string;
  label: string;
};

export type ContactDetail = {
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

// ── Support chatbot ──
export type QuickReply = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  /** Ids surfaced as follow-up suggestions after this answer. */
  followUps?: string[];
};