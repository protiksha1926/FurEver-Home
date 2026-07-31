import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiX, FiMenu, FiChevronDown } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";
import { Scissors, Stethoscope, GraduationCap, Dog } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    { icon: Scissors, title: "Pet Grooming", desc: "Spa & styling packages", href: "#grooming", badge: "Popular" },
    { icon: Stethoscope, title: "Vet Consultations", desc: "Licensed checkups", href: "#vet" },
    { icon: GraduationCap, title: "Dog Training", desc: "Obedience lessons", href: "#training" },
    { icon: Dog, title: "Pet Sitting", desc: "In-home caregivers", href: "#sitting" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-6 lg:px-12 py-3 transition-all duration-300">
      <header className={`max-w-7xl mx-auto rounded-full border bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-lg border-[#e8d7c8] py-2 px-6" : "border-[#e8d7c8]/80 py-2.5 px-6"
      }`}>
        <div className="flex justify-between items-center">
          
          {/* Prominent & Distinct Brand Logo */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#ff7d4e] to-[#e46637] text-white shadow-md shadow-[#ff7d4e]/30"
            >
              <FaPaw className="text-lg" />
            </motion.div>
            
            <span className="text-2xl font-extrabold text-[#1e1e1e] tracking-tight group-hover:text-[#ff7d4e] transition-colors leading-none">
              Scooby<span className="text-[#ff7d4e]">.</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 font-semibold text-[#1e1e1e] text-xs uppercase tracking-wide">
            <a href="#" className="px-3.5 py-1.5 rounded-full hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">Home</a>
            
            <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <button className="px-3.5 py-1.5 rounded-full flex items-center gap-1 hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">
                Services <FiChevronDown className={`transition-transform ${showDropdown ? "rotate-180 text-[#ff7d4e]" : ""}`} />
              </button>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-[#e8d7c8] shadow-xl rounded-2xl p-2 z-50 capitalize"
                  >
                    {serviceCategories.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <a key={idx} href={item.href} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#fff4ee] group">
                          <div className="h-8 w-8 rounded-lg bg-[#ff7d4e]/10 text-[#ff7d4e] flex items-center justify-center shrink-0">
                            <IconComp className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#1e1e1e] group-hover:text-[#ff7d4e]">{item.title}</p>
                            <p className="text-[11px] text-gray-500 font-normal">{item.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#about" className="px-3.5 py-1.5 rounded-full hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">About</a>
            <a href="#shop" className="px-3.5 py-1.5 rounded-full hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">Shop</a>
            <a href="#blog" className="px-3.5 py-1.5 rounded-full hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">Blog</a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] transition-all">Contact</a>
          </nav>

          {/* Right Action Icons */}
          <div className="hidden lg:flex items-center gap-1.5">
            <button className="p-2 rounded-full text-[#1e1e1e] hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e]"><FiSearch className="text-base" /></button>
            <button className="p-2 rounded-full text-[#1e1e1e] hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] relative">
              <FiHeart className="text-base" />
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 bg-[#ff7d4e] text-white text-[9px] font-bold rounded-full flex items-center justify-center">2</span>
            </button>
            <button className="p-2 rounded-full text-[#1e1e1e] hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] relative">
              <FiShoppingBag className="text-base" />
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 bg-[#ff7d4e] text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="p-2 rounded-full text-[#1e1e1e] hover:bg-[#ff7d4e]/10 hover:text-[#ff7d4e] mr-2"><FiUser className="text-base" /></button>
            
            <a href="#book" className="bg-[#1e1e1e] hover:bg-[#ff7d4e] text-white font-semibold text-xs px-4 py-2 rounded-full transition-colors">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5 text-[#1e1e1e]">
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;