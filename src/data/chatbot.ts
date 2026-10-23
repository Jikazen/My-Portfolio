/**
 * Canned script for the Jikazen AI Support assistant.
 *
 * Each quick reply maps to a prepared answer plus optional follow-up ids,
 * so a conversation can branch instead of dead-ending. Free-text messages
 * are matched against `keywords` before falling back to `fallbackAnswer`.
 */
import type { QuickReply } from '../types/portfolio';

export type { QuickReply };

export const chatbotGreeting =
"Hey! How can I help you today? I'm Jikazen AI — J'karl's portfolio assistant. Ask me anything, or tap a question below to get started.";

export const fallbackAnswer =
"I'm not sure about that one yet — but J'karl would love to answer it directly. Try one of the suggested questions, or head to the Contact section to send him a message.";

export const quickReplies: QuickReply[] = [
{
  id: 'about',
  question: 'Who are you?',
  answer:
  "I'm J'karl Vince C. Meniano — a BSCS student from the Philippines working as a Graphic Designer, UI/UX Designer, Video Editor and Web & App Developer. I've delivered 50+ projects, from campus apparel and campaign posters to app concepts and promotional reels, and I recently completed my On-the-Job Training at Infinity Hub Digital Marketing.",
  keywords: ['who', 'about', 'yourself', 'name', 'jkarl', 'jikazen'],
  followUps: ['services', 'tools', 'hire']
},
{
  id: 'services',
  question: 'What services do you offer?',
  answer:
  'Graphic design, UI/UX design, video editing, and web & app development — from brand collateral and posters to app concepts and promotional reels.',
  keywords: ['service', 'offer', 'do you do', 'work with', 'help'],
  followUps: ['tools', 'projects', 'hire']
},
{
  id: 'projects',
  question: 'Can I see your projects?',
  answer:
  'Absolutely. Featured Projects has apparel design, posters, app concepts and video reels — and Experiences shows photos from my on-the-job training.',
  keywords: ['project', 'work', 'portfolio', 'sample', 'see'],
  followUps: ['services', 'hire']
},
{
  id: 'tools',
  question: 'What tools do you use?',
  answer:
  'Photoshop, Illustrator, Canva and Figma for design; CapCut and Premiere Pro for video; React, Python, MySQL and VS Code for development.',
  keywords: ['tool', 'software', 'app', 'use', 'figma', 'adobe', 'capcut'],
  followUps: ['projects', 'services']
},
{
  id: 'hire',
  question: 'Are you available for projects?',
  answer:
  "Yes — I'm open for freelance projects and creative collaborations in 2026. Use the Contact form below, or email jkarlvincemeniano@gmail.com directly.",
  keywords: [
  'hire',
  'available',
  'freelance',
  'rate',
  'price',
  'contact',
  'email'],

  followUps: ['about', 'projects']
}];


/** Simple keyword match for free-text messages. */
export function matchReply(input: string): QuickReply | null {
  const text = input.toLowerCase();
  return (
    quickReplies.find((reply) =>
    reply.keywords.some((keyword) => text.includes(keyword))
    ) ?? null);

}