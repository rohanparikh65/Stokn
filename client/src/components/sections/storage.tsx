import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import storage from "@/asset/storage.png";

export default function Storage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      className={`w-full overflow-x-hidden px-4 bg-gradient-to-b from-[#0C1821] to-[#0C1821] md:from-[#0C1821] md:to-black ${
        isMobile ? "" : "flex items-center"
      } scroll-pb-32`}
      style={{
        paddingTop: isMobile ? "3rem" : "5rem",
        paddingBottom: isMobile
          ? "calc(5rem + env(safe-area-inset-bottom))"
          : "6rem",
      }}
    >
      <div className="container mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-center ${isMobile ? "mb-4" : "mb-12"}`}
        >
          {isInView && (
            <TypeAnimation
              sequence={["Stage 1: Secure Storage Solutions", 1000]}
              wrapper="h2"
              className="text-base md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </motion.div>

        {/* Grid layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center justify-center ${
            isMobile ? "gap-3" : "gap-8 md:gap-12"
          }`}
        >

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`mx-auto rounded-lg overflow-hidden w-full ${
              isMobile ? "max-w-[80%]" : "max-w-md md:max-w-lg"
            } flex justify-center items-center`}
          >
            <img
              src={storage}
              alt="Secure Storage"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full mx-auto ${
              isMobile ? "max-w-[90%]" : "max-w-lg"
            } flex flex-col items-start justify-center`}
          >

            <div className={isMobile ? "space-y-2" : "space-y-6"}>
              <Card className="bg-purple-900/20 border-purple-500/20">
                <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                  <Shield className="text-purple-400 h-5 md:h-7 w-5 md:w-7" />
                  <div>
                    <h3 className="text-sm md:text-xl font-semibold text-purple-400">
                      Ship to Our Vaults
                    </h3>
                    <p className="text-sm md:text-xl text-gray-400">
                      Send sneakers to our secure locations for safe handling
                      and seamless onboarding.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                  <CheckCircle className="text-pink-400 h-5 md:h-7 w-5 md:w-7" />
                  <div>
                    <h3 className="text-sm md:text-xl font-semibold text-pink-400">
                      Verified & Stored
                    </h3>
                    <p className="text-sm md:text-xl text-gray-400">
                      Each sneaker is authenticated by experts and stored in
                      climate-controlled vaults.
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
