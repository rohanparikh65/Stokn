import Hero from "@/components/sections/hero";
import Storage from "@/components/sections/storage";
import Tokenization from "@/components/sections/tokenization";
import Buying from "@/components/sections/buying";
import Investing from "@/components/sections/investing";
import InterestForm from "@/components/sections/interest-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Storage />
      <Tokenization />
      <Buying />
      <Investing />
      <InterestForm />
    </div>
  );
}
