import React from "react";
import { motion } from "framer-motion";
import { GiDogHouse, GiSittingDog, GiDogBowl } from "react-icons/gi";
import { FaUserMd, FaPaw, FaTruck } from "react-icons/fa";
import { Sparkles, ArrowUpRight } from "lucide-react";

const petServices = [
  {
    icon: <GiDogHouse className="text-2xl" />,
    title: "Pet Boarding",
    desc: "Safe and comfortable home for your pets when you're away.",
    tag: "Care",
  },
  {
    icon: <FaUserMd className="text-2xl" />,
    title: "Vet Consultation",
    desc: "Expert vet support for your pet's health & wellness.",
    tag: "Medical",
  },
  {
    icon: <GiDogBowl className="text-2xl" />,
    title: "Pet Food Delivery",
    desc: "Nutritious food & treats delivered to your doorstep.",
    tag: "Nutrition",
  },
  {
    icon: <GiSittingDog className="text-2xl" />,
    title: "Pet Training",
    desc: "Professional training to keep your pet well-behaved.",
    tag: "Behavior",
  },
  {
    icon: <FaPaw className="text-2xl" />,
    title: "Grooming Services",
    desc: "Bathing, trimming & pampering sessions for your furry friend.",
    tag: "Popular",
  },
  {
    icon: <FaTruck className="text-2xl" />,
    title: "Quick Delivery",
    desc: "Fast, hassle-free service at your convenience.",
    tag: "Express",
  },
];

// 🐾 Walking Paw Print Steps (Spanning across the whole canvas with higher visibility)
const activeWalkingTrail = [
  // Top Header Area Trail
  { id: 1, top: "8%", left: "5%", size: "text-4xl", rot: "-rotate-45", delay: 0 },
  { id: 2, top: "14%", left: "12%", size: "text-5xl", rot: "-rotate-15", delay: 0.5 },
  { id: 3, top: "18%", left: "22%", size: "text-4xl", rot: "rotate-15", delay: 1.0 },

  // Middle Top & Center Gaps
  { id: 4, top: "28%", left: "38%", size: "text-5xl", rot: "rotate-30", delay: 1.5 },
  { id: 5, top: "34%", left: "48%", size: "text-4xl", rot: "rotate-10", delay: 2.0 },
  { id: 6, top: "38%", left: "62%", size: "text-5xl", rot: "-rotate-20", delay: 2.5 },

  // Right Side Upper Trail
  { id: 7, top: "22%", left: "85%", size: "text-6xl", rot: "rotate-45", delay: 3.0 },
  { id: 8, top: "35%", left: "92%", size: "text-5xl", rot: "rotate-20", delay: 3.5 },

  // Lower Left & Bottom Trail
  { id: 9, top: "58%", left: "4%", size: "text-5xl", rot: "-rotate-30", delay: 4.0 },
  { id: 10, top: "72%", left: "10%", size: "text-6xl", rot: "-rotate-10", delay: 4.5 },
  { id: 11, top: "84%", left: "25%", size: "text-5xl", rot: "rotate-25", delay: 5.0 },

  // Bottom Center to Right
  { id: 12, top: "88%", left: "55%", size: "text-6xl", rot: "rotate-15", delay: 5.5 },
  { id: 13, top: "82%", left: "78%", size: "text-5xl", rot: "-rotate-20", delay: 6.0 },
  { id: 14, top: "90%", left: "90%", size: "text-6xl", rot: "-rotate-40", delay: 6.5 },
];

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[45rem] rounded-full bg-[#f3ded0]/40 blur-3xl pointer-events-none" />

      {/* 🐾 Active Infinite Walking Paw Prints (Crisp & Visible) */}
      {activeWalkingTrail.map((paw) => (
        <motion.div
          key={paw.id}
          style={{ top: paw.top, left: paw.left }}
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
            repeatDelay: 4,
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
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-[#f5e9df]/60 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Tail-Wagging Solutions</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            Our Pet <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-[#5a3b1f]/90 text-base font-medium leading-relaxed">
            We care for your pets like family. Explore our range of trusted pet care services designed for their happiness & your peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {petServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/70 p-7 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/10 hover:border-[#e07a5f]/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between cursor-pointer relative z-10"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-[#e07a5f]/10 text-[#e07a5f] flex items-center justify-center group-hover:bg-[#e07a5f] group-hover:text-white transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#7d5b40] bg-[#f5e9df]/70 px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors duration-200 mb-2">
                  {service.title}
                </h3>
                <p className="text-[#7d5b40] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#e8d7c8]/40 flex items-center justify-between text-xs font-bold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors">
                <span>Learn More</span>
                <div className="h-7 w-7 rounded-full bg-[#f5e9df]/60 flex items-center justify-center text-[#e07a5f] group-hover:bg-[#e07a5f] group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;