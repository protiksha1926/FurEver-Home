import React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Award, Sparkles, ArrowRight, Sparkle, Bone } from "lucide-react";
import img from "../assets/about_puppy.png";

export const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🌊 Top Blend Layer for Smooth Section Continuity */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f9ede2] to-transparent pointer-events-none z-10" />

      {/* 🐾 Subtle Black Dot Grid Background Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 🦴 Floating Animated Bone Accent */}
      <motion.div
        animate={{ 
          y: [0, -12, 0], 
          rotate: [0, 15, -10, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-12 left-[8%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <Bone className="h-12 w-12" />
      </motion.div>

      {/* Warm Ambient Glow Orbs */}
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-[#e07a5f]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-[#f4a261]/15 blur-3xl pointer-events-none" />

      {/* Static Paw Accents */}
      <div className="absolute top-12 right-12 text-5xl opacity-10 pointer-events-none select-none">🐾</div>
      <div className="absolute bottom-12 left-12 text-6xl opacity-10 pointer-events-none select-none -rotate-12">🐾</div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/80 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Pawsitive Care Guaranteed</span>
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            About <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Scooby</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-lg text-[#5a3b1f]/90 leading-relaxed font-medium">
            At <span className="font-bold text-[#5a3b1f]">Scooby</span>, we believe that pets aren't just animals — they're family.
            That's why we built a platform that delivers trusted, loving, and professional pet care services straight to your doorstep.
          </p>

          <p className="text-[#7d5b40] text-base leading-relaxed font-medium">
            Whether it's a grooming session, a vet consultation, or simply a delicious treat — we ensure your pet gets the best care possible. Founded by true animal lovers, our mission is to make every pet feel healthy, happy, and endlessly loved.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <motion.div 
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#e8d7c8]/80 shadow-sm hover:shadow-md hover:border-[#e07a5f]/40 backdrop-blur-md cursor-pointer transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f] group-hover:bg-[#e07a5f] group-hover:text-white transition-colors duration-200 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors">Certified Vets</span>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#e8d7c8]/80 shadow-sm hover:shadow-md hover:border-[#e07a5f]/40 backdrop-blur-md cursor-pointer transition-all duration-200"
            >
              <div className="h-10 w-10 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f] group-hover:bg-[#e07a5f] group-hover:text-white transition-colors duration-200 shrink-0">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors">100% Loving Care</span>
            </motion.div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="flex items-center gap-2 bg-[#5a3b1f] hover:bg-[#432b17] text-white font-medium rounded-xl shadow-xl shadow-[#5a3b1f]/20 transition-all cursor-pointer h-12 px-7"
            >
              <span>Learn Our Story</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Photo Frame with Stat Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full max-w-md md:max-w-none mx-auto"
        >
          {/* Backing Ambient Glow Frame */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#e07a5f]/30 via-[#f4a261]/25 to-[#f2cc8f]/35 blur-2xl pointer-events-none" 
          />

          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#e8d7c8] via-white to-[#e8d7c8] shadow-2xl hover:shadow-3xl hover:shadow-[#e07a5f]/20 border border-[#e8d7c8]/80 group transition-shadow duration-500 cursor-pointer z-10"
          >
            {/* Image Container */}
            <div className="overflow-hidden rounded-2xl relative">
              <motion.img 
                src={img} 
                alt="Happy Puppy" 
                className="w-full h-auto rounded-2xl object-cover border border-[#e8d7c8]/50" 
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />

              {/* Gloss Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Floating Badge 1 (Bottom Left) */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="h-12 w-12 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f] shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#5a3b1f]">10,000+</p>
                <p className="text-xs text-[#7d5b40] font-medium">Happy Pets Served</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 (Top Right) */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-3 px-4 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="flex -space-x-2 shrink-0">
                <span className="inline-flex h-7 w-7 rounded-full ring-2 ring-white bg-[#5a3b1f] text-white text-[10px] font-bold items-center justify-center">🐾</span>
                <span className="inline-flex h-7 w-7 rounded-full ring-2 ring-white bg-[#e07a5f] text-white text-[10px] font-bold items-center justify-center">❤️</span>
              </div>
              <span className="text-xs font-bold text-[#5a3b1f]">Top Rated Care</span>
            </motion.div>

            {/* Pulsing Sparkle */}
            <motion.div 
              animate={{ scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-2 rounded-full border border-[#e8d7c8] shadow-sm z-10"
            >
              <Sparkle className="h-4 w-4 text-[#e07a5f]" />
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;