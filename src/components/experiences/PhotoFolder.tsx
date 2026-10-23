import React from 'react';
import { motion } from 'framer-motion';
import { Images, Maximize2 } from 'lucide-react';
import { fadeUp } from '../../utils/motion';
import type { ExperienceFolder, ExperiencePhoto } from '../../types/portfolio';

type PhotoFolderProps = {
  folder: ExperienceFolder;
  onSelect: (photo: ExperiencePhoto) => void;
};

/** One labelled "folder" of OJT photos (header + animated photo grid). */
export function PhotoFolder({ folder, onSelect }: PhotoFolderProps) {
  const { Icon, accent } = folder;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}>
      
      {/* Folder header */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <span
          className={`w-11 h-11 shrink-0 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center ${accent.text}`}>
          
          <Icon size={20} />
        </span>
        <div className="min-w-0">
          <h4 className="text-lg md:text-xl font-display font-bold text-white leading-tight">
            {folder.name}
          </h4>
          <p className="text-sm text-slate-500">{folder.blurb}</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-[11px]">
          <Images size={12} />
          {folder.photos.length} photos
        </span>
      </div>

      <div
        className="h-[1px] w-full mb-6 bg-gradient-to-r from-white/15 to-transparent"
        aria-hidden="true" />
      

      {/* Photo grid */}
      <div
        className={
        folder.wide ?
        'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6' :
        'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'
        }>
        
        {folder.photos.map((photo, i) =>
        <motion.button
          key={photo.src}
          type="button"
          onClick={() => onSelect(photo)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.4,
            delay: Math.min(i * 0.04, 0.32),
            ease: [0.23, 1, 0.32, 1]
          }}
          aria-label={`View photo: ${photo.caption}`}
          className={`group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#05050c] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 ${accent.ring} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = accent.glow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '';
          }}>
          
            <img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]" />
          

            {/* Light resting tint, fully lifted on hover */}
            <div
            className="absolute inset-0 bg-[#030308]/10 transition-opacity duration-300 group-hover:opacity-0"
            aria-hidden="true" />
          

            {/* Accent wash on hover */}
            <div
            className={`absolute inset-0 ${accent.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen`}
            aria-hidden="true" />
          

            {/* Light sweep */}
            <div
            className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-[300%]"
            aria-hidden="true" />
          

            {/* Corner brackets */}
            <span
            className={`absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 ${accent.border} rounded-tl-md opacity-0 -translate-x-1 -translate-y-1 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0`}
            aria-hidden="true" />
          
            <span
            className={`absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 ${accent.border} rounded-br-md opacity-0 translate-x-1 translate-y-1 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0`}
            aria-hidden="true" />
          

            {/* Expand affordance */}
            <span
            className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:scale-100"
            aria-hidden="true">
            
              <span
              className={`w-10 h-10 rounded-full bg-[#030308]/70 backdrop-blur-md border ${accent.border} flex items-center justify-center ${accent.text}`}>
              
                <Maximize2 size={16} />
              </span>
            </span>
          </motion.button>
        )}
      </div>
    </motion.div>);

}