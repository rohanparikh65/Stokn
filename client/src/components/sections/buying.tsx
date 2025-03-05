import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck } from "lucide-react";

export default function Buying() {
  return (
    <section className="py-20 bg-black min-h-screen flex flex-col">
      {/* Heading - Now Positioned Above the Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-12"
      >
        <h2 className="text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left">
          Stage 3: When You Buy
        </h2>
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
