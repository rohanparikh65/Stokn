import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import physicalShoe from '@/asset/tokenise.png';

export default function Tokenization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (isInView) setTriggerAnimation(true);
  }, [isInView]);

  return (
    <section ref={ref} className="pt-20 py-12 md:py-20 flex items-center">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-12 text-center"
        >
          {triggerAnimation && (
            <TypeAnimation
              sequence={["Stage 2: Digitalize Physical Asset", 1000]}
              wrapper="h2"
              className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 place-items-center justify-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden w-full max-w-md md:max-w-lg flex justify-center items-center"
          >
            <img
              src={physicalShoe}
              alt="Physical Shoe"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={triggerAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md md:max-w-lg"
          >
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="p-4 md:p-6 flex items-start gap-4">
                <CheckCircle className="text-purple-400 h-6 md:h-7 w-6 md:w-7" />
                <div>
                  <h3 className="text-md md:text-xl font-semibold text-purple-400">
                    Authenticity-Backed NFTs
                  </h3>
                  <p className="text-sm md:text-xl text-gray-400">
                    Every authenticated sneaker is given a unique digital twin, ensuring a secure and transparent ownership record.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-4 md:p-6 flex items-start gap-4">
                  <Globe className="text-pink-400 h-6 md:h-7 w-6 md:w-7" />
                  <div>
                    <h3 className="text-md md:text-xl font-semibold text-pink-400">
                      Instant Marketplace Listing
                    </h3>
                    <p className="text-sm md:text-xl text-gray-400">
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
