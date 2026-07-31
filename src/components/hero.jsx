import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart, Star, ShieldCheck, Play, Sparkle } from "lucide-react";
import img from "../assets/dog.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff9f6] via-[#fff4ee] to-[#fff9f6] pt-6 pb-16 px-6 lg:px-20">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#ff7d4e]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#ffd8ca]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7d4e]/10 border border-[#ff7d4e]/20 text-[#d1733d] text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#ff7d4e]" />
            <span>Trusted Pet Care, Tailored With Love</span>
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1e1e1e] leading-[1.15]">
            Your <span className="bg-gradient-to-r from-[#ff7d4e] to-[#e46637] bg-clip-text text-transparent">Pet</span> Deserves
            <br />
            The Best Family.
          </h1>

          {/* Body Text */}
          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            Find loving homes, trusted pet care, and compassionate adoption
            services that help every furry friend live a happier, healthier life.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button className="flex items-center gap-2 bg-[#ff7d4e] hover:bg-[#e46637] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#ff7d4e]/25 hover:scale-105 active:scale-95 transition-all duration-200">
              Make an Appointment
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#333] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#1e1e1e]/10 hover:scale-105 active:scale-95 transition-all duration-200">
              <Play className="h-4 w-4 fill-current text-white" />
              Watch Story
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-[#e8d7c8]/50 flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#ff7d4e]" />
              <span>Verified Caregivers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-[#1e1e1e]">4.9/5</span>
              <span>(2.5k+ Reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image with Hover Zoom & Balanced Floating Badges */}
        <div className="w-full md:w-1/2 flex justify-center relative max-w-lg md:max-w-none my-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative rounded-[32px] p-3 bg-gradient-to-tr from-white via-[#fff4ee] to-white shadow-2xl hover:shadow-[#ff7d4e]/15 border border-[#e8d7c8]/60 w-full cursor-pointer group transition-shadow duration-500"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-[24px] relative">
              <motion.img
                src={img}
                alt="Happy Dog"
                className="w-full h-[360px] lg:h-[400px] object-cover rounded-[24px]"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Floating Badge 1 (Top Left) */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-3 left-4 sm:-left-2 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-3 px-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="h-10 w-10 rounded-xl bg-[#ff7d4e]/10 flex items-center justify-center text-[#ff7d4e] shrink-0">
                <Heart className="h-5 w-5 fill-[#ff7d4e]" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-medium leading-none mb-1">Happy Pets</p>
                <p className="text-sm font-bold text-[#1e1e1e] leading-none">100% Loved</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 (Bottom Right) */}
            <motion.div 
              whileHover={{ y: 4, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-3 right-4 sm:-right-2 bg-white/95 backdrop-blur-md border border-[#e8d7c8] p-3 px-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="flex -space-x-2 shrink-0">
                <span className="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-[#1e1e1e] text-white text-[11px] font-bold items-center justify-center">🐾</span>
                <span className="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-[#ff7d4e] text-white text-[11px] font-bold items-center justify-center">❤️</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1e1e1e] leading-none mb-1">24/7 Vet Care</p>
                <p className="text-[11px] text-gray-500 leading-none">Always Available</p>
              </div>
            </motion.div>

            {/* Sparkle */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-[#e8d7c8] shadow-md z-10"
            >
              <Sparkle className="h-4 w-4 text-[#ff7d4e]" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;