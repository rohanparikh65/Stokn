import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Storage from "@/components/sections/storage";
import Tokenization from "@/components/sections/tokenization";
import Buying from "@/components/sections/buying";
import Investing from "@/components/sections/investing";
import InterestForm from "@/components/sections/interest-form";
import globeImage from "@/asset/globe.png";

export default function Home() {
  return (
    <main className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory text-white">
      <Navbar />

      {/* 🌍 Globe Positioned Correctly */}
      <motion.img
        src={globeImage}
        alt="Digital Globe"
        className="absolute sm:right-[-99%] md:right-[-50%] lg:right-[-40%] top-[-10%] 
                   h-[120%] md:h-[130%] lg:h-[140%] max-w-none object-cover 
                   pointer-events-none -z-10 overflow-hidden"
        initial={{ opacity: 0, scale: 1.2, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* ✅ Fix: Ensure sections don't get cut off */}
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <Hero />
      </div>
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <Storage />
      </div>
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <Tokenization />
      </div>
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <Investing />
      </div>
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <Buying />
      </div>
      <div className="snap-start h-screen flex flex-col justify-center pb-[env(safe-area-inset-bottom)]">
        <InterestForm />
      </div>
    </main>
  );
}
