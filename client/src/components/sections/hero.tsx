import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import mainLogo from '@/asset/main_logo.jpeg'; // Ensure the correct path to the image

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-black px-4">
      
      {/* Logo Positioned at the Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-[47%] md:left-[45%] lg:left-[45%] transform -translate-x-1/2 w-28 md:w-36 lg:w-40" 
      >
        <img src={mainLogo} alt="Stokn Logo" className="w-full h-auto object-contain" />
      </motion.div>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto px-4 max-w-4xl"
      >
        <div
          className="rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542291026-7eec264c27ff)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '400px',
          }}
        />
      </motion.div>

      {/* Bottom Left Text & Heading (LEFT-ALIGNED) */}
      <div className="absolute bottom-10 left-5 md:left-10 lg:left-16 max-w-5xl text-left">
        
        {/* Animated Heading (Typing Effect) */}
        {isInView && (
          <TypeAnimation
            sequence={[
              "Revolutionizing Sneaker Trading",
              1000, 
            ]}
            wrapper="h1"
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
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
            speed={85}
            repeat={0}
            cursor={false}
          />
        )}
      </div>
    </section>
  );
}
