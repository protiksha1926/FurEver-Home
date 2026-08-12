import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiX, FiMenu, FiChevronDown } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";
import { Scissors, Stethoscope, GraduationCap, Dog, Sparkles } from "lucide-react";

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
    { icon: Scissors, title: "Pet Grooming", desc: "Spa & styling packages", href: "#services", badge: "Popular" },
    { icon: Stethoscope, title: "Vet Consultations", desc: "Licensed checkups", href: "#services" },
    { icon: GraduationCap, title: "Dog Training", desc: "Obedience lessons", href: "#services" },
    { icon: Dog, title: "Pet Sitting", desc: "In-home caregivers", href: "#services" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-4 lg:px-12 py-3 transition-all duration-300">
      <header className={`max-w-7xl mx-auto rounded-3xl md:rounded-full border bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-[#e07a5f]/10 border-[#e8d7c8] py-2.5 px-6" : "border-[#e8d7c8]/80 py-3 px-6"
      }`}>
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#e07a5f] to-[#f4a261] text-white shadow-md shadow-[#e07a5f]/30"
            >
              <FaPaw className="text-lg" />
            </motion.div>
            
            <span className="text-2xl font-extrabold text-[#5a3b1f] tracking-tight group-hover:text-[#e07a5f] transition-colors leading-none">
              Scooby<span className="text-[#e07a5f]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 font-semibold text-[#5a3b1f] text-xs uppercase tracking-wide">
            <a href="#hero" className="px-3.5 py-1.5 rounded-full hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">Home</a>
            
            <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <a href="#services" className="px-3.5 py-1.5 rounded-full flex items-center gap-1 hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">
                Services <FiChevronDown className={`transition-transform duration-200 ${showDropdown ? "rotate-180 text-[#e07a5f]" : ""}`} />
              </a>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.98 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 border border-[#e8d7c8] shadow-2xl shadow-[#e07a5f]/15 rounded-3xl p-3 z-50 capitalize backdrop-blur-md"
                  >
                    {serviceCategories.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <a key={idx} href={item.href} className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#fff0e5] group transition-colors relative">
                          <div className="h-9 w-9 rounded-xl bg-[#e07a5f]/10 text-[#e07a5f] group-hover:bg-[#e07a5f] group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                            <IconComp className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-extrabold text-[#5a3b1f] group-hover:text-[#e07a5f] transition-colors">{item.title}</p>
                              {item.badge && (
                                <span className="text-[9px] font-bold text-[#e07a5f] bg-[#e07a5f]/10 px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#7d5b40] font-medium">{item.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#why-us" className="px-3.5 py-1.5 rounded-full hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">Why Us</a>
            <a href="#about" className="px-3.5 py-1.5 rounded-full hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">About</a>
            <a href="#testimonials" className="px-3.5 py-1.5 rounded-full hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">Reviews</a>
            <a href="#faqs" className="px-3.5 py-1.5 rounded-full hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">FAQs</a>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden lg:flex items-center gap-1.5">
            <button className="p-2 rounded-full text-[#5a3b1f] hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors cursor-pointer">
              <FiSearch className="text-base" />
            </button>
            <button className="p-2 rounded-full text-[#5a3b1f] hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors relative cursor-pointer">
              <FiHeart className="text-base" />
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 bg-[#e07a5f] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">2</span>
            </button>
            <button className="p-2 rounded-full text-[#5a3b1f] hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors relative cursor-pointer">
              <FiShoppingBag className="text-base" />
              <span className="absolute top-0.5 right-0.5 h-3.5 w-3.5 bg-[#e07a5f] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">3</span>
            </button>
            <button className="p-2 rounded-full text-[#5a3b1f] hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors mr-2 cursor-pointer">
              <FiUser className="text-base" />
            </button>
            
            <motion.a 
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="#services" 
              className="bg-[#5a3b1f] hover:bg-[#432b17] text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors shadow-md shadow-[#5a3b1f]/15"
            >
              Book Appointment
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden h-9 w-9 rounded-xl bg-[#f5e9df]/70 text-[#5a3b1f] flex items-center justify-center border border-[#e8d7c8] cursor-pointer"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden mt-3 pt-3 border-t border-[#e8d7c8]/60 flex flex-col gap-1.5 font-semibold text-[#5a3b1f] text-xs uppercase"
            >
              <a href="#hero" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors flex items-center justify-between">
                <span>Home</span>
                <span className="text-xs text-[#e07a5f]">🐾</span>
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors flex items-center justify-between">
                <span>Services</span>
                <span className="text-[10px] bg-[#e07a5f]/10 text-[#e07a5f] px-2 py-0.5 rounded-full">Popular</span>
              </a>
              <a href="#why-us" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-colors">Why Us</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">About</a>
              <a href="#testimonials" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">Reviews</a>
              <a href="#faqs" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 rounded-2xl hover:bg-[#e07a5f]/10 hover:text-[#e07a5f] transition-all">FAQs</a>
              
              <div className="pt-2">
                <a 
                  href="#services" 
                  onClick={() => setMenuOpen(false)} 
                  className="w-full flex items-center justify-center gap-2 bg-[#e07a5f] text-white font-bold py-3 rounded-2xl shadow-lg shadow-[#e07a5f]/25 text-xs tracking-wider"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;