import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Warehouse, Users, Package, Truck } from "lucide-react";
import { useRef } from "react";

// Storage.tsx
import storage from "@/asset/storage.png";
export default function Storage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          {isInView && (
            <TypeAnimation sequence={["Stage 1: Secure Storage Solutions", 1000]} wrapper="h2" className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left" speed={50} repeat={0} cursor={false} />
          )}
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-lg overflow-hidden w-full h-96 flex justify-center items-center">
            <img src={storage} alt="Secure Storage" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="p-6 flex items-start gap-4">
                <Shield className="text-purple-400 h-7 w-7" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-purple-400">Ship to Our Vaults</h3>
                  <p className="text-xl text-gray-400">Send sneakers to our secure locations for safe handling and seamless onboarding.</p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 space-y-6">
              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="text-pink-400 h-7 w-7" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-pink-400">Verified & Stored</h3>
                    <p className="text-xl text-gray-400">Each sneaker is authenticated by experts and stored in climate-controlled vaults.</p>
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
