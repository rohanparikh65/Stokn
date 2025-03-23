import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <motion.div
        className="w-16 h-16 border-4 border-purple-500 rounded-full"
        animate={{
          rotate: 360,
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}