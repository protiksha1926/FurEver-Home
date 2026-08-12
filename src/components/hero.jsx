import "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, ShieldCheck, Play, Heart, Sparkle, Bone } from "lucide-react";
import img from "../assets/dog.jpg";

// 🐾 Active Walking Paw Trail
const heroPawTrail = [
  { id: 1, top: "10%", left: "5%", size: "text-4xl", rot: "-rotate-45", delay: 0 },
  { id: 2, top: "20%", left: "12%", size: "text-5xl", rot: "-rotate-15", delay: 0.6 },
  { id: 3, top: "72%", left: "6%", size: "text-5xl", rot: "rotate-20", delay: 1.2 },
  { id: 4, top: "82%", left: "16%", size: "text-4xl", rot: "rotate-45", delay: 1.8 },
  { id: 5, top: "14%", right: "10%", size: "text-5xl", rot: "rotate-30", delay: 2.4 },
  { id: 6, top: "76%", right: "6%", size: "text-6xl", rot: "-rotate-25", delay: 3.0 },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0e5] via-[#fdf7f2] to-[#f9ede2] pt-12 pb-24 px-6 lg:px-16 border-b border-[#e8d7c8]/60">
      
      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 🦴 Floating Animated Bone Accent */}
      <motion.div
        animate={{ 
          y: [0, -12, 0], 
          rotate: [0, 15, -10, 0],
          scale: [1, 1.08, 1] 
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-[12%] text-[#e07a5f]/20 pointer-events-none z-0"
      >
        <Bone className="h-12 w-12" />
      </motion.div>

      {/* 🐾 Active Walking Paw Prints */}
      {heroPawTrail.map((paw) => (
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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[42%] space-y-6"
        >
          {/* Eyebrow Pill Badge */}
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/90 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
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
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="flex items-center gap-2 bg-[#e07a5f] hover:bg-[#d0674c] text-white px-7 py-3.5 rounded-xl font-medium shadow-xl shadow-[#e07a5f]/30 transition-all cursor-pointer"
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
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="flex items-center gap-2 bg-[#5a3b1f] hover:bg-[#432b17] text-white px-7 py-3.5 rounded-xl font-medium shadow-xl shadow-[#5a3b1f]/20 transition-all cursor-pointer"
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
          {/* 🎨 Focused Vibrant Glow Behind the Image Frame */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-[#e07a5f]/45 via-[#f4a261]/40 to-[#f2cc8f]/50 blur-2xl pointer-events-none" 
          />

          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#e8d7c8] via-white to-[#e8d7c8] shadow-2xl hover:shadow-3xl hover:shadow-[#e07a5f]/25 border border-[#e8d7c8]/80 w-full group cursor-pointer z-10"
          >
            {/* Aspect Ratio Container */}
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