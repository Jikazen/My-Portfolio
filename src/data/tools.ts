import type { Tool } from '../types/portfolio';

export type { Tool };

/** Tool / software logos shown in the Technical Proficiency marquee. */

export const tools: Tool[] = [
{
  name: 'CapCut',
  icon: "/image.png",
  needsLightTile: true
},
{
  name: 'Figma',
  icon: "/Figma-logo.png"
},
{
  name: 'Canva',
  icon: "/canva-icon.png"
},
{
  name: 'Adobe Photoshop',
  icon: "/Adobe_Photoshop_CC_icon.svg.png"
},
{
  name: 'Adobe Illustrator',
  icon: "/Adobe_Illustrator_CC_icon.svg.png"
},
{
  name: 'Adobe Premiere Pro',
  icon: "/Adobe_Premiere_Pro_CC_icon.svg.png"
},
{
  name: 'Postman',
  icon: "/postman.png"
},
{
  name: 'MySQL',
  icon: "/mysql.png",
  needsLightTile: true
},
{
  name: 'VS Code',
  icon: "/visual-studio-code-2019.png"
},
{
  name: 'Python',
  icon: "/python_(1).png"
},
{
  name: 'React',
  icon: "/react_(1).png"
},
{
  name: 'CSS',
  icon: "/css.png"
}];


/** Second marquee row — same set, rotated so the rows never align. */
export const toolsRowTwo: Tool[] = [...tools.slice(6), ...tools.slice(0, 6)];