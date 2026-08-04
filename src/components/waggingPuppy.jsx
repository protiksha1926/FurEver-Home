import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bone, Heart, Sparkles } from "lucide-react";

export const WaggingPuppy = () => {
  const [isHappy, setIsHappy] = useState(false);
  const [treatCount, setTreatCount] = useState(0);

  const handleFeed = () => {
    setIsHappy(true);
    setTreatCount((prev) => prev + 1);
    setTimeout(() => setIsHappy(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative bg-white/90 backdrop-blur-md border border-[#e8d7c8] p-3.5 px-4 rounded-3xl shadow-xl max-w-xs flex items-center gap-3.5 select-none z-30"
    >
      {/* 🐶 Animated Puppy Avatar */}
      <div className="relative flex-shrink-0 cursor-pointer" onClick={handleFeed}>
        
        {/* Heart Burst on Treat Click */}
        <AnimatePresence>
          {isHappy && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: -28, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#e07a5f] z-20"
            >
              <Heart className="h-6 w-6 fill-[#e07a5f]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dog Face Box */}
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-[#ffe8dc] to-[#f5e9df] border border-[#e07a5f]/30 flex items-center justify-center relative overflow-hidden shadow-inner">
          <motion.span 
            className="text-2xl block"
            animate={isHappy ? { scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] } : { y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: isHappy ? 0.35 : 2, ease: "easeInOut" }}
          >
            🐶
          </motion.span>
        </div>

        {/* 🐕 Tail/Bone Wag Animation */}
        <motion.div
          animate={{ rotate: isHappy ? [0, 35, -35, 35, 0] : [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: isHappy ? 0.25 : 0.8, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 text-base origin-bottom-left"
        >
          🦴
        </motion.div>
      </div>

      {/* Info & Feed Button */}
      <div className="flex-1">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-xs font-bold text-[#5a3b1f]">Scooby Jr.</span>
          <Sparkles className="h-3 w-3 text-[#e07a5f]" />
        </div>
        
        <p className="text-[11px] text-[#7d5b40] font-medium leading-tight mb-2">
          {isHappy ? "Yum! Happy wagging!" : "Click bone for treats!"}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFeed}
          className="flex items-center gap-1.5 bg-[#e07a5f] hover:bg-[#d0674c] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm transition-colors cursor-pointer"
        >
          <Bone className="h-3 w-3" />
          <span>Feed ({treatCount})</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WaggingPuppy;