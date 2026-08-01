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

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Warm Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[45rem] rounded-full bg-[#f3ded0]/40 blur-3xl pointer-events-none" />

      {/* 🐾 Requested Center Subtle Paw Watermark */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[#e07a5f]/5 pointer-events-none text-6xl">
        🐾
      </div>

      {/* 🐾 Floating Black Paw Print 1 (Top Left) */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [-12, -4, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[6%] text-black/15 pointer-events-none text-5xl z-0"
      >
        🐾
      </motion.div>

      {/* 🐾 Floating Black Paw Print 2 (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, 14, 0], rotate: [15, 5, 15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[6%] text-black/20 pointer-events-none text-6xl z-0"
      >
        🐾
      </motion.div>

      {/* 🐾 Floating Black Paw Print 3 (Middle Accent) */}
      <motion.div 
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[12%] text-black/15 pointer-events-none text-4xl z-0"
      >
        🐾
      </motion.div>

      {/* 🐾 Large Black Paw Background Watermark */}
      <div className="absolute top-1/3 left-[2%] text-black/[0.07] pointer-events-none z-0 -rotate-12 text-9xl">
        🐾
      </div>

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
              className="group bg-white/70 p-7 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/10 hover:border-[#e07a5f]/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between cursor-pointer"
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