// import { motion, useInView } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Package, Truck } from "lucide-react";
// import { useRef } from "react";

// import shoe from '@/asset/buying.png'; // Imported Shoe Image

// export default function Buying() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="py 20 min-h-screen flex items-center ">
//       <div className="container mx-auto px-4">
//         {/* Typing Animation for Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           {isInView && (
//             <TypeAnimation
//               sequence={["Stage 4: When you buy", 1000]}
//               wrapper="h2"
//               className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-left"
//               speed={50}
//               repeat={0}
//               cursor={false}
//             />
//           )}
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image (Replaced with Imported Shoe Image) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="rounded-lg overflow-hidden w-full h-96 flex justify-center items-center"
//           >
//             <img 
//               src={shoe} 
//               alt="Shoe Image" 
//               className="w-full h-full object-cover  rounded-lg shadow-lg"
//             />
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Card className="bg-purple-900/20 border-purple-500/20">
//               <CardContent className="p-6 flex items-start gap-4">
//                 <Package className="text-purple-400 h-7 w-7" />
//                 <div>
//                   <h3 className="text-lg md:text-xl font-semibold text-purple-400">
//                     Instant NFT Redemption
//                   </h3>
//                   <p className="text-xl text-gray-400">
//                     Upon purchase, the NFT is redeemed immediately, verifying ownership and initiating fulfillment.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             <div className="mt-6 space-y-6">
//               <Card className="bg-pink-900/20 border-pink-500/20">
//                 <CardContent className="p-6 flex items-start gap-4">
//                   <Truck className="text-pink-400 h-7 w-7" />
//                   <div>
//                     <h3 className="text-lg md:text-xl font-semibold text-pink-400">
//                       Direct Shipment
//                     </h3>
//                     <p className="text-xl text-gray-400">
//                       The authenticated sneaker is shipped to your desired location, ensuring a smooth and trusted transaction.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion, useInView } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Package, Truck } from "lucide-react";
// import { useRef } from "react";

// import shoe from '@/asset/buying.png'; // Imported Shoe Image

// export default function Buying() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="pt-20 py-12 md:py-20 flex items-center">
//     <div className="container mx-auto px-4">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="mb-6 md:mb-12 text-center"
//       >
//         {isInView && (
//           <TypeAnimation
//             sequence={["Stage 4: When you buy", 1000]}
//             wrapper="h2"
//             className="text-lg md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
//             speed={50}
//             repeat={0}
//             cursor={false}
//           />
//         )}
//       </motion.div>

//       {/* Content Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 place-items-center justify-center">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-lg overflow-hidden w-full max-w-md md:max-w-lg flex justify-center items-center"
//         >
//           <img
//             src={shoe}
//             alt="Shoe Image"
//             className="w-full h-auto object-contain rounded-lg shadow-lg"
//           />
//         </motion.div>

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full max-w-md md:max-w-lg"
//         >
//           <Card className="bg-purple-900/20 border-purple-500/20">
//             <CardContent className="p-4 md:p-6 flex items-start gap-4">
//               <Package className="text-purple-400 h-6 md:h-7 w-6 md:w-7" />
//               <div>
//                 <h3 className="text-md md:text-xl font-semibold text-purple-400">
//                   Instant NFT Redemption
//                 </h3>
//                 <p className="text-sm md:text-xl text-gray-400">
//                   Upon purchase, the NFT is redeemed immediately, verifying ownership and initiating fulfillment.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
//             <Card className="bg-pink-900/20 border-pink-500/20">
//               <CardContent className="p-4 md:p-6 flex items-start gap-4">
//                 <Truck className="text-pink-400 h-6 md:h-7 w-6 md:w-7" />
//                 <div>
//                   <h3 className="text-md md:text-xl font-semibold text-pink-400">
//                     Direct Shipment
//                   </h3>
//                   <p className="text-sm md:text-xl text-gray-400">
//                     The authenticated sneaker is shipped to your desired location, ensuring a smooth and trusted transaction.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>

//   );
// }

import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import shoe from '@/asset/buying.png';

export default function Buying() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      className={`w-full overflow-x-hidden px-4 bg-gradient-to-b from-[#0C1821] to-black ${
        isMobile ? "" : "flex items-center"
      } scroll-pb-32`}
      style={{
        paddingTop: isMobile ? "2.5rem" : "5rem",
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
              sequence={["Stage 4: When you buy", 1000]}
              wrapper="h2"
              className="text-base md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </motion.div>

        {/* Content Layout */}
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
            className={`rounded-lg overflow-hidden w-full mx-auto ${
              isMobile ? "max-w-[80%]" : "max-w-md md:max-w-lg"
            } flex justify-center items-center`}
          >
            <img
              src={shoe}
              alt="Shoe Image"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full mx-auto ${
              isMobile ? "max-w-[90%]" : "max-w-md md:max-w-lg"
            } flex flex-col items-start justify-center`}
          >
            <div className={isMobile ? "space-y-2" : "space-y-6"}>
              <Card className="bg-purple-900/20 border-purple-500/20">
                <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                  <Package className="text-purple-400 h-5 md:h-7 w-5 md:w-7" />
                  <div>
                    <h3 className="text-sm md:text-xl font-semibold text-purple-400">
                      Instant NFT Redemption
                    </h3>
                    <p className="text-sm md:text-xl text-gray-400">
                      Upon purchase, the NFT is redeemed immediately, verifying ownership and initiating fulfillment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-900/20 border-pink-500/20">
                <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                  <Truck className="text-pink-400 h-5 md:h-7 w-5 md:w-7" />
                  <div>
                    <h3 className="text-sm md:text-xl font-semibold text-pink-400">
                      Direct Shipment
                    </h3>
                    <p className="text-sm md:text-xl text-gray-400">
                      The authenticated sneaker is shipped to your desired location, ensuring a smooth and trusted transaction.
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
