import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SITE } from '../data/site';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full lg:w-1/3">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-cyan-500" />
              <h2 className="text-sm font-display tracking-widest text-cyan-400 uppercase">
                Get In Touch
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                Connect
              </span>
            </h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              I'm currently open to new projects and collaborations. Whether you
              have a question or just want to say hi, I'll try my best to get
              back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-400 border-cyan-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-display">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-white hover:text-cyan-400 transition-colors break-all">
                    
                    {SITE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-violet-400 border-violet-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-display">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-white hover:text-cyan-400 transition-colors">
                    
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400 border-blue-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-display">
                    Location
                  </p>
                  <p className="text-white">{SITE.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="w-full lg:w-2/3">
            
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl border-cyan-500/20">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-[#0a0a16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your name" />
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2">
                    
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-[#0a0a16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email" />
                  
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-400 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  }
                  className="w-full bg-[#0a0a16] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="How can I help you?" />
                
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-70">
                
                {isSubmitting ?
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> :
                isSubmitted ?
                'Message Sent!' :

                <>
                    Send Message <Send size={18} />
                  </>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}