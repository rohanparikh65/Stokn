import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
import { useRef } from "react";

export default function Storage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black min-h-screen flex flex-col">
      {/* Typing Animation for Heading (Only starts when in view) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-12"
      >
        {isInView && (
          <TypeAnimation
            sequence={[
              "Stage 1: Secure Storage Solutions", // Type the heading
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

      <div className="container mx-auto px-4 flex-grow flex items-center">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1529333320936-e2193f4e3b32)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px' // Reduced size for better balance
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              At Stokn, we partner exclusively with authorized resellers who have been pillars of the sneaker industry for years.
              Each reseller in our network has built a successful brand through decades of experience.
            </p>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-purple-900/20 border-purple-500/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Shield className="text-purple-400 h-7 w-7" /> {/* Reduced icon size */}
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-purple-400">Rigorous Authentication</h3>
                      <p className="text-base text-gray-400">Every pair undergoes strict authentication processes</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-pink-900/20 border-pink-500/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="text-pink-400 h-7 w-7" /> {/* Reduced icon size */}
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-pink-400">State-of-the-art Vaults</h3>
                      <p className="text-base text-gray-400">Secure storage facilities with climate control</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
