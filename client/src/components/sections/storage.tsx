import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

export default function Storage() {
  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Secure Storage Solutions
            </h2>
            <p className="text-gray-300 mb-6">
              At Stokn, we partner exclusively with authorized resellers who have been pillars of the sneaker industry for years.
              Each reseller in our network has built a successful brand through decades of experience.
            </p>
            <div className="space-y-4">
              <Card className="bg-purple-900/20 border-purple-500/20">
                <CardContent className="p-4 flex items-start gap-4">
                  <Shield className="text-purple-400 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-purple-400">Rigorous Authentication</h3>
                    <p className="text-sm text-gray-400">Every pair undergoes strict authentication processes</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-4 flex items-start gap-4">
                  <CheckCircle className="text-pink-400 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-pink-400">State-of-the-art Vaults</h3>
                    <p className="text-sm text-gray-400">Secure storage facilities with climate control</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div 
            className="rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1529333320936-e2193f4e3b32)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
