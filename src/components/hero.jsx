import "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, ShieldCheck, Play, Heart, Sparkle } from "lucide-react";
import img from "../assets/dog.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0e5] via-[#fdf7f2] to-[#f9ede2] pt-12 pb-24 px-6 lg:px-16 border-b border-[#e8d7c8]/60">
      
      {/* 🐾 Subtle Paw Print Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[radial-gradient(#5a3b1f_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Floating SVG Paws Background Decoration */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-[10%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-1c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12s1.5-.67 1.5-1.5S9.33 9 8.5 9zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 9 15.5 9zm-7-4c-.83 0-1.5.67-1.5 1.5S7.67 8 8.5 8s1.5-.67 1.5-1.5S9.33 5 8.5 5zm7 0c-.83 0-1.5.67-1.5 1.5S14.67 8 15.5 8s1.5-.67 1.5-1.5S16.33 5 15.5 5z"/>
        </svg>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[8%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5-1c-.83 0-1.5.67-1.5 1.5S7.67 12 8.5 12s1.5-.67 1.5-1.5S9.33 9 8.5 9zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 9 15.5 9zm-7-4c-.83 0-1.5.67-1.5 1.5S7.67 8 8.5 8s1.5-.67 1.5-1.5S9.33 5 8.5 5zm7 0c-.83 0-1.5.67-1.5 1.5S14.67 8 15.5 8s1.5-.67 1.5-1.5S16.33 5 15.5 5z"/>
        </svg>
      </motion.div>

      {/* Decorative Dashed Ring Accent */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] border-2 border-dashed border-[#e07a5f]/15 rounded-full pointer-events-none" />

      {/* Glowing Gradient Spotlight Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-[#e07a5f]/25 via-[#f2cc8f]/20 to-transparent blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[42%] space-y-6"
        >
          {/* Eyebrow Pill Badge */}
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/80 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Trusted Pet Care, Tailored With Love</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5a3b1f] tracking-tight leading-[1.12]">
            Your <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Pet</span> Deserves
            <br />
            The Best Family.
          </h1>

          <p className="text-base sm:text-lg text-[#5a3b1f]/90 leading-relaxed font-medium">
            Find loving homes, trusted pet care, and compassionate adoption
            services that help every furry friend live a happier, healthier life.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="flex items-center gap-2 bg-[#e07a5f] hover:bg-[#d0674c] text-white px-7 py-3.5 rounded-xl font-medium shadow-lg shadow-[#e07a5f]/25 transition-all cursor-pointer"
            >
              Make an Appointment 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="flex items-center gap-2 bg-[#5a3b1f] hover:bg-[#432b17] text-white px-7 py-3.5 rounded-xl font-medium shadow-lg shadow-[#5a3b1f]/15 transition-all cursor-pointer"
            >
              <Play className="h-4 w-4 fill-current text-white" /> Watch Story
            </motion.button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-[#e8d7c8]/80 flex flex-wrap items-center gap-6 text-sm text-[#5a3b1f] font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#e07a5f]" />
              <span>Verified Caregivers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
              <span className="font-extrabold text-[#5a3b1f]">4.9/5</span>
              <span className="text-[#7d5b40] font-medium">(2.5k+ Reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Horizontally Broad Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[58%] flex justify-center relative"
        >
          {/* Decorative Backing Accent Shadow Frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#e07a5f]/20 to-[#f2cc8f]/30 rounded-[32px] blur-lg pointer-events-none" />

          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#e8d7c8] via-white to-[#e8d7c8] shadow-2xl hover:shadow-3xl hover:shadow-[#e07a5f]/15 border border-[#e8d7c8]/80 w-full group cursor-pointer"
          >
            {/* Broad Landscape Aspect Ratio */}
            <div className="overflow-hidden rounded-2xl relative aspect-[16/9] w-full">
              <motion.img
                src={img}
                alt="Happy Dogs"
                className="w-full h-full object-cover rounded-2xl border border-[#e8d7c8]/50"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />

              {/* Gloss Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Floating Badge 1 (Top-Left) */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-4 -left-2 sm:left-6 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-3 px-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="h-9 w-9 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f] shrink-0">
                <Heart className="h-4 w-4 fill-[#e07a5f]" />
              </div>
              <div>
                <p className="text-[10px] text-[#7d5b40] font-semibold uppercase tracking-wider">Happy Pets</p>
                <p className="text-xs font-bold text-[#5a3b1f]">100% Loved</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 (Bottom-Right) */}
            <motion.div 
              whileHover={{ y: 6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-4 -right-2 sm:right-6 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-3 px-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="flex -space-x-2 shrink-0">
                <span className="inline-flex h-7 w-7 rounded-full ring-2 ring-white bg-[#5a3b1f] text-white text-[10px] font-bold items-center justify-center">🐾</span>
                <span className="inline-flex h-7 w-7 rounded-full ring-2 ring-white bg-[#e07a5f] text-white text-[10px] font-bold items-center justify-center">❤️</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#5a3b1f]">24/7 Vet Care</p>
                <p className="text-[10px] text-[#7d5b40] font-medium">Always Available</p>
              </div>
            </motion.div>

            {/* Sparkle Accent */}
            <motion.div 
              animate={{ scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-white/90 p-2 rounded-full border border-[#e8d7c8] shadow-sm z-10"
            >
              <Sparkle className="h-4 w-4 text-[#e07a5f]" />
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero; 