import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import { useRef } from "react";

// Image path
import physicalShoe from '@/asset/tokenise.png';

export default function Tokenization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        {/* Heading (Restored Type Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {isInView && (
            <TypeAnimation
              sequence={["Stage 2: Digitalize Physical Asset", 1000]}
              wrapper="h2"
              className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Static Image */}
          <div className="relative w-full h-96 mx-auto overflow-hidden">
            <motion.img
              src={physicalShoe}
              alt="Physical Shoe"
              className="absolute w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="p-6 flex items-start gap-4">
                <CheckCircle className="text-purple-400 h-7 w-7" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-purple-400">
                    Authenticity-Backed NFTs
                  </h3>
                  <p className="text-xl text-gray-400">
                    Every authenticated sneaker is given a unique digital twin, ensuring a secure and transparent ownership record.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 space-y-6">
              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <Globe className="text-pink-400 h-7 w-7" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-pink-400">
                      Instant Marketplace Listing
                    </h3>
                    <p className="text-xl text-gray-400">
                      The NFT-backed sneaker is instantly listed on our marketplace, making it accessible to a global audience without physical movement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
