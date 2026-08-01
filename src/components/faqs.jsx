import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Sparkles, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is Scooby available in all cities?",
    answer:
      "Currently, we are available in major metro cities across India. We're expanding rapidly — stay tuned!",
  },
  {
    question: "Are your caregivers and vets certified?",
    answer:
      "Yes! All our veterinarians and caregivers are background-verified and registered with authorized medical bodies.",
  },
  {
    question: "What if my pet doesn’t like the food?",
    answer:
      "No worries! We have a 3-day replacement guarantee for unused items. Your pet’s happiness is our top priority.",
  },
  {
    question: "Can I cancel a subscription anytime?",
    answer:
      "Absolutely. You can manage, pause, or cancel your subscription anytime through your dashboard with zero penalty.",
  },
  {
    question: "How do I book a grooming session?",
    answer:
      "Just head to the Grooming section and choose a slot. Our experts will visit your home at your chosen time.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0e5] via-[#fdf7f2] to-[#f9ede2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🐾 Subtle Paw Print Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[radial-gradient(#5a3b1f_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Floating Paw Print Background Decorations */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[8%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-1c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12s1.5-.67 1.5-1.5S9.33 9 8.5 9zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 9 15.5 9zm-7-4c-.83 0-1.5.67-1.5 1.5S7.67 8 8.5 8s1.5-.67 1.5-1.5S9.33 5 8.5 5zm7 0c-.83 0-1.5.67-1.5 1.5S14.67 8 15.5 8s1.5-.67 1.5-1.5S16.33 5 15.5 5z"/>
        </svg>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-1c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12s1.5-.67 1.5-1.5S9.33 9 8.5 9zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 9 15.5 9zm-7-4c-.83 0-1.5.67-1.5 1.5S7.67 8 8.5 8s1.5-.67 1.5-1.5S9.33 5 8.5 5zm7 0c-.83 0-1.5.67-1.5 1.5S14.67 8 15.5 8s1.5-.67 1.5-1.5S16.33 5 15.5 5z"/>
        </svg>
      </motion.div>

      {/* Decorative Dashed Ring Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] border-2 border-dashed border-[#e07a5f]/15 rounded-full pointer-events-none" />

      {/* Rich Glowing Background Accent Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28rem] w-[42rem] rounded-full bg-gradient-to-tr from-[#e07a5f]/20 via-[#f2cc8f]/15 to-transparent blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/80 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Got Questions? We Have Answers</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-[#5a3b1f]/90 text-base md:text-lg font-medium leading-relaxed">
            Got pawsitive doubts? Let's clear them out!
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={false}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? "bg-white/95 border-[#e07a5f]/40 shadow-xl shadow-[#e07a5f]/10"
                    : "bg-white/70 border-[#e8d7c8]/80 hover:border-[#e07a5f]/30 hover:bg-white/90 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-[#e07a5f]" : "text-[#7d5b40]"}`} />
                    <span className={`font-extrabold text-base sm:text-lg transition-colors ${isOpen ? "text-[#e07a5f]" : "text-[#5a3b1f]"}`}>
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#e07a5f]/10 text-[#e07a5f]" : "bg-[#f5e9df]/60 text-[#7d5b40]"
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-7 pb-6 pt-1 text-[#7d5b40] text-sm sm:text-base leading-relaxed border-t border-[#e8d7c8]/30 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faqs;