import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-black">
      {/* Company Logo - Commented Out for Now */}
      {/*
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-12 relative z-10 flex justify-center"
      >
        <img
          src={stLogo}
          alt="STOKN Logo"
          className="object-contain h-32 md:h-48"
        />
      </motion.div>
      */}

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto px-4 max-w-2xl"
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

      {/* Typing Animation for Hero Text - Left Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 pb-20 relative z-10 text-left"
      >
        <div className="max-w-3xl">
          {/* Animated Heading (Left-aligned) */}
          <TypeAnimation
  sequence={[
    "Revolutionizing Sneaker Trading", // Type the full phrase
    1000, // Pause for 1 second
  ]}
  wrapper="h2"
  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left max-w-full"
  speed={50} // Typing speed
  repeat={0} // Ensures animation plays only once
  cursor={true} // Keep cursor for heading
/>


          {/* Animated Subtext (Delayed Start, No Blinking Cursor) */}
          <TypeAnimation
            sequence={[
              2500, // Wait for the heading to finish typing before starting
              "Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets, creating a seamless marketplace for collectors and investors alike.",
              1000 // Pause after typing
            ]}
            wrapper="p"
            className="text-xl md:text-2xl font-body text-gray-300 mt-4 text-left"
            speed={90} // Adjust typing speed
            repeat={0} // Only play animation once
            cursor={false} // Remove cursor for body text
          />
        </div>
      </motion.div>
    </section>
  );
}

