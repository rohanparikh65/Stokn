import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
// import stLogo from '/assets/st.png';  // Uncomment when adding logo

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-black px-4">
      
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
        
        {/* Animated Heading (Typing Effect) with Blinking Cursor */}
        {isInView && (
          <TypeAnimation
            sequence={[
              "Revolutionizing Sneaker Trading", // Type the full phrase
              1000, // Pause for 1 second after heading is fully printed
            ]}
            wrapper="h1"
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            speed={50} // Normal typing speed for heading
            repeat={0} // Ensures animation plays only once
            cursor={true} // Keep cursor blinking after typing
          />
        )}

        {/* Animated Body Text (Starts ONLY After Heading Finishes) */}
        {isInView && (
          <TypeAnimation
            sequence={[
              "", // Delay placeholder
              1000, // Wait for heading to finish typing
              "Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets, creating a seamless marketplace for collectors and investors alike.", // Full body text
              1000, // Pause after typing
            ]}
            wrapper="p"
            className="text-lg md:text-xl lg:text-2xl font-body text-gray-300"
            speed={85} // INCREASED SPEED for body text (higher = faster)
            repeat={0} // Ensures animation plays only once
            cursor={false} // No cursor for body text after typing
          />
        )}
      </div>
    </section>
  );
}
