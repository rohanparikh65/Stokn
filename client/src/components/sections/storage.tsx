import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay: 0.2 }
};

export default function Storage() {
  return (
    <section className="py-20 bg-black min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Stage 1: Secure Storage Solutions
        </h2>
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
              height: '500px'
            }}
          />
          <motion.div {...fadeInUp}>
            <p className="text-xl text-gray-300 mb-8">
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
                    <Shield className="text-purple-400 h-8 w-8" />
                    <div>
                      <h3 className="text-2xl font-semibold text-purple-400">Rigorous Authentication</h3>
                      <p className="text-lg text-gray-400">Every pair undergoes strict authentication processes</p>
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
                    <CheckCircle className="text-pink-400 h-8 w-8" />
                    <div>
                      <h3 className="text-2xl font-semibold text-pink-400">State-of-the-art Vaults</h3>
                      <p className="text-lg text-gray-400">Secure storage facilities with climate control</p>
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