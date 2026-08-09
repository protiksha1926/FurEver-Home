import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Sparkles, Star, CheckCircle2, Bone } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Dog Parent to Bruno",
    avatar: "🐶",
    feedback:
      "Scooby is a blessing! My dog loves their grooming service, and I've never seen him so excited for a bath. Highly recommended!",
  },
  {
    name: "Rahul Desai",
    role: "Cat Parent to Milo",
    avatar: "🐱",
    feedback:
      "I was skeptical at first, but their vet consultation was super smooth. The doctor was kind and knowledgeable. Felt like home service!",
  },
  {
    name: "Sneha Iyer",
    role: "Pet Parent to Luna",
    avatar: "🐾",
    feedback:
      "Their pet food delivery is always on time and the quality is top-notch. My cat loves their treats more than anything!",
  },
  {
    name: "Arjun Patel",
    role: "Puppy Parent to Rocky",
    avatar: "🐕",
    feedback:
      "The professionalism of their trainers is commendable. My puppy learned basic commands in just a week. Great service!",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14 border-b border-[#e8d7c8]/60">
      
      {/* 🌊 Top Blend Layer for Smooth Section Continuity */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f9ede2] to-transparent pointer-events-none z-10" />

      {/* 🐾 Subtle Black Dot Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 🦴 Floating Animated Bone Accent */}
      <motion.div
        animate={{ 
          y: [0, -12, 0], 
          rotate: [0, 15, -10, 0]
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-white/80 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Loved By Pet Parents</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            What Pet Parents <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Say</span>
          </h2>

          <p className="text-[#5a3b1f]/90 text-base md:text-lg font-medium leading-relaxed">
            Real stories from happy customers who've experienced the Scooby difference.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group bg-white/80 p-8 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-2xl hover:shadow-[#e07a5f]/15 hover:border-[#e07a5f]/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between relative cursor-pointer z-10"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f] group-hover:bg-[#e07a5f] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FaQuoteLeft className="text-base" />
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-[#5a3b1f]/90 text-base md:text-lg leading-relaxed font-medium mb-6 italic">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#e8d7c8]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-[#fff0e5] border border-[#e8d7c8] text-xl flex items-center justify-center shadow-sm shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#5a3b1f] text-sm group-hover:text-[#e07a5f] transition-colors flex items-center gap-1.5">
                      {testimonial.name}
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#e07a5f]" />
                    </h3>
                    <p className="text-xs text-[#7d5b40] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;