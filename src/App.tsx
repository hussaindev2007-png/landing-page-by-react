
import Navbar from "@/comp/navbar";
import Hero from "./comp/hero";
import Features from "@/comp/Features";
import LogoMarquee from "./comp/LogoMarquee";
import Pricing from "./comp/Pricing";
import FAQ from "./comp/FAQ";
import Footer from "./comp/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor-wrapper"; // updated wrapper

export default function App() {
  return (
    <>
      <SmoothCursor /> 
      <Navbar />
      <main className="pt-24 bg-[#0B0B0B] text-white scroll-smooth">
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}


