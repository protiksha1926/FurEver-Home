import React from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import { FaPaw } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {

    const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4 lg:px-20">
      <div className="flex justify-between items-center">
        {/* {logo} */}
        <div className=" flex items-center gap-2 text-2xl font-bold text-gray-800">
          <span className="text-2xl rounded-full bg-[#F97316] text-white p-1">
            <FaPaw />
          </span>
          <span>Scooby</span>
        </div>

        {/* {Desktop menu} */}
        <nav className="flex items-center gap-6 text-sm font-medium text-[#2f1e0e]">
          <a href="/" className="hover:text-[#d1733d]">Home</a>
          <div className=" relative group" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <span className="hover:text-[#d1733d] cursor pointer flex items-center gap-1">Services
                <span classNmae="text-xs">
                    <IoMdArrowDropdown size={20} />
                </span>
            </span>
            {showDropdown && (
                <div className=" absolute top-6 left-0 bg-white shadow p-2 rounded z-10 w-40">
                    <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Grooming</a>
                    <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Training</a>
                    <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Pet sitting</a>
                </div>
            )}
          </div>
          <a href="/" className="hover:text-[#d1733d]">About</a>
          <a href="/" className="hover:text-[#d1733d]">Shop</a>
          <a href="/" className="hover:text-[#d1733d]">Blog</a>
          <a href="/" className="hover:text-[#d1733d]">Contact</a>
        </nav>

        {/* {icons} */}
        <div className="flex gap-3 text-[#d1733d] text-lg">
          {[FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, idx) => (
            <span key={idx} className="p2 border border-[#d1733d] rounded-full cursor-pointer hover:bg-[#d1733d] hover:text-white transition">
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
