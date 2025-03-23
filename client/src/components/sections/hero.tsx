// import { motion, useInView } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { useRef } from "react";
// import subLogo from '@/asset/sub_logo.png'; // Ensure correct path

// export default function Hero() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="min-h-screen flex flex-col justify-between relative overflow-hidden px-4">

//       {/* 🌍 Globe Positioned in Hero */}
      

//       {/* Bottom Left Text & Heading (LEFT-ALIGNED) */}
//       <div className="absolute bottom-10 left-5 md:left-10 lg:left-16 max-w-5xl text-left z-10">
        
//         {/* Animated Heading (Typing Effect) */}
//         {isInView && (
//           <TypeAnimation
//             sequence={[
//               "Revolutionizing Sneaker Trading",
//               1000, 
//             ]}
//             wrapper="h1"
//             className="text-lg md:text-3xl lg:text-3xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
//             speed={50}
//             repeat={0}
//             cursor={true}
//           />
//         )}

//         {/* Animated Body Text */}
//         {isInView && (
//           <TypeAnimation
//             sequence={[
//               "", 
//               1000,
//               "Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets, creating a seamless marketplace for collectors and investors alike.",
//               1000,
//             ]}
//             wrapper="p"
//             className="text-lg md:text-xl lg:text-2xl font-body text-gray-300"
//             speed={75}
//             repeat={0}
//             cursor={false}
//           />
//         )}
//       </div>
//     </section>
//   );
// }

import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import subLogo from '@/asset/sub_logo.png';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-end px-4 pt-24 md:pt-20 pb-10 ${
        isMobile ? "relative" : "overflow-hidden"
      }`}
      style={{
        paddingBottom: isMobile ? "7rem" : "5rem", // More than enough space for iOS bottom bar
      }}
    >
      <div
        className={`
          ${isMobile ? "relative" : "absolute bottom-10 left-10 max-w-5xl z-10 text-left"}
        `}
      >
        {isInView && (
          <TypeAnimation
            sequence={["Revolutionizing Sneaker Trading", 1000]}
            wrapper="h1"
            className={`
              font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400
              ${isMobile ? "text-xl leading-tight text-left" : "text-3xl lg:text-4xl text-left"}
            `}
            speed={50}
            repeat={0}
            cursor={true}
          />
        )}

        {isInView && (
          <TypeAnimation
            sequence={[
              "",
              1000,
              "Welcome to the future of sneaker investment. Stokn transforms physical sneakers into digital assets, creating a seamless marketplace for collectors and investors alike.",
              1000,
            ]}
            wrapper="p"
            className={`
              text-gray-300 font-body
              ${isMobile ? "text-sm leading-snug text-left" : "text-xl lg:text-2xl text-left"}
            `}
            speed={75}
            repeat={0}
            cursor={false}
          />
        )}
      </div>
    </section>
  );
}
