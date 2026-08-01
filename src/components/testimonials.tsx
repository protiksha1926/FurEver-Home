import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Dog Parent",
    feedback:
      "Scooby is a blessing! My dog loves their grooming service, and I've never seen him so excited for a bath. Highly recommended!",
  },
  {
    name: "Rahul Desai",
    role: "Cat Parent",
    feedback:
      "I was skeptical at first, but their vet consultation was super smooth. The doctor was kind and knowledgeable. Felt like home service!",
  },
  {
    name: "Sneha Iyer",
    role: "Pet Parent",
    feedback:
      "Their pet food delivery is always on time and the quality is top-notch. My cat loves their treats more than anything!",
  },
  {
    name: "Arjun Patel",
    role: "Puppy Parent",
    feedback:
      "The professionalism of their trainers is commendable. My puppy learned basic commands in just a week. Great service!",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf7f2] via-[#f9f0e8] to-[#fdf7f2] py-24 px-6 md:px-14">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-[#f3ded0]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-[#e8d7c8]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 border border-[#d6bda8] bg-[#f5e9df]/60 text-[#5a3b1f] px-3.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e07a5f]" />
            <span>Loved By Pet Parents</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5a3b1f] tracking-tight leading-tight">
            What Pet Parents <span className="bg-gradient-to-r from-[#5a3b1f] via-[#e07a5f] to-[#5a3b1f] bg-clip-text text-transparent">Say</span>
          </h2>

          <p className="text-[#5a3b1f]/90 text-base md:text-lg font-medium leading-relaxed">
            Real stories from happy customers who've experienced the Scooby difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/70 p-8 rounded-3xl border border-[#e8d7c8]/80 shadow-sm hover:shadow-xl hover:shadow-[#e07a5f]/10 hover:border-[#e07a5f]/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#e07a5f]/10 flex items-center justify-center text-[#e07a5f]">
                    <FaQuoteLeft className="text-lg" />
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-[#5a3b1f]/90 text-base md:text-lg leading-relaxed font-medium mb-6">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#e8d7c8]/50 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#5a3b1f] text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-[#5a3b1f] text-sm group-hover:text-[#e07a5f] transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-[#7d5b40] font-medium">
                    {testimonial.role}
                  </p>
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