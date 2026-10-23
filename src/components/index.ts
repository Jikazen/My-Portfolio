// ───────────────────────────────────────────────
// Central barrel for all components — grouped by role
// so they're easy to locate and import in one place.
//
// Content lives in `data/`, shared types in `types/`,
// and reusable tokens/variants in `utils/`.
// ───────────────────────────────────────────────

// ── Layout (persistent chrome) ──
export { Navbar } from './Navbar';
export { Footer } from './Footer';

// ── UI / Effects (reusable visuals) ──
export { LoadingScreen } from './LoadingScreen';
export { ParticlesBackground } from './ParticlesBackground';
export { ProjectModal } from './ProjectModal';
export { TikTokIcon } from './ui/TikTokIcon';
export { SupportChat } from './ui/SupportChat';

// ── Page Sections (in render order) ──
export { Hero } from './Hero';
export { About } from './About';
export { Skills } from './Skills';
export { Experiences } from './Experiences';
export { Projects } from './Projects';
export { Achievements } from './Achievements';
export { Services } from './Services';
export { Resume } from './Resume';
export { Contact } from './Contact';