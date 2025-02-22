import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Warehouse } from "lucide-react";

export default function Investing() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            When You Invest
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-900/20 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Warehouse className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Secure Storage</h3>
              <p className="text-gray-300">
                Your sneakers are maintained in state-of-the-art vaults with minimal fees
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-900/20 border-pink-500/20">
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Global Access</h3>
              <p className="text-gray-300">
                Trade your digital assets anywhere in the world
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/20 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Community</h3>
              <p className="text-gray-300">
                Join a worldwide network of collectors and investors
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
