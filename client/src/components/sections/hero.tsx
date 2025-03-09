import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import subLogo from '@/asset/sub_logo.png'; // Ensure correct path
import globeImage from '@/asset/globe.png'; // Ensure correct path

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between relative overflow-hidden px-4">
      
      {/* Logo Positioned at the Top Center */}
      <motion.div
  initial={{ opacity: 0 }} // Only fade-in
  animate={{ opacity: 1 }} // No movement
  transition={{ duration: 0.8 }}
  className="absolute top-6 left-[47%] md:left-[45%] lg:left-[45%] transform -translate-x-1/2 w-28 md:w-36 lg:w-40" 
>
  <img src={subLogo} alt="Stokn Logo" />
</motion.div>





      {/* 🌍 Globe Positioned in Hero */}
      

      {/* Bottom Left Text & Heading (LEFT-ALIGNED) */}
      <div className="absolute bottom-10 left-5 md:left-10 lg:left-16 max-w-5xl text-left z-10">
        
        {/* Animated Heading (Typing Effect) */}
        {isInView && (
          <TypeAnimation
            sequence={[
              "Revolutionizing Sneaker Trading",
              1000, 
            ]}
            wrapper="h1"
            className="text-2xl md:text-3xl lg:text-3xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            speed={50}
            repeat={0}
            cursor={true}
          />
        )}

        {/* Animated Body Text */}
        {isInView && (
          <TypeAnimation
            sequence={[
              "", 
              1000,
              "Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets, creating a seamless marketplace for collectors and investors alike.",
              1000,
            ]}
            wrapper="p"
            className="text-lg md:text-xl lg:text-2xl font-body text-gray-300"
            speed={75}
            repeat={0}
            cursor={false}
          />
        )}
      </div>
    </section>
  );
}
