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

// 🐾 Walking Paw Steps (Bridging directly from Hero down into Services)
const activeWalkingTrail = [
  // Section Bridge Steps (Crossing over top boundary)
  { id: 1, top: "2%", left: "18%", size: "text-4xl", rot: "-rotate-30", delay: 0 },
  { id: 2, top: "6%", left: "24%", size: "text-5xl", rot: "-rotate-10", delay: 0.5 },

  // Header & Grid Entrance
  { id: 3, top: "14%", left: "8%", size: "text-5xl", rot: "-rotate-25", delay: 1.0 },
  { id: 4, top: "24%", left: "42%", size: "text-4xl", rot: "rotate-20", delay: 1.5 },
  { id: 5, top: "32%", left: "54%", size: "text-5xl", rot: "rotate-35", delay: 2.0 },

  // Right Side Upper Trail
  { id: 6, top: "18%", left: "86%", size: "text-6xl", rot: "rotate-45", delay: 2.5 },
  { id: 7, top: "36%", left: "92%", size: "text-5xl", rot: "rotate-15", delay: 3.0 },

  // Lower Left & Bottom Trail
  { id: 8, top: "60%", left: "4%", size: "text-5xl", rot: "-rotate-30", delay: 3.5 },
  { id: 9, top: "74%", left: "10%", size: "text-6xl", rot: "-rotate-10", delay: 4.0 },
  { id: 10, top: "86%", left: "26%", size: "text-5xl", rot: "rotate-25", delay: 4.5 },

  // Bottom Center to Right
  { id: 11, top: "88%", left: "55%", size: "text-6xl", rot: "rotate-15", delay: 5.0 },
  { id: 12, top: "82%", left: "78%", size: "text-5xl", rot: "-rotate-20", delay: 5.5 },
  { id: 13, top: "92%", left: "90%", size: "text-6xl", rot: "-rotate-40", delay: 6.0 },
];

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9ede2] via-[#fdf7f2] to-[#f9ede2] pt-20 pb-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🌊 Seamless Top Organic Curve Transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f9ede2] to-transparent pointer-events-none z-10" />

      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Warm Soft Center Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 h-[32rem] w-[50rem] rounded-full bg-gradient-to-b from-[#e07a5f]/15 via-[#f2cc8f]/20 to-transparent blur-3xl pointer-events-none" />

      {/* 🐾 Active Walking Paw Prints (Connecting directly from top down) */}
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
              className="group bg-white/80 p-7 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/15 hover:border-[#e07a5f]/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer relative z-10"
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