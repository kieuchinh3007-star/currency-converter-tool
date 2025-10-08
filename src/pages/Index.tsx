import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrencyConverter from "@/components/CurrencyConverter";
import HowToUse from "@/components/HowToUse";
import WhyUse from "@/components/WhyUse";
import UnderstandingMetrics from "@/components/UnderstandingMetrics";
import FAQ from "@/components/FAQ";
import CrossSell from "@/components/CrossSell";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CurrencyConverter />
        <HowToUse />
        <WhyUse />
        <UnderstandingMetrics />
        <FAQ />
        <CrossSell />
      </main>
      <Footer />
    </div>
  );
};

export default Index;