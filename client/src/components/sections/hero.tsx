import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-black to-black/80">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 z-0" />

      {/* Company Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-12 relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          STOKN
        </h1>
      </motion.div>

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
            height: '400px'
          }}
        />
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4 pb-20 relative z-10"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Revolutionizing Sneaker Trading
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets,
            creating a seamless marketplace for collectors and investors alike.
          </p>
        </div>
      </motion.div>
    </section>
  );
}