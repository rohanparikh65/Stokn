import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { MoreVertical, X } from "lucide-react";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-white hover:text-purple-400 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MoreVertical className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 left-0 h-full w-64 bg-black/95 border-r border-purple-500/20"
          >
            <div className="p-4 flex flex-col space-y-4">
              <button
                onClick={() => setIsOpen(false)}
                className="self-start p-4 text-white hover:text-purple-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <nav className="flex flex-col space-y-4 pt-8">
                <Link href="/">
                  <a className="text-white hover:text-purple-400 transition-colors px-4 py-2">
                    Home
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-white hover:text-purple-400 transition-colors px-4 py-2">
                    Contact the Founder
                  </a>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
