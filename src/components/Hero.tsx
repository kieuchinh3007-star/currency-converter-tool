import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-currency.jpg";

const Hero = () => {
  const scrollToConverter = () => {
    const converterSection = document.getElementById('converter-tool');
    converterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Currency Converter – Real-Time Exchange Rate Calculator
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Easily convert any currency at live exchange rates. Fast, accurate, and completely free.
              </p>
            </div>
            
            <Button 
              onClick={scrollToConverter}
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity shadow-md group"
            >
              Start Calculating
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20 rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Synctrack Currency Converter Tool Interface showing real-time exchange rates"
              className="relative rounded-2xl shadow-lg w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;