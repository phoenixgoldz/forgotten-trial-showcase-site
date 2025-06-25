
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import FundingProgress from "@/components/FundingProgress";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Characters />
      <FundingProgress />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
