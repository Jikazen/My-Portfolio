import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import {
  chatbotGreeting,
  fallbackAnswer,
  matchReply,
  quickReplies,
  type QuickReply } from
'../../data/chatbot';
import { ASSETS } from '../../data/site';

type Message = {
  id: string;
  from: 'bot' | 'user';
  text: string;
};

/** Logo avatar used for the header and every bot message. */
function BotAvatar({
  size = 'md',
  online = false



}: {size?: 'sm' | 'md';online?: boolean;}) {
  const box = size === 'sm' ? 'w-7 h-7' : 'w-10 h-10';

  return (
    <span className={`relative shrink-0 ${box}`}>
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[1.5px]"
        aria-hidden="true">
        
        <span className="block w-full h-full rounded-full bg-[#05050c]" />
      </span>
      <img
        src={ASSETS.logo}
        alt=""
        className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover" />
      
      {online &&
      <span
        className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#05050c]"
        aria-hidden="true" />

      }
    </span>);

}

/**
 * Floating support bubble.
 *
 * Sits bottom-right, to the LEFT of the back-to-top arrow, and opens the
 * Jikazen AI Support assistant — quick replies plus free-text messaging.
 */
export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  { id: 'greeting', from: 'bot', text: chatbotGreeting }]
  );
  const [suggestions, setSuggestions] = useState<QuickReply[]>(quickReplies);
  const [suggestionsOpen, setSuggestionsOpen] = useState(true);
  const [draft, setDraft] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const counter = useRef(0);

  const nextId = () => `msg-${++counter.current}`;

  // Keep the newest message in view.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, isTyping, suggestionsOpen]);

  // Escape closes the panel.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  /** Push the user's line, then answer after a short "typing" beat. */
  const respond = (userText: string, reply: QuickReply | null) => {
    setMessages((prev) => [
    ...prev,
    { id: nextId(), from: 'user', text: userText }]
    );
    setIsTyping(true);

    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
      ...prev,
      {
        id: nextId(),
        from: 'bot',
        text: reply ? reply.answer : fallbackAnswer
      }]
      );

      // Every question stays available — follow-ups just move to the front
      // so the most relevant next step reads first.
      const order = reply?.followUps ?? [];
      setSuggestions(
        [...quickReplies].sort((a, b) => {
          const rank = (r: QuickReply) => {
            if (r.id === reply?.id) return 2;
            const i = order.indexOf(r.id);
            return i === -1 ? 1 : 0;
          };
          return rank(a) - rank(b);
        })
      );
      setSuggestionsOpen(true);
    }, 650);
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || isTyping) return;
    setDraft('');
    respond(text, matchReply(text));
  };

  return (
    <>
      {/* ── Panel ── */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          role="dialog"
          aria-label="Jikazen AI Support"
          className="fixed bottom-24 right-6 z-50 flex flex-col w-[calc(100vw-3rem)] max-w-sm h-[30rem] max-h-[calc(100vh-9rem)] origin-bottom-right overflow-hidden rounded-2xl glass-card border border-cyan-500/25 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85),0_0_40px_rgba(6,182,212,0.15)]">
          
            {/* Header */}
            <div className="flex items-center gap-3 shrink-0 p-4 border-b border-white/10 bg-white/[0.03]">
              <BotAvatar online />
              <div className="min-w-0">
                <p className="text-sm font-display font-bold text-white leading-tight">
                  Jikazen AI Support
                </p>
                <p className="text-[11px] text-emerald-400">
                  Online · replies instantly
                </p>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="ml-auto p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
              
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
            ref={scrollRef}
            className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 space-y-3">
            
              {messages.map((msg) =>
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`flex items-end gap-2 ${
              msg.from === 'user' ? 'justify-end' : 'justify-start'}`
              }>
              
                  {msg.from === 'bot' && <BotAvatar size="sm" />}
                  <p
                className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                msg.from === 'user' ?
                'bg-cyan-500/15 border border-cyan-500/30 text-cyan-100 rounded-br-sm' :
                'bg-white/[0.05] border border-white/10 text-slate-300 rounded-bl-sm'}`
                }>
                
                    {msg.text}
                  </p>
                </motion.div>
            )}

              {isTyping &&
            <div
              className="flex items-end gap-2 justify-start"
              aria-live="polite">
              
                  <BotAvatar size="sm" />
                  <span className="flex items-center gap-1 px-3.5 py-3 rounded-2xl rounded-bl-sm bg-white/[0.05] border border-white/10">
                    {[0, 1, 2].map((i) =>
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut'
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400" />

                )}
                  </span>
                </div>
            }
            </div>

            {/* Expandable suggestions */}
            {suggestions.length > 0 &&
          <div className="shrink-0 border-t border-white/10 bg-white/[0.02]">
                <button
              onClick={() => setSuggestionsOpen((prev) => !prev)}
              aria-expanded={suggestionsOpen}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-[11px] font-display tracking-widest uppercase text-slate-400 hover:text-white transition-colors">
              
                  Suggested questions
                  <ChevronDown
                size={14}
                className={`ml-auto transition-transform duration-200 ${
                suggestionsOpen ? 'rotate-180' : ''}`
                } />
              
                </button>

                <AnimatePresence initial={false}>
                  {suggestionsOpen &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                      <div className="flex flex-wrap gap-2 px-4 pb-3 max-h-24 overflow-y-auto custom-scrollbar">
                        {suggestions.map((reply) =>
                  <button
                    key={reply.id}
                    onClick={() => respond(reply.question, reply)}
                    className="px-3 py-1.5 text-xs text-slate-300 rounded-full bg-white/[0.04] border border-white/10 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white">
                    
                            {reply.question}
                          </button>
                  )}
                      </div>
                    </motion.div>
              }
                </AnimatePresence>
              </div>
          }

            {/* Composer */}
            <form
            onSubmit={send}
            className="flex items-center gap-2 shrink-0 p-3 border-t border-white/10 bg-white/[0.02]">
            
              <label htmlFor="chat-message" className="sr-only">
                Message
              </label>
              <input
              id="chat-message"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Message..."
              autoComplete="off"
              className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors" />
            
              <button
              type="submit"
              disabled={!draft.trim() || isTyping}
              aria-label="Send message"
              className="shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center transition-[background-color,transform,opacity] duration-200 hover:bg-cyan-400 hover:-translate-y-0.5 disabled:opacity-40 disabled:translate-y-0 disabled:cursor-not-allowed">
              
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        }
      </AnimatePresence>

      {/* ── Bubble (left of the back-to-top arrow) ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close support chat' : 'Open support chat'}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-[5.5rem] z-50 w-12 h-12 rounded-full glass border border-cyan-500/40 flex items-center justify-center text-cyan-300 backdrop-blur-md transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-white"
        style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.25)' }}>
        
        {!isOpen &&
        <motion.span
          animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full border border-cyan-400/60"
          aria-hidden="true" />

        }
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative flex">
            
            {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </>);

}