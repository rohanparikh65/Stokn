import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 z-0" />
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542291026-7eec264c27ff)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Revolutionizing Sneaker Trading
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets,
            creating a seamless marketplace for collectors and investors alike.
          </p>
        </div>
      </motion.div>
    </section>
  );
}