import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#311d0e] text-white pt-20 pb-8 px-6 md:px-20 border-t border-[#4e2f18]">
      
      {/* 🐾 Subtle Paw Print Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-soft-light bg-[radial-gradient(#5a3b1f_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-[#e07a5f]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-[#f2cc8f]/5 blur-3xl pointer-events-none" />

      {/* 🐾 Subtle Background Paw Icons */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[#e07a5f]/5 pointer-events-none text-6xl">
        🐾
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand / Logo Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-white leading-none">
            Scooby<span className="text-[#e07a5f]">.</span>
          </h2>
          <p className="text-sm text-[#e6d9cd] font-medium leading-relaxed max-w-xs">
            Your pet's second-best friend (after you!). We provide top-notch care, grooming, food & more.
          </p>
          <div className="flex gap-4.5 pt-2">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="h-9 w-9 rounded-full bg-[#4a2e18] flex items-center justify-center text-white/80 hover:bg-[#e07a5f] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">Quick Links</h3>
          <ul className="space-y-3 text-[#e6d9cd] text-sm font-medium">
            {["Home", "Services", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#e07a5f] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#e07a5f] opacity-0 group-hover:opacity-100 transition-opacity">🐾</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">Our Services</h3>
          <ul className="space-y-3 text-[#e6d9cd] text-sm font-medium">
            {["Pet Grooming", "Vet Consultation", "Pet Food Delivery", "Training & Boarding"].map((service) => (
              <li key={service} className="hover:text-[#e07a5f] transition-colors cursor-pointer flex items-center gap-1.5">
                <span className="text-[#e07a5f]/40">🐾</span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">Contact Us</h3>
          <ul className="space-y-4 text-[#e6d9cd] text-sm font-medium">
            <li className="flex items-start gap-2.5">
              <span className="text-[#e07a5f]">✉️</span>
              <div>
                <p className="text-white/70 font-semibold text-[10px] uppercase tracking-wider">Email</p>
                <p className="text-[#e6d9cd]">support@Scooby.com</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#e07a5f]">📞</span>
              <div>
                <p className="text-white/70 font-semibold text-[10px] uppercase tracking-wider">Phone</p>
                <p className="text-[#e6d9cd]">+91 98765 43210</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#e07a5f]">📍</span>
              <div>
                <p className="text-white/70 font-semibold text-[10px] uppercase tracking-wider">Location</p>
                <p className="text-[#e6d9cd]">Navi Mumbai, India</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-[#54361b] mt-16 pt-8 text-center text-[#d5c1b3] text-sm font-medium relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Scooby Pet Services. developed by <span className="text-[#e07a5f]">Champion Programmers</span> | All rights reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;