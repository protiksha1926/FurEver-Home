import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaRegSmile, FaTruck, FaShieldAlt } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const reasons = [
  {
    icon: <FaUserMd className="text-2xl" />,
    title: "Certified Vets",
    desc: "Your pet’s health is in trusted, expert hands. We connect you with verified veterinarians for every need.",
  },
  {
    icon: <FaRegSmile className="text-2xl" />,
    title: "5000+ Happy Pets",
    desc: "Thousands of wagging tails and purring friends. Trusted by pet parents across India.",
  },
  {
    icon: <FaTruck className="text-2xl" />,
    title: "Fast & Reliable",
    desc: "On-time doorstep delivery of pet food, grooming kits & accessories in 20+ cities.",
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Safe & Verified",
    desc: "Background-verified staff & vet-approved products. Your pet’s safety is our priority.",
  },
];

// 🐾 Active Walking Paw Steps (Seamlessly continuing across WhyChooseUs)
const whyChooseUsTrail = [
  // Top Bridge Steps (Flowing down from previous section)
  { id: 1, top: "4%", left: "15%", size: "text-5xl", rot: "-rotate-20", delay: 0 },
  { id: 2, top: "10%", left: "22%", size: "text-4xl", rot: "-rotate-5", delay: 0.5 },

  // Header & Margin Flanks
  { id: 3, top: "18%", left: "6%", size: "text-5xl", rot: "-rotate-35", delay: 1.0 },
  { id: 4, top: "16%", right: "8%", size: "text-6xl", rot: "rotate-40", delay: 1.5 },

  // Gaps Between Feature Cards
  { id: 5, top: "48%", left: "28%", size: "text-4xl", rot: "rotate-20", delay: 2.0 },
  { id: 6, top: "54%", left: "48%", size: "text-5xl", rot: "rotate-10", delay: 2.5 },
  { id: 7, top: "50%", left: "72%", size: "text-4xl", rot: "-rotate-15", delay: 3.0 },

  // Bottom Exit Trail
  { id: 8, top: "82%", left: "8%", size: "text-6xl", rot: "-rotate-25", delay: 3.5 },
  { id: 9, top: "88%", left: "20%", size: "text-5xl", rot: "rotate-15", delay: 4.0 },
  { id: 10, top: "86%", right: "10%", size: "text-6xl", rot: "rotate-30", delay: 4.5 },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9ede2] via-[#fdf7f2] to-[#f9ede2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🌊 Top Blend Layer for Smooth Section Continuity */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f9ede2] to-transparent pointer-events-none z-10" />

      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Warm Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[50rem] rounded-full bg-gradient-to-b from-[#e07a5f]/15 via-[#f2cc8f]/20 to-transparent blur-3xl pointer-events-none" />

      {/* 🐾 Active Walking Paw Prints */}
      {whyChooseUsTrail.map((paw) => (
        <motion.div
          key={paw.id}
          style={{ top: paw.top, left: paw.left, right: paw.right }}
          className={`absolute ${paw.size} ${paw.rot} pointer-events-none z-0 select-none`}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 0.4, 0.4, 0],
            scale: [0.5, 1, 1, 0.85],
            y: [0, -4, -4, -8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3.5,
            delay: paw.delay,
            ease: "easeInOut",
          }}
        >
          <span className="text-black/35 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] block">
            🐾
          </span>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/80 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>The Scooby Advantage</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            Why Choose <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Scooby?</span>
          </h2>

          <p className="text-[#5a3b1f]/90 text-base md:text-lg font-medium leading-relaxed">
            At Scooby, we go beyond just pet care — we build relationships. Here's what makes us different (and your pet's favorite).
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/80 p-7 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/15 hover:border-[#e07a5f]/40 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative z-10"
            >
              {/* Icon Container */}
              <div className="h-14 w-14 rounded-2xl bg-[#e07a5f]/10 text-[#e07a5f] flex items-center justify-center group-hover:bg-[#e07a5f] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors duration-200 mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-[#7d5b40] text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;