import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar"; // Import Navbar
import Hero from "@/components/sections/hero";
import Storage from "@/components/sections/storage";
import Tokenization from "@/components/sections/tokenization";
import Buying from "@/components/sections/buying";
import Investing from "@/components/sections/investing";
import InterestForm from "@/components/sections/interest-form";
import globeImage from "@/asset/globe.png";

export default function Home() {
  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory text-white">
      
      <Navbar /> {/* ✅ Add Navbar Here */}

      {/* 🌍 Globe Positioned in Home.tsx (Fixed) */}
      <motion.img
        src={globeImage}
        alt="Digital Globe"
        className="absolute right-[-60%] md:right-[-50%] lg:right-[-40%] top-[-10%] h-[120%] md:h-[130%] lg:h-[140%] max-w-none object-cover pointer-events-none -z-10"
        initial={{ opacity: 0, scale: 1.2, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="snap-start h-screen">
        <Hero />
      </div>
      <div className="snap-start h-screen">
        <Storage />
      </div>
      <div className="snap-start h-screen">
        <Tokenization />
      </div>
      <div className="snap-start h-screen">
        <Investing />
      </div>
      <div className="snap-start h-screen">
        <Buying />
      </div>
      <div className="snap-start h-screen">
        <InterestForm />
      </div>
      
    </main>
  );
}
