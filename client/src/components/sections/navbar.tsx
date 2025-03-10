import { useState } from "react";
import { Link } from "wouter"; // ✅ Use Wouter's Link
import { Menu } from "lucide-react"; // ✅ Three-dot menu icon
import stoknLogo from "@/asset/sub_logo.png"; // ✅ Ensure correct path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* 🍔 Three-dot Menu (Left Side) */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          <Menu size={24} />
        </button>

        {/* 🔹 STOKN Logo (Center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={stoknLogo} alt="STOKN Logo" className="h-10 md:h-12 object-contain" />
        </div>

        {/* 🔹 Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white cursor-pointer">
            Home
          </Link>
          <Link href="/contact" className="text-white cursor-pointer">
            Contact
          </Link>
          
        </div>
      </div>

      {/* 📜 Mobile Menu (Opens on Click) */}
      {isOpen && (
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
      )}
    </nav>
  );
}
