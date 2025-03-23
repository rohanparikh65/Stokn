import { useState } from "react";
import { Link } from "wouter"; // ✅ Use Wouter's Link
import { Menu } from "lucide-react"; // ✅ Three-dot menu icon
import stoknLogo from "@/asset/sub_logo.png"; // ✅ Ensure correct path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0C1821]">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center relative">
        
        {/* 🍔 Three-dot Menu (Left Side) */}
        {/* <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          <Menu size={24} />
        </button> */}

        {/* 🔹 STOKN Logo (Centered with responsive padding) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pt-2 sm:pt-6">
          <img 
            src={stoknLogo} 
            alt="STOKN Logo" 
            className="h-16 sm:h-24 md:h-32 max-w-[140px] sm:max-w-[180px] md:max-w-[240px] w-auto object-contain"
          />
        </div>

        {/* 🔹 Desktop Navigation Links */}
        {/* <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white cursor-pointer">
            Home
          </Link>
          <Link href="/contact" className="text-white cursor-pointer">
            Contact
          </Link>
          
        </div> */}
      </div>

      {/* 📜 Mobile Menu (Opens on Click) */}
      {/* {isOpen && (
        <div className="absolute left-4 top-14 bg-black p-4 rounded-lg shadow-lg">
          <Link href="/" className="block text-white py-2 cursor-pointer">
            Home
          </Link>
          <Link href="/contact" className="block text-white py-2 cursor-pointer">
            Contact
          </Link>
          <Link href="/meet-the-team" className="block text-white py-2 cursor-pointer">
            Meet the Team
          </Link>
        </div>
      )} */}
    </nav>
  );
}
