import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Tokenization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Typing Animation for Heading - Only Triggers When in View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {isInView && (
            <TypeAnimation
              sequence={[
                "Stage 2: Digital Transformation", // Type this heading
                1000, // Pause for 1 second
              ]}
              wrapper="h2"
              className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left"
              speed={50} // Typing speed
              repeat={0} // Ensures animation plays only once
              cursor={false} // Remove blinking cursor after typing
            />
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1642465789831-a176eb4a1b14)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          />
          
          {/* Text Content */}
          <motion.div {...fadeInUp}>
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                  Stoknise and Listing
                </h3>
                <p className="text-gray-300">
                  Once your sneakers are safely stored within our network of trusted, industry-seasoned resellers,
                  we begin the digital transformation process. Each sneaker is meticulously converted into a unique NFT—a
                  secure digital certificate of authenticity that encapsulates its full history, verification, and
                  provenance on the blockchain.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
