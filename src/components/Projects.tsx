import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ArrowUpRight, Layers } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import {
  projectsData,
  projectCategories as categories } from
'../data/projects';
import type { Project } from '../types/portfolio';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) =>
  filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="scroll-mt-28 py-24 md:py-28 relative">
      {/* Ambient section glow */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"
        aria-hidden="true" />
      
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px] pointer-events-none"
        aria-hidden="true" />
      

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-cyan-500" />
              <h2 className="text-sm font-display tracking-widest text-cyan-400 uppercase">
                Portfolio
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
              Featured{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.25))'
                }}>
                
                Projects
              </span>
            </h3>
            <p className="mt-4 text-slate-400 max-w-lg">
              A selection of design and video work across apparel, print,
              interfaces and motion.
            </p>
          </div>

          {/* Filter */}
          <div
            className="flex flex-wrap gap-2 lg:justify-end"
            role="tablist"
            aria-label="Filter projects by category">
            
            {categories.map((cat) =>
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filter === cat ?
              'bg-cyan-500 text-white shadow-[0_0_18px_rgba(6,182,212,0.4)]' :
              'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'}`
              }>
              
                {cat}
              </button>
            )}
          </div>
        </div>

        {/* Grid — 1 / 2 / 3 columns, equal heights */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)} />

            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject &&
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} />

        }
      </AnimatePresence>
    </section>);

}

function ProjectCard({
  project,
  onClick



}: {project: Project;onClick: () => void;}) {
  const isVideo = Boolean(project.videoUrl);
  const gallery = project.gallery ?? [];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="h-full">
      
      <button
        type="button"
        onClick={onClick}
        aria-label={`Open case study for ${project.title}`}
        className="group h-full w-full text-left glass-card rounded-2xl overflow-hidden flex flex-col border border-white/10 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
        
        {/* 16:9 media */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#05050c]">
          {isVideo ?
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]" /> :

          gallery.length > 1 ? (
          /* Grouped set: lead image + stacked variants, one project */
          <div className="grid grid-cols-3 grid-rows-2 gap-1 w-full h-full">
              <img
              src={gallery[0]}
              alt={project.title}
              loading="lazy"
              className={`col-span-2 row-span-2 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]`} />
            
              {gallery.slice(1, 3).map((src, i) =>
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className={`${gallery.length === 2 ? 'row-span-2' : ''} w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]`}
              style={{ transitionDelay: `${(i + 1) * 40}ms` }} />

            )}
            </div>) :

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]" />

          }

          {/* Depth gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/20 to-transparent"
            aria-hidden="true" />
          

          {/* Category badge */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#030308]/70 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-medium tracking-wide">
            {project.category}
          </span>

          {/* Set size marker */}
          {gallery.length > 1 &&
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#030308]/70 backdrop-blur-md border border-white/10 text-white/80 text-[11px] font-medium">
              <Layers size={12} />
              {gallery.length} sizes
            </span>
          }

          {/* Video marker */}
          {isVideo &&
          <span
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#030308]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80"
            aria-hidden="true">
            
              <PlayCircle size={16} />
            </span>
          }
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          <h4 className="text-lg md:text-xl font-display font-bold text-white leading-snug mb-2 line-clamp-1">
            {project.title}
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech pills pinned to the bottom so card footers align */}
          <div className="mt-auto pt-5 flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 2).map((tech) =>
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-300">
                
                  {tech}
                </span>
              )}
              {project.technologies.length > 2 &&
              <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-400">
                  +{project.technologies.length - 2}
                </span>
              }
            </div>

            <span
              className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-colors duration-200 group-hover:border-cyan-400/50 group-hover:text-cyan-300"
              aria-hidden="true">
              
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </button>
    </motion.article>);

}