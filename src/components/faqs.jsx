import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Sparkles, HelpCircle, Bone } from "lucide-react";

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
    <section 
      id="faqs" 
      className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60"
    >
      
      {/* 🐾 Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 🦴 Floating Animated Bone Accent */}
      <motion.div
        animate={{ 
          y: [0, -12, 0], 
          rotate: [0, 15, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-12 left-[10%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <Bone className="h-12 w-12" />
      </motion.div>

      {/* Warm Sunset Glow Orbs */}
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-[#e07a5f]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-[#f4a261]/15 blur-3xl pointer-events-none" />

      {/* Static Paw Accents */}
      <div className="absolute top-12 right-12 text-5xl opacity-10 pointer-events-none select-none">🐾</div>
      <div className="absolute bottom-12 left-12 text-6xl opacity-10 pointer-events-none select-none -rotate-12">🐾</div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
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
        </motion.div>

        {/* FAQ Card List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`group rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-md cursor-pointer ${
                  isOpen
                    ? "bg-white/90 border-[#e07a5f]/50 shadow-xl shadow-[#e07a5f]/10"
                    : "bg-white/70 border-[#e8d7c8]/80 hover:bg-white/90 hover:border-[#e07a5f]/30 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#e07a5f] text-white" : "bg-[#e07a5f]/10 text-[#e07a5f]"
                    }`}>
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className={`font-extrabold text-base sm:text-lg transition-colors ${
                      isOpen ? "text-[#e07a5f]" : "text-[#5a3b1f] group-hover:text-[#e07a5f]"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#e07a5f]/10 text-[#e07a5f]" : "bg-[#f5e9df]/80 text-[#7d5b40]"
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
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-7 pb-6 pt-2 text-[#5a3b1f]/90 text-sm sm:text-base leading-relaxed border-t border-[#e8d7c8]/50 font-medium ml-14">
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