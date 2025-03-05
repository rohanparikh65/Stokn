import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Warehouse } from "lucide-react";

export default function Investing() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 min-h-screen flex flex-col">
      {/* Heading - Moved Above the Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-12"
      >
        <h2 className="text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left">
          Stage 4: When You Invest
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1587563871167-1ee9c731aefb)',
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
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Warehouse className="h-8 w-8 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Digital Ownership</h3>
                      <p className="text-gray-300">
                        Gain digital ownership of verified sneakers without worrying about shipping, storage, or maintenance fees. Your investment is securely stored in our state-of-the-art vaults.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="h-8 w-8 text-pink-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-pink-400">Global Marketplace</h3>
                      <p className="text-gray-300">
                        Access a worldwide network of collectors and buyers. Trade your digital assets anywhere in the world, opening up unlimited opportunities for future sales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-900/20 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Community Access</h3>
                      <p className="text-gray-300">
                        Join an exclusive community of sneaker enthusiasts and investors. Collaborate, trade, and grow your investment portfolio within our trusted network.
                      </p>
                    </div>
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
