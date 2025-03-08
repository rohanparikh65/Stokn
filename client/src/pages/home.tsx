import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Storage from "@/components/sections/storage";
import Tokenization from "@/components/sections/tokenization";
import Buying from "@/components/sections/buying";
import Investing from "@/components/sections/investing";
import InterestForm from "@/components/sections/interest-form";
import globeImage from "@/asset/globe.svg"; // ✅ Ensure the image exists here

export default function Home() {
  return (
<main className="relative h-screen overflow-y-scroll snap-y snap-mandatory text-white">
      
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
