import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPaw } from "react-icons/fa";
import { Mail, Phone, MapPin, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#311d0e] text-white pt-20 pb-8 px-6 md:px-20 border-t border-[#4e2f18]">
      
      {/* 🐾 Black Dot Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-soft-light bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Warm Glow Orbs */}
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-[#e07a5f]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-[#f2cc8f]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand / Logo Section */}
        <div className="space-y-4">
          <a href="#hero" className="inline-flex items-center gap-2.5 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#e07a5f] to-[#f4a261] text-white shadow-md shadow-[#e07a5f]/30"
            >
              <FaPaw className="text-lg" />
            </motion.div>
            <span className="text-3xl font-extrabold tracking-tight text-white leading-none">
              Scooby<span className="text-[#e07a5f]">.</span>
            </span>
          </a>

          <p className="text-sm text-[#e6d9cd] font-medium leading-relaxed max-w-xs">
            Your pet's second-best friend. We provide top-notch grooming, medical care, food delivery, and boarding with 100% love.
          </p>

          <div className="flex gap-3 pt-2">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="h-9 w-9 rounded-xl bg-[#4a2e18] border border-[#5c3b20] flex items-center justify-center text-white/80 hover:bg-[#e07a5f] hover:text-white hover:border-[#e07a5f] transition-colors duration-300 shadow-sm"
              >
                <Icon className="text-sm" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight flex items-center gap-2">
            <span>Quick Links</span>
            <Sparkles className="h-4 w-4 text-[#e07a5f]" />
          </h3>
          <ul className="space-y-3 text-[#e6d9cd] text-sm font-medium">
            {[
              { name: "Home", href: "#hero" },
              { name: "Services", href: "#services" },
              { name: "Why Choose Us", href: "#why-us" },
              { name: "About Us", href: "#about" },
              { name: "Reviews", href: "#testimonials" },
              { name: "FAQs", href: "#faqs" },
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-[#e07a5f] transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#e07a5f] text-xs opacity-0 group-hover:opacity-100 transition-opacity">🐾</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">Our Services</h3>
          <ul className="space-y-3 text-[#e6d9cd] text-sm font-medium">
            {[
              "Pet Grooming & Spa",
              "Certified Vet Consultation",
              "Nutritious Food Delivery",
              "Dog Training Lessons",
              "In-Home Pet Sitting",
              "24/7 Care Support",
            ].map((service) => (
              <li key={service}>
                <a href="#services" className="hover:text-[#e07a5f] transition-colors flex items-center gap-2 group">
                  <span className="text-[#e07a5f]/40 group-hover:text-[#e07a5f] text-xs transition-colors">🐾</span>
                  <span>{service}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">Contact Us</h3>
          <ul className="space-y-4 text-[#e6d9cd] text-sm font-medium">
            <li className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#4a2e18] flex items-center justify-center text-[#e07a5f] shrink-0 mt-0.5">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white/60 font-semibold text-[10px] uppercase tracking-wider">Email Us</p>
                <p className="text-[#e6d9cd]">support@scooby.com</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#4a2e18] flex items-center justify-center text-[#e07a5f] shrink-0 mt-0.5">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white/60 font-semibold text-[10px] uppercase tracking-wider">Call Us</p>
                <p className="text-[#e6d9cd]">+91 98765 43210</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#4a2e18] flex items-center justify-center text-[#e07a5f] shrink-0 mt-0.5">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white/60 font-semibold text-[10px] uppercase tracking-wider">Location</p>
                <p className="text-[#e6d9cd]">Navi Mumbai, India</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-[#54361b] mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#d5c1b3] text-xs font-medium relative z-10">
        <p className="flex items-center gap-1.5">
          &copy; {new Date().getFullYear()} Scooby Pet Services. Built with <Heart className="h-3.5 w-3.5 fill-[#e07a5f] text-[#e07a5f]" /> | All rights reserved.
        </p>
        
        <div className="flex gap-6 text-white/70">
          <a href="#" className="hover:text-[#e07a5f] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#e07a5f] transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;