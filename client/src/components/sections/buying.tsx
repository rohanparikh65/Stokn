import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck } from "lucide-react";
import { useRef } from "react";

import shoe from '@/asset/shoe.jpeg'; // Imported Shoe Image

export default function Buying() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center ">
      <div className="container mx-auto px-4">
        {/* Typing Animation for Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {isInView && (
            <TypeAnimation
              sequence={["Stage 4: When you buy", 1000]}
              wrapper="h2"
              className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image (Replaced with Imported Shoe Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden w-full h-96 flex justify-center items-center"
          >
            <img 
              src={shoe} 
              alt="Shoe Image" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="p-6 flex items-start gap-4">
                <Package className="text-purple-400 h-7 w-7" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-purple-400">
                    Instant NFT Redemption
                  </h3>
                  <p className="text-xl text-gray-400">
                    Upon purchase, the NFT is redeemed immediately, verifying ownership and initiating fulfillment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 space-y-6">
              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <Truck className="text-pink-400 h-7 w-7" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-pink-400">
                      Direct Shipment
                    </h3>
                    <p className="text-xl text-gray-400">
                      The authenticated sneaker is shipped to your desired location, ensuring a smooth and trusted transaction.
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
