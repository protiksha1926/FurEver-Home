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

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14">
      
      {/* Decorative Warm Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[50rem] rounded-full bg-[#f3ded0]/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-[#f5e9df]/60 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm shadow-sm">
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
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/70 p-7 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/10 hover:border-[#e07a5f]/40 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
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