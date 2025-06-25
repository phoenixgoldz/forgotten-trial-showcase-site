
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Features />
      <Characters />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
