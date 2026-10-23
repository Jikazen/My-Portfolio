import type { AccentTokens } from '../types/portfolio';

/**
 * Accent token bundles per section.
 *
 * These are kept as explicit, static Tailwind class strings (never built by
 * string interpolation) so Tailwind's JIT can always detect them. Each section
 * has its own map because the gradient stops differ intentionally.
 */

/** Skills — includes `barFromTo` for the animated proficiency bars. */
export const skillAccents: Record<
  'cyan' | 'violet' | 'blue' | 'emerald',
  AccentTokens> =
{
  cyan: {
    text: 'text-cyan-300',
    iconText: 'text-cyan-400',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    fromTo: 'from-cyan-400 to-cyan-600',
    barFromTo: 'from-cyan-400 via-cyan-500 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.5)',
    rgb: '6, 182, 212'
  },
  violet: {
    text: 'text-violet-300',
    iconText: 'text-violet-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/10',
    fromTo: 'from-violet-400 to-violet-600',
    barFromTo: 'from-violet-400 via-violet-500 to-fuchsia-500',
    glow: 'rgba(139, 92, 246, 0.5)',
    rgb: '139, 92, 246'
  },
  blue: {
    text: 'text-blue-300',
    iconText: 'text-blue-400',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/10',
    fromTo: 'from-blue-400 to-blue-600',
    barFromTo: 'from-blue-400 via-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.5)',
    rgb: '59, 130, 246'
  },
  emerald: {
    text: 'text-emerald-300',
    iconText: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    fromTo: 'from-emerald-400 to-emerald-600',
    barFromTo: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'rgba(16, 185, 129, 0.5)',
    rgb: '16, 185, 129'
  }
};

/** Services — cross-hue gradients for the card sweep. */
export const serviceAccents: Record<'cyan' | 'violet' | 'blue', AccentTokens> = {
  cyan: {
    text: 'text-cyan-300',
    iconText: 'text-cyan-400',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    fromTo: 'from-cyan-400 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.5)',
    rgb: '6, 182, 212'
  },
  violet: {
    text: 'text-violet-300',
    iconText: 'text-violet-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/10',
    fromTo: 'from-violet-400 to-fuchsia-500',
    glow: 'rgba(139, 92, 246, 0.5)',
    rgb: '139, 92, 246'
  },
  blue: {
    text: 'text-blue-300',
    iconText: 'text-blue-400',
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/10',
    fromTo: 'from-blue-400 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.5)',
    rgb: '59, 130, 246'
  }
};

/** Achievements — adds a `yellow` accent for the hackathon badge. */
export const achievementAccents: Record<
  'cyan' | 'violet' | 'blue' | 'yellow',
  AccentTokens> =
{
  cyan: {
    border: 'border-cyan-500/40',
    text: 'text-cyan-300',
    bg: 'bg-cyan-500/10',
    glow: 'rgba(6, 182, 212, 0.5)',
    rgb: '6, 182, 212',
    fromTo: 'from-cyan-400 to-blue-500'
  },
  violet: {
    border: 'border-violet-500/40',
    text: 'text-violet-300',
    bg: 'bg-violet-500/10',
    glow: 'rgba(139, 92, 246, 0.5)',
    rgb: '139, 92, 246',
    fromTo: 'from-violet-400 to-fuchsia-500'
  },
  blue: {
    border: 'border-blue-500/40',
    text: 'text-blue-300',
    bg: 'bg-blue-500/10',
    glow: 'rgba(59, 130, 246, 0.5)',
    rgb: '59, 130, 246',
    fromTo: 'from-blue-400 to-cyan-500'
  },
  yellow: {
    border: 'border-yellow-500/40',
    text: 'text-yellow-300',
    bg: 'bg-yellow-500/10',
    glow: 'rgba(251, 191, 36, 0.5)',
    rgb: '251, 191, 36',
    fromTo: 'from-yellow-400 to-amber-500'
  }
};