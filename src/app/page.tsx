import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Repertoire from "@/components/Repertoire";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-luxury-black min-h-screen text-foreground overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      <Hero />
      <About />
      <Pricing />
      <Reviews />
      <Repertoire />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
