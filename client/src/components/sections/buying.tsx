import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck } from "lucide-react";
import { useRef } from "react";

export default function Buying() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black min-h-screen flex flex-col">
      {/* Typing Animation for Heading - Triggers on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-12"
      >
        {isInView && (
          <TypeAnimation
            sequence={[
              "Stage 4: When You Buy", // Type the heading
              1000, // Pause for 1 second
            ]}
            wrapper="h2"
            className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left"
            speed={50} // Typing speed
            repeat={0} // Only play animation once
            cursor={false} // Remove blinking cursor after typing
          />
        )}
      </motion.div>

      {/* Content Section (Image + Text) */}
      <div className="container mx-auto px-4 flex-grow flex items-center">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px'
            }}
          />

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <Card className="bg-purple-900/20 border-purple-500/20">
                <CardContent className="p-4 flex items-start gap-4">
                  <Package className="text-purple-400 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-purple-400">Instant Verification</h3>
                    <p className="text-gray-300">
                      When you choose to buy, you secure a verified sneaker instantly. Your NFT,
                      representing a physically authenticated sneaker stored in our vault, is redeemed
                      immediately upon purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-4 flex items-start gap-4">
                  <Truck className="text-pink-400 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-pink-400">Direct Shipping</h3>
                    <p className="text-gray-300">
                      The sneaker is then shipped directly to your desired address, ensuring a smooth,
                      trusted transition from digital asset to physical collectible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
